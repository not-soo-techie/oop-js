// ================= EMPLOYEE (Base Class) =================
class Employee {
    #salary;
    #performanceScore;

    constructor(name, age, department, salary, performanceScore = 0) {
        this.name = name;
        this.age = age;
        this.department = department;
        this.#salary = salary;
        this.#performanceScore = performanceScore;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} from the ${this.department} department.`);
    }

    getSalary() {
        return this.#salary;
    }

    getPerformanceScore() {
        return this.#performanceScore;
    }

    get details() {
        return `Employee ${this.name}, Dept: ${this.department}, Salary: ${this.#salary}, Performance: ${this.#performanceScore}`;
    }
}



// ================= REGULAR EMPLOYEE =================

class RegularEmployee extends Employee {

    static count = 0;

    constructor(name, age, department, salary, performanceScore) {
        super(name, age, department, salary, performanceScore);
        RegularEmployee.count++;
    }

    static comparePerformance(e1, e2) {
        if (e1.getPerformanceScore() > e2.getPerformanceScore()) {
            return `${e1.name} has better performance.`;
        } else if (e1.getPerformanceScore() < e2.getPerformanceScore()) {
            return `${e2.name} has better performance.`;
        }
        return "Both employees have equal performance.";
    }
}



// ================= MANAGER =================

class Manager extends Employee {
    constructor(name, age, department, teamSize) {
        super(name, age, department, 0, 0);  // Manager ka salary/perf optional
        this.teamSize = teamSize;
    }

    introduce() {
        console.log(`Manager ${this.name} oversees a team of ${this.teamSize} people in ${this.department}.`);
    }
}



// ================= COMPANY SYSTEM =================

class CompanySystem {
    constructor() {
        this.employees = [];
    }

    addEmployee(emp) {
        this.employees.push(emp);
    }

    listEmployees() {
        this.employees.forEach(e => console.log(e.details));
    }

    getHighestSalaryEmployee() {
        return this.employees.reduce((max, curr) =>
            curr.getSalary() > max.getSalary() ? curr : max
        );
    }

    getTopPerformers(minScore) {
        return this.employees.filter(e =>
            e.getPerformanceScore() >= minScore
        ).map(e => e.name);
    }
}



// ================= TESTING =================

// Step 1: Create RegularEmployee
const e1 = new RegularEmployee("Alice", 28, "IT", 60000, 85);
const e2 = new RegularEmployee("Bob", 32, "Finance", 55000, 78);
const e3 = new RegularEmployee("Charlie", 25, "HR", 48000, 92);
const e4 = new RegularEmployee("Daisy", 30, "Marketing", 52000, 65);

// Step 2: Create Manager
const m1 = new Manager("Edward", 45, "IT", 12);

// Step 3: Create company system
const company = new CompanySystem();

// Step 5: Add Employees
company.addEmployee(e1);
company.addEmployee(e2);
company.addEmployee(e3);
company.addEmployee(e4);
company.addEmployee(m1);

console.log("\n--- Introductions ---");
e1.introduce();
m1.introduce();

console.log("\n--- Encapsulation Test (should fail) ---");
e1.salary = 999999;
console.log("Attempted external change:", e1.salary);
console.log("Actual salary:", e1.getSalary());

console.log("\n--- Employee Details ---");
console.log(e3.details);

console.log("\nTotal Regular Employees:", RegularEmployee.count);

console.log("\n--- Compare Performance ---");
console.log(RegularEmployee.comparePerformance(e1, e3));

console.log("\n--- Company List ---");
company.listEmployees();

console.log("\n--- Highest Salary Employee ---");
const highestSalary = company.getHighestSalaryEmployee();
console.log(highestSalary.details);

console.log("\n--- Top Performers (score ≥ 80) ---");
console.log(company.getTopPerformers(80));
