let captureTheNumbers = (arr) => {
    let regex = /\d+/g;
    arr = arr.join(' ');
    console.log(arr.match(regex).join(' '));
};


let test = [
    'The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
];

captureTheNumbers(test);