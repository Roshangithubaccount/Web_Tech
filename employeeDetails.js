class EmployeeDetails{
    constructor(name, emp_id, salary, phone_number, location) {  // constructor method
        this.name = name;
        this.emp_id = emp_id;
        this.phone_number = phone_number;
        this.salary= salary;
        this.location = location;
    }
    displayDetails() {
        console.log("Employee Name : " + this.name);
        console.log("emp_id      : " + this.emp_id);
        console.log("salary      : " + this.salary);
        console.log("phone_number: " + this.phone_number);
        console.log("Location    : " + this.location);
    }
}

let employee = new EmployeeDetails("Abhishek Pandey", 100,  25000, 987654321, "Delhi");
employee.displayDetails();