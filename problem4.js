// You are tasked with building an Employee Performance Evaluation System. You have an array of employee objects, where each employee has the following properties: name, tasksCompleted, and rating. Your task is to perform the following steps using higher-order functions:

// Filter the employees who have completed more than 5 tasks.
// Map the filtered employees to a new array that contains only the employee's name and their performance level. The performance level is determined by the following criteria:
// If rating is above 4.5, their performance level is "Excellent".
// If rating is between 3 and 4.5 (inclusive), their performance level is "Good".
// Otherwise, their performance level is "Needs Improvement".
// Sort the final array of employees in descending order based on their performance level, prioritizing "Excellent", then "Good", and finally "Needs Improvement".
// Return the final sorted array containing the employee names and their performance levels.
// Example:

// Input: [
//   { name: "Alice", tasksCompleted: 8, rating: 4.7 },
//   { name: "Bob", tasksCompleted: 4, rating: 4.0 },
//   { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
//   { name: "David", tasksCompleted: 10, rating: 4.9 },
//   { name: "Eve", tasksCompleted: 7, rating: 2.8 }
// ]

// Output: [
//   { name: "David", performance: "Excellent" },
//   { name: "Alice", performance: "Excellent" },
//   { name: "Charlie", performance: "Good" }
// ]
// Explanation:

// Bob and Eve are excluded because they did not complete more than 5 tasks.
// David and Alice are marked as "Excellent" due to their high ratings, while Charlie is marked as "Good".

const employees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

// Step 1: Filter employees who completed more than 5 tasks
const filteredEmployees = employees.filter(employee => employee.tasksCompleted > 5);

// Step 2: Map to a new array with name and performance level
const performanceLevels = filteredEmployees.map(employee => {
    let performance = "";
    if (employee.rating > 4.5) {
        performance = "Excellent";
    } else if (employee.rating >= 3) {
        performance = "Good";
    } else {
        performance = "Needs Improvement";
    }
    return { name: employee.name, performance };
});

// Step 3: Sort the array by performance level in descending order
const sortedEmployees = performanceLevels.sort((a, b) => {
    const performanceOrder = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };
    return performanceOrder[b.performance] - performanceOrder[a.performance];
});

// Output the final sorted array
console.log(sortedEmployees);
