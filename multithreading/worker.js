import { define } from "nanolith";
export const api = await define({
    // Define the work function inside of the object.
    work
});

export function sleepSync(milliseconds) {
    const start = Date.now();
    const expire = start + milliseconds;
    while (Date.now() < expire) {}
}

// A function that simulates a heavy blocking workload by
// synchronously sleeping for 2 seconds.
export function work() {
    sleepSync(2000);
}
