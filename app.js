// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const firstNoun = document.getElementById('noun1');
const firstVerb = document.getElementById('verb1');
const firstAdj = document.getElementById('adj1');
const firstPnoun = document.getElementById('proper-noun1');
const buttonPress = document.getElementById('button');
const nountInput = document.getElementById('noun-input');
const adjInput = document.getElementById('adj-input');
const verbInput = document.getElementById('verb-input');
const pNounInput = document.getElementById('p-noun-input');
const lyrics = document.getElementById('lyrics');
const inputSection = document.getElementById('input-section');
const body = document.getElementById('body');
const resetPress = document.getElementById('reset-button');

//console.log(firstNoun, firstVerb, firstAdj, firstPnoun);

buttonPress.addEventListener('click', () => {
    firstNoun.textContent = nountInput.value;
    firstVerb.textContent = verbInput.value;
    firstAdj.textContent = adjInput.value;
    firstPnoun.textContent = pNounInput.value;

    firstNoun.style.color = 'red';
    firstVerb.style.color = 'blue';
    firstAdj.style.color = 'purple';
    firstPnoun.style.color = 'goldenrod';

    lyrics.style.display = "block";
    inputSection.style.display = "none";
    body.style.backgroundImage = 'https://ih1.redbubble.net/image.783682307.4704/st,small,507x507-pad,600x600,f8f8f8.u2.jpg';
});

resetPress.addEventListener('click', () => {
    lyrics.style.display = "none";
    inputSection.style.display = "block";

});