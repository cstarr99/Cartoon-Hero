'use strict';

//points calculator
const[startTotal, BenchTotal, HighestScoring] = document.querySelectorAll('.result');
calculate();

function calculate () {
const inputs = document.querySelectorAll('input');
const startingQb = parseFloat(inputs[0].value);
const startingWr = parseFloat(inputs[1].value);
const startingRb = parseFloat(inputs[2].value);
const benchQb = parseFloat(inputs[3].value);
const benchWr = parseFloat(inputs[4].value);
const benchRb = parseFloat(inputs[5].value);

 startTotal.textContent = startingQb + startingWr + startingRb + " Points";
 BenchTotal.textContent = benchQb + benchWr + benchRb + " Points";
 
 if(startTotal.textContent > BenchTotal.textContent) {
    HighestScoring.textContent = "Starters: " + startTotal.textContent;
 }
 else {
    HighestScoring.textContent = "Bench: " + BenchTotal.textContent;
 }
}

const form = document.querySelector('form');
form.addEventListener('change', calculate);

form.addEventListener('focusin', e=>{
    e.target.classList.toggle('focus');
});

form.addEventListener('focusout', e=>{
    e.target.classList.toggle('focus');
});





//Adding gifs
const api_key = 'bI5LdS1013bQwZT5sPbNBwDN4NuBGJiR&q';
const initial_url =`https://api.giphy.com/v1/gifs/search?api_key=${api_key}=NFL&limit=15&offset=0&rating=pg&lang=en`;

console.log(initial_url);

const submitButton = document.querySelector('button');
const queryElement = document.querySelector('input');
const holder = document.querySelector('.holder');

submitButton.addEventListener('click', findGifs);

async function findGifs(e) {
    e.preventDefault();
    let url = initial_url;
    if(queryElement.value) {
        url += `&q=${queryElement.value}`;
        queryElement.value = '';
    }
    try{
        const response = await fetch(url);
        if(!response.ok)
        throw Error(`Error: ${response.url} ${response.statusText}`);
         const gifs = await response.json();
         addGifs(gifs);
    
    }catch(error) {
        console.log(error.message);
    }
    }

    function addGifs(gifs) {
        holder.innerHTML = '';
        gifs.data.forEach(element=>{
        const image = document.createElement('img');
        image.src = element.images.fixed_height.url;
        image.alt = element.title;
        holder.append(image);
    });
}


