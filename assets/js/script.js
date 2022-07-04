var currentNumberWrapper = document.getElementById('currentNumber');

var currentNumber = 0;

function decrement(){
  if(currentNumber > 0){
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
  }  
}

function increment(){
  if (currentNumber < 20 && currentNumber >= 0){
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;    
  }else{
    alert('Quantidade máxima igual a 20.');
  }  
}