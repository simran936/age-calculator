
// Define function to get calculated Age
function getDOB() {
    // Getting input from html input element
    let data = document.getElementById("inputDob").value;

    // Convert input data to usable format as day, month, and year
    let dob = new Date(data);
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();

    // Getting current date
    let now = new Date();
    
    // Calculate the age
    let yearDiff = now.getFullYear() - year;
    let monthDiff = now.getMonth() - month;
    let dateDiff = now.getDate() - day;

    // Adjust the age if the current month and day are before the birth month and day
    if (monthDiff < 0 || (monthDiff === 0 && dateDiff < 0)) {
        yearDiff--;
        if (monthDiff < 0) {
            monthDiff += 12;
        }
        if (dateDiff < 0) {
            let prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            dateDiff += prevMonthLastDay;
        }
    }

    // Show calculated age as output and invalid if wrong input is given
    if (yearDiff < 0) {
        document.getElementById("currentAge").innerHTML = "Invalid Date";
    } else {
        document.getElementById("currentAge").innerHTML =
            "Your current Age is " + yearDiff + " years " +
            monthDiff + " months " + dateDiff + " days";
    }
}
