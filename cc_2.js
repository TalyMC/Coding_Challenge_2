//Task 1: Store Inventory
let products = ["Canvas","Paint Brush","Pencils", "Acrylic Paint", "Fineliner Pens"]
products.push("Watercolor paint");
products.pop();

console.log("Updated product listing", products);

//Task 2: Student Scores
let scores = [55, 62, 90, 75, 89]
scores[1] = 96

let total = scores.reduce((sum, score) => sum + score, 0);
let averageScores = total/scores.length

console.log("Updated Second Score", scores);
console.log("Total Scores", total);
console.log("Average of Scores", averageScores);

//Task 3: Employee Records
