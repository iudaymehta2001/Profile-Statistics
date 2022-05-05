const countersEl = document.querySelectorAll('.counter');   
console.log(countersEl);

countersEl.forEach(counterEl => {
    counterEl.innerText = '0';
    incrementCounter()
    function incrementCounter(){
        let currentNum = +counterEl.innerText
        const lastNum = counterEl.getAttribute('data-ceil')

        const increment = lastNum /15;
        currentNum = Math.ceil( currentNum + increment);
        counterEl.innerText = currentNum; 
        if(currentNum < lastNum){
            setTimeout(incrementCounter, 25)
        }
        else{
            counterEl.innerText = lastNum;
        }
    }
})