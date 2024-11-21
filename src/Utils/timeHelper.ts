import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// Extend Day.js with the relativeTime plugin
dayjs.extend(relativeTime);

/**
 * Calculates the time difference from the given timestamp to now.
 * @param {string} createdAt - The ISO 8601 timestamp.
 * @returns {string} - A human-readable string like "2 days ago".
 */
export const calculateTimeDifference = (createdAt: string): string => {
    return dayjs(createdAt).fromNow(); // e.g., "2 days ago"
};
