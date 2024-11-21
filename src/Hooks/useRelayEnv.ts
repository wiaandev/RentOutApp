import * as React from 'react';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

// Fetch function with retry and timeout logic
const fetchGraphQL = async (operation, variables, timeout = 300000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add authentication headers or other headers as needed
            },
            body: JSON.stringify({
                query: operation.text, // GraphQL query string
                variables,
            }),
            signal: controller.signal,
        });

        if (!response.ok) {
            // Retry logic for specific status codes
            if (response.status === 503) {
                throw new Error('Service Unavailable');
            }
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Request timeout');
        }
        throw error;
    } finally {
        clearTimeout(id);
    }
};

// Retry fetch with retry logic
const retryFetch = async (operation, variables, options) => {
    const { retries = 2, ...fetchOptions } = options;
    let attempts = 0;
    while (attempts < retries) {
        try {
            return await fetchGraphQL(operation, variables, fetchOptions.timeout);
        } catch (error) {
            if (attempts < retries - 1 && error.message === 'Service Unavailable') {
                attempts++;
            } else {
                throw error;
            }
        }
    }
};

const network = Network.create((operation, variables) =>
    retryFetch(operation, variables, {
        timeout: 300000,
        retries: 2,
    }),
);

export function useRelayEnv() {
    // Initialize the store and environment
    const store = React.useMemo(() => new Store(new RecordSource()), []);
    const environment = React.useMemo(
        () => new Environment({ network, store }),
        [store]
    );

    // Version information (can be dynamic or static)
    const version = '1.0.0'; // Replace this with actual version logic if needed

    // Function to reset the environment (clear the store and create a new one)
    const resetEnvironment = () => {
        const newStore = new Store(new RecordSource());
        return new Environment({ network, store: newStore });
    };

    return {
        environment,
        version,
        resetEnvironment,
    };
}
