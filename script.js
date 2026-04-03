function calculateMarks() {
    let mark1 = parseFloat(document.getElementById("mark1").value);
    let mark2 = parseFloat(document.getElementById("mark2").value);
    let mark3 = parseFloat(document.getElementById("mark3").value);
    let result = document.getElementById("result");

    if (isNaN(mark1) || isNaN(mark2) || isNaN(mark3)) {
        result.innerHTML = "<p class='error'>Please enter marks for all subjects.</p>";
        return;
    }

    if (mark1 < 0 || mark1 > 100 || mark2 < 0 || mark2 > 100 || mark3 < 0 || mark3 > 100) {
        result.innerHTML = "<p class='error'>Marks should be between 0 and 100.</p>";
        return;
    }

    let total = mark1 + mark2 + mark3;
    let average = total / 3;
    let percentage = (total / 300) * 100;
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

    result.innerHTML = `
        <strong>Result:</strong><br>
        Total Marks: ${total}<br>
        Average Marks: ${average.toFixed(2)}<br>
        Percentage: ${percentage.toFixed(2)}%<br>
        Grade: ${grade}
    `;
}

function resetFields() {
    document.getElementById("mark1").value = "";
    document.getElementById("mark2").value = "";
    document.getElementById("mark3").value = "";
    document.getElementById("result").innerHTML = "";
}
