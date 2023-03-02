function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

// ( Res ) => Typo error
// ( Reson ) => In JavaScript, functions are objects, and therefore, the method getFullName 
// gets added to the constructor function object itself.For that reason, we can call
// Person.getFullName(), but member.getFullName throws a TypeError.