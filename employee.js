class Employee {
  constructor(name, age, department) {
    this.name = name;
    this.age = age;
    this.department = department;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} from the ${this.department} department.`);
  }
}

// ===== RegularEmployee Class =====
class RegularEmployee extends Employee {
  #salary;
  #performanceScore;

  static count = 0;

  constructor(name, age, department, salary, score) {
    super(name, age, department);
    this.#salary = salary;
    this.#performanceScore = score;
    RegularEmployee.count++;
  }

  updatePerformance(score) {
    if (score < 0 || score > 100) {
      console.log("Invalid score. Must be 0–100.");
      return;
    }
    this.#performanceScore = score;
  }

  increaseSalary(amount) {
    if (amount <= 0) {
      console.log("Invalid salary increase.");
      return;
    }
    this.#salary += amount;
  }

  get details() {
    return `Employee ${this.name}, Dept: ${this.department}, Salary: ${this.#salary}, Performance: ${this.#performanceScore}`;
  }

  getSalary() {
    return this.#salary;
  }

  getScore() {
    return this.#performanceScore;
  }

  static comparePerformance(e1, e2) {
    if (e1.getScore() > e2.getScore()) return `${e1.name} has better performance`;
    if (e2.getScore() > e1.getScore()) return `${e2.name} has better performance`;
    return "Both employees have equal performance";
  }
}

// ===== Manager Class =====
class Manager extends Employee {
  constructor(name, age, department, teamSize) {
    super(name, age, department);
    this.teamSize = teamSize;
  }

  introduce() {
    console.log(
      `Manager ${this.name} oversees a team of ${this.teamSize} people in ${this.department}.`
    );
  }
}

// ===== CompanySystem =====
class CompanySystem {
  constructor() {
    this.employees = [];
  }

  addEmployee(emp) {
    if (!(emp instanceof Employee)) {
      console.log("Only Employee objects can be added.");
      return;
    }
    this.employees.push(emp);
  }

  removeEmployee(name) {
    const index = this.employees.findIndex((e) => e.name === name);
    if (index === -1) return false;
    this.employees.splice(index, 1);
    return true;
  }

  getTopPerformers(minScore) {
    return this.employees.filter(
      (e) => e instanceof RegularEmployee && e.getScore() >= minScore
    );
  }

  getHighestSalaryEmployee() {
    const regulars = this.employees.filter((e) => e instanceof RegularEmployee);
    if (regulars.length === 0) return null;

    return regulars.reduce((max, emp) =>
      emp.getSalary() > max.getSalary() ? emp : max
    );
  }

  listEmployees() {
    console.log("Employees in the Company:");
    this.employees.forEach((e) => console.log("- " + e.name));
  }
}