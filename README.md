<!-- At first I tried building the calculator on my own but struggled a bit, I then started search how to create a calculator using the eval() function and I came across a website (https://codingscape.info/simple-javascript-calculator/) that showed you how to built a calculator. I used their code but I first tried to understand what each part of the code does before I did anything, so I'm going to explain what each part does down below. -->

<!-- Here I'm setting my sum to an empty string -->
let sum = ''

<!-- Here I'm assigning my output to outputRes -->
let outputRes = document.getElementById('output')

<!-- Here I'm assigning all my buttons in my html file into a variable called btns -->
let btns = document.querySelectorAll('button')

<!-- Line 11 - I'm creating an array with all my buttons placed in the array -->
Array.from(btns).forEach((calBtn) =>{

<!-- Line 13 - I'm placing an event listener on all my buttons thats in the new array -->
    calBtn.addEventListener('click', ()=>{
<!-- Line 16 - I'm checking if the user clicked on the = sign if not then move onto the next statement -->
        if(calBtn.innerHTML == '='){
            sum = eval(sum)
            outputRes.value = sum
        } 
<!-- Line 21 - I'm checking if the user clicked on the CE button to clear everything, if not then move onto the next statement -->
       else if(calBtn.innerHTML == 'CE'){
            sum = ''
            outputRes.value = sum
        } 
<!-- Line 26 - I'm checking if the user clicked on the Del button, if not then move onto the next statement -->
        else if(calBtn.innerHTML == 'Del'){
            sum = outputRes.value.slice(0, -1)
            outputRes.value = sum
        } 
<!-- Line 31 - I'm checking if the user has entered a sum, once the user clicks the = button then the if statement will run from the start to complete the sum -->
        else{
            sum = sum + calBtn.innerHTML
            outputRes.value = sum
        }
    })
})
