// Array to store all employee objects
var employees = [];

// Add employee object to the array
function addEmployee() {
  var name   = document.getElementById("empName").value;
  var id     = document.getElementById("empID").value;
  var salary = parseFloat(document.getElementById("empSalary").value);
  var dept   = document.getElementById("empDept").value;

  if (name == "" || id == "" || isNaN(salary) || dept == "") {
    alert("Please fill in all fields.");
    return;
  }

  // Store each employee as an object
  var employee = {
    name: name,
    id: id,
    salary: salary,
    department: dept
  };

  employees.push(employee);
  alert("Employee added! Total employees: " + employees.length);

  // Clear inputs
  document.getElementById("empName").value   = "";
  document.getElementById("empID").value     = "";
  document.getElementById("empSalary").value = "";
  document.getElementById("empDept").value   = "";
}

// Display all employees using for...of loop
function displayAll() {
  if (employees.length == 0) {
    showResult("<p>No employees added yet.</p>");
    return;
  }

  var html = "<h3>All Employees</h3>" + buildTable(employees);
  showResult(html);
}

// Filter employees with salary > 50000 using filter()
function filterBySalary() {
  var filtered = employees.filter(function(emp) {
    return emp.salary > 50000;
  });

  if (filtered.length == 0) {
    showResult("<p>No employees with salary greater than ₹50,000.</p>");
    return;
  }

  var html = "<h3>Employees with Salary &gt; ₹50,000</h3>" + buildTable(filtered);
  showResult(html);
}

// Calculate total salary using for...of loop
function totalSalary() {
  if (employees.length == 0) {
    showResult("<p>No employees added yet.</p>");
    return;
  }

  var total = 0;
  for (var emp of employees) {
    total += emp.salary;
  }

  showResult("<h3>Total Salary Payout</h3><p>₹" + total + "</p>");
}

// Calculate average salary
function averageSalary() {
  if (employees.length == 0) {
    showResult("<p>No employees added yet.</p>");
    return;
  }

  var total = 0;
  for (var emp of employees) {
    total += emp.salary;
  }

  var avg = total / employees.length;
  showResult("<h3>Average Salary</h3><p>₹" + avg.toFixed(2) + "</p>");
}

// Count employees in a specific department
function countByDept() {
  var dept = document.getElementById("deptName").value.trim();

  if (dept == "") {
    alert("Please enter a department name.");
    return;
  }

  var count = 0;
  for (var emp of employees) {
    if (emp.department.toLowerCase() == dept.toLowerCase()) {
      count++;
    }
  }

  showResult("<h3>Department Count</h3><p>Employees in <b>" + dept + "</b>: " + count + "</p>");
}

// Helper: build HTML table from an array of employee objects
function buildTable(arr) {
  var html = "<table><tr><th>Name</th><th>ID</th><th>Salary (₹)</th><th>Department</th></tr>";

  // for...in loop to access object properties
  for (var i = 0; i < arr.length; i++) {
    var emp = arr[i];
    html += "<tr>";
    for (var key in emp) {
      html += "<td>" + emp[key] + "</td>";
    }
    html += "</tr>";
  }

  html += "</table>";
  return html;
}

// Helper: show result div
function showResult(html) {
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = html;
  resultDiv.style.display = "block";
}