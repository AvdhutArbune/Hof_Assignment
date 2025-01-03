// Write a sequence of four asynchronous tasks (task1, task2, task3, task4) that simulate network requests. Each task should take 1 second and log "Task <number> complete". Use nested callbacks (callback hell) to execute them in order. After all tasks are complete, log "All tasks completed".

// Steps:

// Define functions for each task (task1, task2, etc.), each taking a callback to start the next task.
// Use nested callbacks to call each task sequentially.
// After task4, log "All tasks completed"

function task1(callback) {
    setTimeout(() => {
        console.log(`Task 1 is completed`);
        callback()

    }, 1000)
}
function task2(callback) {
    setTimeout(() => {
        console.log(`Task 2 is completed`);
        callback()

    }, 1000)
}
function task3(callback) {
    setTimeout(() => {
        console.log(`Task 3 is completed`);
        callback()

    }, 1000)
}
function task4(callback) {
    setTimeout(() => {
        console.log(`Task 4 is completed`);
        callback()

    }, 1000)
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {

            })
        })
    })
})

// ----------------------------------------------------------------------------------------

// Simulate a task with a 1-second delay, returning a Promise
function task(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Task ${number} complete`);
            resolve();
        }, 1000);
    });
}

// Execute tasks sequentially using Promises
task(1)
    .then(() => task(2))
    .then(() => task(3))
    .then(() => task(4))
    .then(() => {
        console.log("All tasks completed");
    })
    .catch((err) => {
        console.error("An error occurred:", err);
    });
