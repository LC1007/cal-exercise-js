// I've explained how the code works in my README file

let sum = ''
let outputRes = document.getElementById('output')
let btns = document.querySelectorAll('button')

Array.from(btns).forEach((calBtn) =>{
    calBtn.addEventListener('click', ()=>{
        if(calBtn.innerHTML == '='){
            sum = eval(sum)
            outputRes.value = sum
        } 
        
        else if(calBtn.innerHTML == 'CE'){
            sum = ''
            outputRes.value = sum
        } 
        
        else if(calBtn.innerHTML == 'Del'){
            sum = outputRes.value.slice(0, -1)
            outputRes.value = sum
        } 
        
        else{
            sum = sum + calBtn.innerHTML
            outputRes.value = sum
        }
    })
})