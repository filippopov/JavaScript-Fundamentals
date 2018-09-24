let dnaHelix = (number) => {
    let dna = 'ATCGTTAGGG';
    let counter = 0;
    for (let i = 1; i <= number; i++) {

        let row = i % 4;

        if (counter >= dna.length) {
            counter = 0;
        }

        if (row === 1) {
            console.log(`**${dna[counter++]}${dna[counter++]}**`);
        } else if (row === 2 || row === 0) {
            console.log(`*${dna[counter++]}--${dna[counter++]}*`);
        } else if (row === 3) {
            console.log(`${dna[counter++]}----${dna[counter++]}`);
        }

    }
};

dnaHelix(10);