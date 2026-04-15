function calculateMarks() {
  let s1 = parseFloat(document.getElementById("sub1").value);
  let s2 = parseFloat(document.getElementById("sub2").value);
  let s3 = parseFloat(document.getElementById("sub3").value);
  let s4 = parseFloat(document.getElementById("sub4").value);
  let s5 = parseFloat(document.getElementById("sub5").value);

  if (
    isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(s4) || isNaN(s5)
  ) {
    document.getElementById("message").innerText = "Please enter marks for all 5 subjects.";
    return;
  }

  if (
    s1 < 0 || s1 > 100 ||
    s2 < 0 || s2 > 100 ||
    s3 < 0 || s3 > 100 ||
    s4 < 0 || s4 > 100 ||
    s5 < 0 || s5 > 100
  ) {
    document.getElementById("message").innerText = "Marks should be between 0 and 100.";
    return;
  }

  let total = s1 + s2 + s3 + s4 + s5;
  let average = total / 5;
  let percentage = (total / 500) * 100;
  let grade = "";

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

  document.getElementById("total").innerText = total;
  document.getElementById("average").innerText = average.toFixed(2);
  document.getElementById("percentage").innerText = percentage.toFixed(2) + "%";
  document.getElementById("grade").innerText = grade;
  document.getElementById("message").innerText = "Result calculated successfully.";
}

function resetResult() {
  document.getElementById("total").innerText = "0";
  document.getElementById("average").innerText = "0";
  document.getElementById("percentage").innerText = "0%";
  document.getElementById("grade").innerText = "-";
  document.getElementById("message").innerText = "Enter all marks to see the result.";
}
