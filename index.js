const thankYou = [];

function writeCards(string, event) {
    for (let i = 0; i < string.length; i++) {
        thankYou.push(`Thank you, ${string[i]}, for the wonderful ${event} gift!`);

    }

    return thankYou;
}

writeCards();

function countDown(int) {
   let count = 0;
   while (count <= int) {
       console.log(int--);
   }

}

