let compare = document.getElementById("compare");
function compareValues() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let result = document.getElementById("result");


    let value2 = Number(input2.value);
    let value1 = Number(input1.value);

    if (value1 > value2) {
        result.innerText = `Input 1 ${value1} is greater than Input 2 ${value2}.`;
    } else if (value1 < value2) {
        result.innerText = `Input 1 ${value1} is less than Input 2 ${value2}.`;
    } else {
        result.innerText = "Both inputs are equal.";
    }

}

compare.addEventListener("click", function () {
    compareValues()
})



// compare ends here



function calculateMonthDifference() {
    let dateInput = document.getElementById("dateInput").value;
    let result = document.getElementById("result");
    let selectedDate = new Date(dateInput);
    let selectedMonth = selectedDate.getMonth();
    let selectedYear = selectedDate.getFullYear();

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    let totalMonthDifference =
        (currentYear - selectedYear) * 12 + (currentMonth - selectedMonth);

    let theYear = totalMonthDifference / 12
    result.innerText = `The difference is ${totalMonthDifference} months which is approsimately ${theYear}years.`;
}


let colorPicker = document.getElementById("colorPicker");
let colorBox = document.getElementById("colorBox");

// Listen for color changes
colorPicker.addEventListener("input", function () {
    colorBox.style.backgroundColor = colorPicker.value;
    colorBox.style.borderColor = colorPicker.value;
});
