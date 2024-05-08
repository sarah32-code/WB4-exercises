let emp = {

    employeeId: "1",
    name: "sarah",
    jobTitle: "Teacher",
    payRate: 38.46
};

console.log(emp.name);

function printempandpay(emp) {

    console.log("Name: " + emp.name);
    console.log("Pay: " + emp.payRate);
}
printempandpay(emp);