import { api, work } from "./worker.js";

async function MultiThread(){
    console.time('multi-thread-record-time');
    const promises = [];

    for (let i = 0; i <= 10; i++) {
        // Use the "api" as a function to call the
        // task as a multithreaded operation.
        const promise = api({ name: 'work' });
        // Add the task's promise to the array.
        promises.push(promise);
    }
    
    // Wait for all of the operations to complete.
    await Promise.all(promises);
    console.timeEnd('multi-thread-record-time');
}

function SingleThread(){
    console.time('one-thread-record-time');
    for(let i =0; i<10;i++) {
        work();
    }
    console.timeEnd('one-thread-record-time');
}

async function main() {
    SingleThread();
    await MultiThread();
}

main();


