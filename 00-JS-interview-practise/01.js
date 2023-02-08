// Hoisted Examples

function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
}

sayHi();
// Result is udefined and refrence error
// Due to Hoisted var variable initailize when the program run and before execution 
// but let let variable did not initailize

// Hoisted Examples