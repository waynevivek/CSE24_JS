// Generate input fields for each subject using a loop
function generateFields() {
  var n = parseInt(document.getElementById("numSubjects").value);

  if (isNaN(n) || n < 1) {
    alert("Please enter a valid number of subjects.");
    return;
  }

  var html = "";

  // Loop to create input fields
  for (var i = 1; i <= n; i++) {
    html += "<label>Marks for Subject " + i + ":</label>";
    html += "<input type='number' id='subject" + i + "' min='0' max='100' />";
  }

  document.getElementById("marksFields").innerHTML = html;
  document.getElementById("calcBtn").style.display = "block";
}

// Calculate total, average, grade, and pass/fail
function calculate() {
  var n = parseInt(document.getElementById("numSubjects").value);
  var total = 0;
  var marks = [];

  // Loop to read and sum marks
  for (var i = 1; i <= n; i++) {
    var m = parseFloat(document.getElementById("subject" + i).value);

    if (isNaN(m) || m < 0 || m > 100) {
      alert("Please enter valid marks (0-100) for all subjects.");
      return;
    }

    marks.push(m);
    total += m;
  }

  var average = total / n;

  // Condition to find grade
  var grade;
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Condition for pass or fail
  var result;
  if (average >= 50) {
    result = "Pass";
  } else {
    result = "Fail";
  }

  // Display the result on the webpage
  var output = "<h2>Result</h2>";
  output += "<p>Total Marks: " + total + "</p>";
  output += "<p>Average Marks: " + average.toFixed(2) + "</p>";
  output += "<p>Grade: " + grade + "</p>";
  output += "<p>Result: " + result + "</p>";

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = output;
  resultDiv.style.display = "block";
}