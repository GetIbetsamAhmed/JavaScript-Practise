// Conditional and multi-Conditional
if (false) {
    let age = prompt("Enter your age");
    let res = "";
    if (age < 18 && age >= 10) {
        res = "You are younger";
    } else if (age < 10) {
        res = "You are child";
    } else {
        res = "You are mature";
    }
    alert(res);
}
// Conditional and multi-Conditional



// Number of months calculator
if (false) {

    let age = prompt("Enter your birth year");

    function calculation(param) {
        let curDate = new Date();
        let curYear = curDate.getFullYear();
        let diffYear = curYear - parseInt(param);
        alert(diffYear * 12);
    }

    if (age.length == 4) {
        calculation(age);
    } else {
        age = prompt("You enter a invalid lenght of year i.e '1992' , Enter you year again");
        if (age.length == 4) {
            calculation(age);
        } else {
            alert("Refresh your page");
        }
    }
}

// Number of months calculator

