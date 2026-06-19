function generateInputs() {
    const n = document.getElementById('numSubjects').value;
    const container = document.getElementById('marks-entry');
    container.innerHTML = '';

    for (let i = 1; i <= n; i++) {

        container.innerHTML += `
    Subject ${i}:
    <input type="number" class="subject-mark">
    <br><br>
`;
    }
    container.innerHTML += '<button onclick="calculate()">Calculate Grade</button>';
}

function calculate() {
    const marks = document.getElementsByClassName('subject-mark');
    let total = 0;
    let failed = false;

    for (let mark of marks) {
        let val = parseFloat(mark.value) || 0;
        total += val;
        if (val < 40) failed = true;
    }

    const average = total / marks.length;
    let grade = "";

    if (failed) grade = "Fail (One or more subjects below 40)";
    else if (average >= 90) grade = "A+";
    else if (average >= 80) grade = "A";
    else if (average >= 70) grade = "B";
    else if (average >= 60) grade = "C";
    else grade = "Pass";

    document.getElementById('result').innerHTML =
        `Total: ${total} | Average: ${average.toFixed(2)} | Result: ${grade}`;
}