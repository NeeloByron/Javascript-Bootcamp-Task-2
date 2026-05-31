//4.2 JavaScript Requirements//
//1. Select elements using using getElementByID() or querySelect()//
const nameInput = document.getElementById("name"); 
const markInput = document.getElementById("mark");
const ResultList = document.getElementById("results");
const studentList = document.getElementById("list");
const emptyMessage = document.getElementById("message");

//2. Read form values using .value and parse numbers with parselnt
function submitStudent() {
    const studentName = nameInput.value.trim();
    const studentMark = parseInt(markInput.value);


//.3 Validate the input before processing - reject empty names and out of range marks
if (studentName === "") {
    showResult("Please enter a student name.", "fail");
    return;
}

if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
    showResult("Please enter a valid mark between 0 and 100.", "fail");
    return;
}

//4. Use if/else if/else to check the mark and determine the grade.
let grade;
let result;

if (studentMark >= 80 && studentMark <= 100) {
    grade = "Distinction";
    result = "PASS";
}
else if (studentMark >= 65 && studentMark <=79) {
    grade = "Merit";
    result = "PASS";
}
else if (studentMark >= 50 && studentMark <=64) {
    grade = "Pass";
    result = "PASS";
}
else {
    grade = "Fail";
    result = "FAIL";
}

//5. Update the DOM result area using textContent or innerHTML
const message = `${studentName} got ${studentMark}/100 - ${grade} (${result})`;
  showResult(message, result === "PASS" ? "pass" : "fail");

//.6 Append to the list using createElement() and appendChild()//
//Remove the "No Student yet" placeholder on the first submission
if (emptyMessage) {
    emptyMessage.remove()
}

//creating a new <li> element
const li = document.createElement("li");

//fill it with the student's info
li.innerHTML = `<span>${studentName} - <strong>${studentMark}/100</strong></span>
                <span class="${result === 'PASS' ? 'badge-pass' : 'badge-fail'}">${result}  ${grade}</span>`;

//Add the new <li> to the <ul>
studentList.appendChild(li);

//clear inputs after submit
nameInput.value = "";
markInput.value = "";
nameInput.focus();
}

//show the results message
function showResult(message, type) {
    ResultList.textContent = message;
    ResultList.className = type;
    ResultList.style.display = "block";
}