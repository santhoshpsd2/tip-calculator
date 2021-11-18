const billamount = document.querySelector('.billamt');
const persons = document.querySelector('.persons');
const customtip = document.querySelector('.tipnumber');

const buttons = document.querySelectorAll('.percent');
const reset = document.querySelector('.reset');
const tipperson = document.querySelector('.tip');
const tiptotal = document.querySelector('.totaltip');
let customvalue = 0;



function tipcalculator(){
    tip = (customvalue / 100) * +billamount.value;
    totalamount = +billamount.value + tip;
    tipperperson = (tip / +persons.value).toFixed(2);
    totalperperson = (totalamount / +persons.value).toFixed(2);
    tipperson.innerHTML = "$" + tipperperson;
    tiptotal.innerHTML = "$" + totalperperson;
}

buttons.forEach((but,index) => {
    but.addEventListener('click',()=>{
        customtip.value = "";
        customvalue = but.value;
        // if((billamount.value != "" | billamount.value != null) && (persons.value == "" | persons.value == null)){
        //     persons.value = 1;
        //     tipcalculator();
        // }

        // if(billamount.value != null && persons.value != null){
        //     tipcalculator();
        // }
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


billamount.addEventListener('keyup',()=>{
    // if((persons.value != "" | persons.value != null) && (customvalue))
    tipcalculator();
})

persons.addEventListener('keyup', ()=>{
    if((billamount.value != "" | billamount.value != null) && (customvalue))
    tipcalculator();
})

customtip.addEventListener('keyup', ()=>{
    customvalue = customtip.value;
    // if((billamount.value != "" | billamount.value != null) && (persons.value == "" | persons.value == null)){
    //     persons.value = 1;
    //     tipcalculator();
    // }

    // if(billamount.value != null && persons.value != null){
    //     tipcalculator();
    // }
    buttons.forEach(but => {
        but.classList.remove('active');
    })
    tipcalculator();    
})


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

