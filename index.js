let role = prompt("Enter Role: ").toLowerCase();
let username = prompt("Enter Username: ");
let password = prompt("Enter Password: ");

function login() {
    if (typeof username === "string" && typeof role === "string" && typeof password === "string") {
        switch (role) {
            case "admin":
                alert("Welcome back to the class portal, admin!");
                break;
            case "teacher":
                alert("Thank you for logging in, teacher!");
                gradeInput();
                break;
            case "student":
                alert("Welcome to the class portal, student!");
                gradeInput();
                break;
            default:
                alert("Role out of range.");
                break;
        }
    }
}

function gradeInput() {
    alert("\n|Average Grade Calculator|");
    let grades = [];
    for (let i = 0; i < 4; i++) {
        grades.push(parseInt(prompt("Enter score " + (i + 1) + ": ")));
    }
    grade(grades);
}

function grade(grades) {
    let sum = grades.reduce((total, grade) => total + grade, 0);
    let average = sum / grades.length;

    if (average >= 96 && average <= 100) {
        console.log("Hello " + role + ", your average is: " + Math.round(average) + "\nand your grade is A+");
    } else if (average >= 90 && average <= 95) {
        console.log("Hello " + role + ", your average is: " + Math.round(average) + "\nand your grade is A");
    } else if (average >= 85 && average <= 89) {
        console.log("Hello " + role + ", your average is: " + Math.round(average) + "\nand your grade is B");
    } else if (average <= 74) {
        console.log("Hello " + role + ", your average is: " + Math.round(average) + "\nand your grade is F");
    }
}

login();
