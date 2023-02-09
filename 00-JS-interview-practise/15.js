function sum(a, b) {
    return a + b;
}

sum(1, '2');

// ( Res ) => "12"
// ( Reson ) => JavaScript is a dynamically typed language: we don't specify what types certain 
// variables are.Values can automatically be converted into another type without you knowing,
// which is called implicit type coercion.Coercion is converting from one type into another.