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

