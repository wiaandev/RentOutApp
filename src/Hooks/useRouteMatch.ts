import {matchPath, useLocation, PathPattern} from 'react-router-dom';

export interface RouteMatchOptions {
    caseSensitive?: boolean;
    end?: boolean;
}

export function useRouteMatch(
    patterns: readonly string[],
    options?: RouteMatchOptions,
) {
    const {pathname} = useLocation();
    const {caseSensitive = false, end = false} = options || {};

    const pathPatterns: PathPattern[] = patterns.map((path) => {
        return {
            path,
            caseSensitive,
            end,
        };
    });

    for (let i = 0; i < pathPatterns.length; i += 1) {
        const pattern = pathPatterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
            return possibleMatch;
        }
    }

    return null;
}
