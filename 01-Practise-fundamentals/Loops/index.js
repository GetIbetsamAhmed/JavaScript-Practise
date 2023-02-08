let len = parseInt(prompt("Enter Daimonds Rows"));
let res = "";
for (let index = 1; index <= len; index++) {

    for (let spaceIndex = len; spaceIndex > index; spaceIndex--) {
        res = res + " ";
    }

    for (let innerLoop = 1; innerLoop <= index; innerLoop++) {
        res = res + "* ";
    }
    res = res + "\n";
}
for (let index = 2; index <= len; index++) {

    for (let space = 1; space < index; space++) {
        res = res + " ";
    }

    for (let innerLoop = index; innerLoop <= len; innerLoop++) {
        res = res + "* ";
    }
    res = res + "\n";

}

console.log(res);