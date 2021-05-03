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
      
});