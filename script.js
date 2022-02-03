const billamount = document.querySelector('.billamt');
const persons = document.querySelector('.persons');
const customtip = document.querySelector('.tipnumber');

const buttons = document.querySelectorAll('.percent');
const reset = document.querySelector('.reset');
const tipperson = document.querySelector('.tip');
const tiptotal = document.querySelector('.totaltip');
let customvalue = 0;



function tipcalculator(){
    if((+billamount.value>-1) & (customvalue>-1) & (+persons.value>-1)){
        tip = (customvalue / 100) * +billamount.value;
        totalamount = +billamount.value + tip;
        tipperperson = (tip / +persons.value).toFixed(2);
        totalperperson = (totalamount / +persons.value).toFixed(2);
        tipperson.innerHTML = "$" + tipperperson;
        tiptotal.innerHTML = "$" + totalperperson;
    }else{
        alert("Please enter positive values");
    }
    
}

// Tip calculation for standard percentages

buttons.forEach((but,index) => {
    but.addEventListener('click',()=>{
        customtip.value = "";
        customvalue = but.value;
        tipcalculator();
        
        buttons.forEach((but1,index1)=>{
            if(index === index1){
                but1.classList.add('active');
            }else{
                but1.classList.remove('active');
            }
        })
    })   
})

// Calculate tip based on input

billamount.addEventListener('input',()=>{
    tipcalculator();
})

persons.addEventListener('input', ()=>{
    if((billamount.value != "" | billamount.value != null) && (customvalue))
    tipcalculator();
})

customtip.addEventListener('input', ()=>{
    customvalue = customtip.value;
    buttons.forEach(but => {
        but.classList.remove('active');
    })
    tipcalculator();    
})

// Reset event handler

reset.addEventListener('click', ()=>{
    customvalue = "";
    billamount.value = "";
    customtip.value = "";
    persons.value = "1";
    buttons.forEach(but => {
        but.classList.remove('active');
    })
    tipperson.innerHTML = "$0.00";
    tiptotal.innerHTML = "$0.00";
})

