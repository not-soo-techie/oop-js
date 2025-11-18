# **🧪 Lab Assignment -- Object-Oriented Programming in JavaScript**

### **Employee Management System (Classes, Inheritance, Encapsulation, Static Properties, Polymorphism)**

In this lab, you will build a mini **Employee Management System** using
**OOP principles in JavaScript**.  
Your task is to design multiple classes, implement inheritance, use
private fields, apply polymorphism, and manage employees inside a
Company System.

At the end, your code should pass a given set of behavioral tests.

# **✅ What You Will Build** {#what-you-will-build}

You must implement the following classes:

### **1. Employee (Base class)** {#employee-base-class}

### **2. RegularEmployee (Child class)** {#regularemployee-child-class}

### **3. Manager (Child class)** {#manager-child-class}

### **4. CompanySystem (Aggregator class to store employees)** {#companysystem-aggregator-class-to-store-employees}

Your output must behave exactly like a real-world employee management
module.

# **🚀 Learning Objectives** {#learning-objectives}

This lab tests your understanding of:

- **Classes & Constructors**

- **Inheritance (extends)**

- **Private class fields (#property)**

- **Encapsulation (getters, methods)**

- **Static properties & methods**

- **Method overriding (polymorphism)**

- **Array-based system to manage objects**

- **Finding and filtering objects**

# **🧱 PART 1 - Create the Employee Class**

Create a base class with:

### **Properties**

- name

- age

- department

### **Method**

```js
introduce()

// Output: \"Hi, I\'m {name} from the {department} department.\"
```

This method will later be **overridden** by the Manager class.

# **🧱 PART 2 - RegularEmployee Class (inherits from Employee)**

### **Extend from:**

class RegularEmployee extends Employee

### **Private Fields (Encapsulation)**

Use real JS private properties:

- `#salary`

- `#performanceScore`

### **Static Property**

`RegularEmployee.count`

This must increase every time a new regular employee is created.

### **Constructor Arguments**

`name`, `age`, `department`, `salary`, `performanceScore`

### **Methods**

#### **`updatePerformance(score)`**

- Updates the performance score

- Score must be between **0-100**

#### **`increaseSalary(amount)`**

- Adds to salary

- Amount must be positive

#### **Getter: `details`**

Return a formatted string:

`Employee Alice, Dept: IT, Salary: 60000, Performance: 85`

#### **Getter:**

`getSalary()`

`getScore()`

#### **Static Method:**

`comparePerformance(e1, e2)`

Returns:

- `"Alice has better performance"`

- `"Bob has better performance"`

- `"Both employees have equal performance"`

# **🧱 PART 3 - Manager Class (inherits from Employee)**

Additional property:

- `teamSize`

Override introduce:

`"Manager Edward oversees a team of 12 people in IT."`

This demonstrates **method overriding (polymorphism).**

# **🧱 PART 4 - CompanySystem Class**

A class to hold and manage employees.

### **Properties**

- `employees` → an array

### **Methods**

#### **`addEmployee(emp)`**

- Only objects of type `Employee` (or its subclasses) are allowed

- Push into the employees list

#### **`removeEmployee(name)`**

- Remove employee with given name

- Return `true` if removed, otherwise `false`

#### **`getTopPerformers(minScore)`**

- Return all **RegularEmployees** with performance score ≥ minScore

#### **getHighestSalaryEmployee()**

- Check only **RegularEmployees**

- Return the one with highest salary

- Return `null` if no regular employees exist

#### **`listEmployees()`**

Print the names of all employees.

# **🧪 PART 5 - Behavioral Tests Your Code MUST Pass**

You should write your classes so that the following test script produces
the correct output:

### **1. Create Regular Employees** {#create-regular-employees}

const e1 = new RegularEmployee(\"Alice\", 28, \"IT\", 60000, 85);

const e2 = new RegularEmployee(\"Bob\", 32, \"Finance\", 55000, 78);

const e3 = new RegularEmployee(\"Charlie\", 25, \"HR\", 48000, 92);

const e4 = new RegularEmployee(\"Daisy\", 30, \"Marketing\", 52000, 65);

### **2. Create Manager** {#create-manager}

const m1 = new Manager(\"Edward\", 45, \"IT\", 12);

### **3. Add employees to the company** {#add-employees-to-the-company}

const company = new CompanySystem();

company.addEmployee(e1);

company.addEmployee(e2);

company.addEmployee(e3);

company.addEmployee(e4);

company.addEmployee(m1);

### **4. Introductions**

Employees use the base introduce method.  
Manager overrides it.

### **5. Encapsulation Test**

External salary modification should NOT work:
```js
e1.salary = 100000

// Should NOT change actual salary

console.log(e1.getSalary()) // original salary only
```

### **6. Details Getter**

```js
console.log(e3.details)
```

### **7. Static Counter**

```js
console.log(RegularEmployee.count);
```

### **8. Static Method - Compare Performance**

```js
RegularEmployee.comparePerformance(e1, e3);
```

### **9. Company List**

```js
company.listEmployees();
```

### **10. Highest Salary**

```js
company.getHighestSalaryEmployee();
```

### **11. Filter Top Performers**

```js
company.getTopPerformers(80);
```

# **📝 Submission Requirements** {#submission-requirements}

You must submit:

✔ All class definitions  
✔ Code that passes every test behavior listed above  
✔ Use of:

- `extends`

- private fields \#

- getters

- static properties/methods

- array manipulation

- method overriding

# **🎉 You\'re Done!** {#youre-done}

This lab gives you hands-on experience with **real OOP features in
JavaScript** --- the same concepts used in production systems and
backend class modeling.
