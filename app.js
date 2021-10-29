console.log(`HEY WORLD I'M WALKING 'ERE!`);

const button1 = document.getElementById(`one`);

button1.onclick = () =>{
    alert("Cool! You can hear/understand a hummingbird and ants");
};

const h3 = document.getElementsByTagName(`h3`); 

h3[0].addEventListener(`mouseover`, () => {
    alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one");
});

const form = document.querySelector(`form`)
console.dir(form);
form.addEventListener(`submit`, s => {
    s.preventDefault;
    const input = form.elements.quote.value;
    alert(`${input}`);
});

const darkMode = document.querySelector(`#dm`);

darkMode.addEventListener(`click`, () => {
    const body = document.querySelector(`*`);
    for (i=0; i<body.clientHeight; i++){
        body.classList.toggle(`dark-mode`);
    };
});

const reality = document.querySelector(`#reality`);

let count = 0;
reality.addEventListener(`click`, () => {
    count ++;
    if (count <= 2){
        alert("You have successfully moved to another reality")
    } else if (count === 3){
        alert("OH NO! You can only move to a new another reality a couple times. You are stuck in this reality!");
    };
});