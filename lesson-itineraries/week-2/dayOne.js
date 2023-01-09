// function that reverses a string
const reverseString = (str) => {
    // split the string into an array
    const strArray = str.split('');

    // reverse the array
    const reversedArray = strArray.reverse();

    // join the array back into a string
    const reversedString = reversedArray.join('');

    console.log(reversedString);

    // return the reversed string
    return reversedString;
};

// call the function
reverseString('hello');

// function to calculate body mass index
const calculateBMI = (weight, height) => {
    // calculate the BMI
    const bmi = weight / (height * height);

    // return the BMI
    return bmi;
};

// call the function
const bmi = calculateBMI(80, 1.8);
console.log(bmi);

// function to calculate the volume of a home
const calculateVolume = (length, width, height=10) => {
    // calculate the volume
    const volume = length * width * height;

    // return the volume
    return volume;
}

const homeVolume = calculateVolume(8, 10);
console.log(homeVolume);

// function of displayDone
// function displayDone() {
//     () => {console.log('1 SECOND LATER!')};
// }

setTimeout(function() {console.log('1 SECOND LATER!')}, 1000);