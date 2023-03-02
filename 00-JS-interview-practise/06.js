let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);

// ( Res ) => Hello
// ( Reason )
// First, variable c holds a value to an object.Later, we assign d with the same reference that c has to the object.

