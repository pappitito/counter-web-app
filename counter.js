var value = document.querySelector(".number")


function increase(){
    let v = parseInt(value.textContent)
    v++;
    value.textContent = v
   
}

function decrease(){
    let v = parseInt(value.textContent)
    v--;
    value.textContent = v
}


function generic(){
    let v = parseInt(value.textContent)
    if(v > 0){
        value.style.color = "green"
    }
    else if (v == 0){
        value.style.color = "black"
    }
    else if (v < 0){
        value.style.color = "red"
    }
}

function reset(){
    let v = parseInt(value.textContent)
    value.textContent = 0
}

 async function countdown(){
    
    let v = parseInt(value.textContent)
    if(v < 0 ){
        alert('cannot perform countdown')
    }
    else if(v == 0){
        alert('number is at zero')
    }
    else{
        value.textContent = v
        v--;
      var interval =  setInterval(()=>{
                value.textContent = v
                v--;

                if(v < 0){
                    value.style.color = "black"
                    clearInterval(interval)
                }
            }, 1000);
           
        
    }
}


var increaseButton = document.querySelector('#increase');
increaseButton.addEventListener("mousedown", ()=>{
   increase()
   generic();
})

var decreaseButton = document.querySelector('#decrease');
decreaseButton.addEventListener("click", ()=>{
   decrease()
   generic();
})
var resetButton = document.querySelector('#reset');
resetButton.addEventListener("click", ()=>{
   reset()
   generic();
})

var cdButton = document.querySelector('#countdown');
cdButton.addEventListener("click", ()=>{
   countdown();
   generic();
})


