const dateInput = document.getElementById("date");
const calculateButton = document.getElementById("calculate");

const result = document.getElementById("result");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

dateInput.max = new Date().toISOString().split("T")[0];

calculateButton.addEventListener("click", function () {

    if (dateInput.value === "") {
        alert("Please select your date of birth.");
        return;
    }

    const birthDate = new Date(dateInput.value + "T00:00:00");
    const today = new Date();

    if (birthDate > today) {
        alert("Date of birth cannot be in the future.");
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        ageDays += previousMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    years.textContent = ageYears;
    months.textContent = ageMonths;
    days.textContent = ageDays;

    result.style.display = "block";
});