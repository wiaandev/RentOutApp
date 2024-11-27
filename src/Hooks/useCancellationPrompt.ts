import {useEffect} from 'react';
import {useBlocker} from 'react-router-dom';

export function useCancellationPrompt(props: {when: boolean; message: string}) {
    const block = props.when;

    useBlocker(() => {
        if (block) {
            return !window.confirm(props.message);
        }
        return false;
    });

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (block) {
                event.preventDefault();
            }
        };

        const handleUnload = () => {
            if (block) {
                throw Error('Route Blocked');
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('unload', handleUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('unload', handleUnload);
        };
    }, [block]);
    return null;
}
