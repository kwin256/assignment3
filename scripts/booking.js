/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costRate = 35
let dayCounter = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const dayButtons = document.getElementsByClassName("day-button");
for (let dayButton of dayButtons) {
    dayButton.addEventListener("click", changeDays)
}

function changeDays() {
    if (this.classList.contains("clicked")) {
        console.log("day-button has been clicked, no need to deal")
        return;
    }

    this.classList.add("clicked");
    dayCounter++;
    calculateCost()
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearDays);

function clearDays() {
    for (let dayButton of dayButtons) {
        dayButton.classList.remove("clicked")
    }
    dayCounter = 0;
    document.getElementById("calculated-cost").innerText = "0";

}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
const fullDay = document.getElementById("full")
const halfDay = document.getElementById("half")
fullDay.addEventListener("click", changeRate)
halfDay.addEventListener("click", changeRate)

function changeRate() {
    if (this.classList.contains("clicked")) {
        console.log("this day has been clicked")
        return
    }
    if (this.innerText === "full") {
        costRate = 35;
        fullDay.classList.add("clicked")
        halfDay.classList.remove("clicked")
    } else {
        costRate = 20;
        halfDay.classList.add("clicked")
        fullDay.classList.remove("clicked")
    }
    calculateCost();
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    const costElement = document.getElementById("calculated-cost");
    costElement.innerText = (dayCounter * costRate).toString();
}