"use script";

const amnt = document.querySelector('.amnt');
const uni = document.querySelector('.uni');
const btn_amount = document.getElementById("amount");
const btn_uni = document.getElementById("unit");
const results = document.getElementById("results");
const reset = document.getElementById('reset');


let calcMarkup = function(x, y, z) {
    return x*(y + z + 1);
}

btn_amount.addEventListener('click', (e) => {
    e.preventDefault();

    if(amnt.value == ""){
        alert('Please enter a value');
    }
    else {
            btn_uni.removeAttribute('disabled')
            uni.removeAttribute('disabled');
            btn_uni.innerText = "Click me";
            btn_uni.style.backgroundColor = "#ADE8B3";
            
        }
})

btn_uni.addEventListener("click", e => {
    e.preventDefault()
    let markUp, unit, vat = 0.15;
    unit = uni.value;


    if(amnt.value < 100000){
        markUp = 0.15;
        let answ = calcMarkup(unit, markUp, vat);
        results.innerText = answ;
    }else if(amnt.value >= 100000 && amnt.value < 350000) {
        markUp = 0.10;
        vat = 0.15;
        let answ = calcMarkup(unit, markUp, vat);
        results.innerText = answ;
    }else if (amnt.value > 350000){
        markUp = 0.07;
        vat = 0.15;
        let answ = calcMarkup(unit, markUp, vat);
        results.innerText = answ;
    }else {
        alert("amount not in range");
    }
    
    
})


reset.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Hi, you clicked me")
            btn_uni.setAttribute('disabled', '')
            uni.setAttribute('disabled', '');
            btn_uni.innerText = "wait...";
            btn_uni.style.backgroundColor = "#ccaf74";
            amnt.value = '';
            uni.value = '';
            results.innerText = '0';

})
