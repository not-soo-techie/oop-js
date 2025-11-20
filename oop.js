class Employee{
    constructor(name, age, department){
        this.name = name;
        this.age = age;
        this.department = department;
    }
    introduce(){
        console.log(`Hi, I'm ${this.name} from the ${this.department} department.`);
    }
}

class RegularEmployee extends Employee {
    static count = 0;
    #salary;
    #performanceScore;
    constructor(name, age, department, salary, performanceScore){
        super(name, age, department);
        this.#salary = salary;
        this.#performanceScore = performanceScore;

        RegularEmployee.count++;
    }
    updatePerformance(score){
        if (score < 0 || score > 100){
            console.log("Invalid score! Must be between 0 and 100.");
            return;
        }
        this.#performanceScore = score;
    }

    increaseSalary(amount){
        if (amount <= 0) {
            console.log("Amount must be positive.");
            return;
        }
        this.#salary += amount;
    }

    getSalary(){
        return this.#salary;
    }

    getScore(){
        return this.#performanceScore;
    }

    get details(){
        return `Employee ${this.name}, Dept: ${this.department}, Salary: ${this.#salary}, Performance: ${this.#performanceScore}`;
    }

    static comparePerformance(e1, e2){
        if (e1.getScore() > e2.getScore()){
            return `${e1.name} has better performance`;
        } 
        else if (e1.getScore() < e2.getScore()){
            return `${e2.name} has better performance`;
        }
        return "Both employees have equal performance";
    }
}

class Manager extends Employee {
    constructor(name, age, department, teamSize){
        super(name, age, department);
        this.teamSize = teamSize;
    }
    introduce(){
        console.log(
            `Manager ${this.name} oversees a team of ${this.teamSize} people in ${this.department}.`
        );
    }
}

class CompanySystem {
    constructor() {
        this.employees = [];
    }

    addEmployee(emp){
        if (emp instanceof Employee) {
            this.employees.push(emp);
        } else {
            console.log("Only Employee objects allowed!");
        }
    }

    removeEmployee(name){
        const index = this.employees.findIndex(e => e.name === name);
        if (index !== -1) {
            this.employees.splice(index, 1);
            return true;
        }
        return false;
    }

    getTopPerformers(minScore){
        return this.employees
            .filter(e => e instanceof RegularEmployee && e.getScore() >= minScore)
            .map(e => e.name);
    }

    getHighestSalaryEmployee(){
        const regulars = this.employees.filter(e => e instanceof RegularEmployee);
        if (regulars.length === 0) return null;

        return regulars.reduce((max, curr) =>
            curr.getSalary() > max.getSalary() ? curr : max
        );
    }

    listEmployees(){
        this.employees.forEach(e => {
            console.log(e.name);
        });
    }
}


// ======== TESTING ========
const { Employee, RegularEmployee, Manager, CompanySystem } = require('./employee.js');

// Step 1: Create RegularEmployee
// name, age, department, salary, performanceScore
const e1 = new RegularEmployee("Alice", 28, "IT", 60000, 85);
const e2 = new RegularEmployee("Bob", 32, "Finance", 55000, 78);
const e3 = new RegularEmployee("Charlie", 25, "HR", 48000, 92);
const e4 = new RegularEmployee("Daisy", 30, "Marketing", 52000, 65);

// Step 2: Create Manager
// name, age, department, teamSize
const m1 = new Manager("Edward", 45, "IT", 12);

// Step 3: Extract common properties in Employee Class

// Step 3: Create company system
const company = new CompanySystem();

// Step 4: Should have `employees` array property to manage employees

// Step 5: `addEmployee` function to add employees
company.addEmployee(e1);
company.addEmployee(e2);
company.addEmployee(e3);
company.addEmployee(e4);
company.addEmployee(m1);

console.log("\n--- Introductions ---");
// Step 6: Employee Introduction - `Hi, I'm ${this.name} from the ${this.department} department.`;
e1.introduce();

// Step 7: Override manager introduction
// `Manager ${this.name} oversees a team of ${this.teamSize} people in ${this.department}.`
m1.introduce();

// Step 8: Private salary
console.log("\n--- Encapsulation Test (should fail) ---");
e1.salary = 999999; 
console.log("Attempted external change:", e1.salary);
console.log("Actual salary:", e1.getSalary());

// Step 9: `Employee ${this.name}, Dept: ${this.department}, Salary: ${this.#salary}, Performance: ${this.#performanceScore}`
console.log("\n--- Employee Details ---");
console.log(e3.details);

// Step 10: Count of regular employees (hint: use static)
console.log("\nTotal Regular Employees:", RegularEmployee.count);

// Step 11: Compare performance (hint: use static)
console.log("\n--- Compare Performance ---");
console.log(RegularEmployee.comparePerformance(e1, e3));

// Step 12: Company - List of employees
console.log("\n--- Company List ---");
company.listEmployees();

// Step 13: Company - Highest salary employee
console.log("\n--- Highest Salary Employee ---");
const highestSalary = company.getHighestSalaryEmployee();
console.log(highestSalary.details);

// Step 14: Company - Top Performer
console.log("\n--- Top Performers (score ≥ 80) ---");
console.log(company.getTopPerformers(80));

