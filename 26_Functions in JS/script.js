// console.log('Hi,');
// console.log('My name is Gousiya.');
// console.log('I am a web developer');

// console.log('****************************');

// function introduceMe() {
//     console.log('Hi,');
//     console.log('My name is Gousiya.');
//     console.log('I am a web developer');
// }


// Function Definition
function introduceMe(username, profession, age) {
    // console.log(typeof username);
    // console.log(typeof profession);
    // console.log(typeof age);
    console.log('Hi,');
    console.log(`My name is ${username || 'masool'}.`);
    console.log(`I am a ${profession}`);
    console.log(`I am ${age} years old.`); 
}

// //                  Function Call
// const returnValue = introduceMe()

// introduceMe('Gousiya', 'Software Engineer', 25)
// introduceMe('Eliyaz', 'Mechanical Engineer', 27)