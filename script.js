function calculateMarks() {
    let m1 = parseFloat(document.getElementById("mark1").value) || 0;
    let m2 = parseFloat(document.getElementById("mark2").value) || 0;
    let m3 = parseFloat(document.getElementById("mark3").value) || 0;

    let total = m1 + m2 + m3;
    let average = total / 3;

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>Average Marks: " + average.toFixed(2);
}