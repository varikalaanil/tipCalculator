

 let cash = document.getElementById("money")
 let num = document.getElementById("num")
 let checkButton = document.querySelectorAll("button")
 let reset = document.getElementById("reset")
   let person = {
      change : 0
   }
  
//   reset.onclick = () =>{
//      num.innerText = 0;
//      cash.innerText = "$0"
//   }
   
   function calculateTotal (bill , tip , hello) {
    let tipPercentage = (bill * (tip/100));
      return (bill + tipPercentage) / hello;
}

  
   for(let i = 0; i < checkButton.length ; i++){
        
         checkButton[i].onclick = () =>{
            if(checkButton[i].innerText === '*'){
               num.innerText = 0;
               cash.innerText = "$0";
                document.getElementById("bill").value= '';
               document.getElementById("tip").value = '';
            }
            else if(checkButton[i].innerText === '+'){
              person.change++;
              num.innerText = person.change;
              let hello = num.innerText;
              let bill = Number(document.getElementById("bill").value);
              let tip  = Number(document.getElementById("tip").value);
              cash.innerText = "$" + Math.round(calculateTotal(bill , tip , hello));
            
           }
              
           else{
            
             if(person.change != 0 && person.change > 1){
                person.change--;
                num.innerText = person.change;
                let hello = num.innerText;
                let bill = Number(document.getElementById("bill").value);
                let tip  = Number(document.getElementById("tip").value);
                cash.innerText = "$" + Math.round(calculateTotal(bill , tip ,hello));
                

           }
           }
        }
    }

      
  