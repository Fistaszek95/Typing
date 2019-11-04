const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Dzień dobry!', 'Zaczynajmy...', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'];

let word = 0;
let letter = -15;



const addLetter = () => {

    if (letter >= 0) {
        spnText.textContent += txt[word][letter];
    }
    letter++;
    if (letter === txt[word].length) {
        word++;


        if (word === txt.length) return;



        return setTimeout(() => {
            letter = -15;
            spnText.textContent = "";
            addLetter()
        }, 2000)


    }
    setTimeout(addLetter, 50)
}


addLetter(); //pierwsze wywołanie


// Animacja kursora 
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);