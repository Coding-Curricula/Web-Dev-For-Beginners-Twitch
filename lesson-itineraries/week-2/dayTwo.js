// conditional statements

// if statement - if the condition is true, the code block will run
// Ask how tall the child is - if they are feet tall then they can ride
// if not then they cry to their parents

let childHeight = 3.1;
let minHeight = 3;

if (childHeight > minHeight) {
    console.log('Kiddo can ride the rollercoaster!');
} else {
    console.log('Kiddo cannot ride the rollercoaster!');
}

// write the same as a ternary operator
// condition ? true : false
childHeight > minHeight ? console.log('Kiddo can ride the rollercoaster!') : console.log('Kiddo cannot ride the rollercoaster!');


// if no attendees then no party otherwise big party

let attendees;

if (!attendees) {
    console.log('No party!');
} else {
    console.log('Big party!');
}
