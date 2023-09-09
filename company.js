let dept = {
    name: "HR",
    employeeCount: 125,
    hod: "Proton"
};

class Department {

    constructor(name, employeeCount, hod){
        this.name = name;
        this.employeeCount = employeeCount;
        this.hod = hod;
    }

    display() {
        console.log("I am department: ", this.name);
    }
}

module.exports = {dept, Department};