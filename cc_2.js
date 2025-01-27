//Task 1: Store Inventory
let products = ["Canvas","Paint Brush","Pencils", "Acrylic Paint", "Fineliner Pens"]
products.push("Watercolor paint");
products.pop();

console.log("Updated product listing", products);

//Task 2: Student Scores
let scores = [55, 62, 90, 75, 89]
scores[1] = 96

let averageScores = scores.reduce((sum, score) => sum + score, 0)/ scores.length;

console.log("Updated Second Score", scores);
console.log("Average of Scores", averageScores);

//Task 3: Employee Records
let employee = {
    name: "Charles Jones", 
    age: 31,
    department: "Manager",
    isActive: true
};

employee.department = "Finance";
employee.position = "Financial Analyst";

console.log("Updated Employee Record", employee)

//Task 4: Customer Database
let customer = [
    {name:"Mario", email: mariothebest310@gmail.com, purchaseAmount: 550},
    {name:"Luigi", email: luigibro@hotmail.com, purchaseAmount: 250},
    {name:"Wario", email: warioman@gmail.com, purchaseAmount: 700}
];

customer.push({name:"Waluigi", email: waluigitime28@outlook.com, purchaseAmount:360});

console.log(customer);

//Task 5: Order Processing System