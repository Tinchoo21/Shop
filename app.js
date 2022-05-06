let total = 0;


let inp = document.querySelector(".in");
inp = parseInt(inp.value);


function plus(pl)
{

  let plu = pl.closest(".row");

  let val = plu.querySelector(".in").value;

  val = parseFloat(val);

  val++;


  console.log(val);

  plu.querySelector(".in").value = val;

  inp = val;
    

  

    
}

function min(min)
{


   
    let mi = min.closest(".row");

    let minu = mi.querySelector(".in").value;

    minu = parseFloat(minu);

    if(minu ===0)
    {
        alert("Cant be less than 0");
    }
    else
    {

    minu--;


  console.log(minu);

  mi.querySelector(".in").value = minu;



    
 }
}
function addBtn(element)
{

  let mainEl = element.closest(".row");
  
  let price = mainEl.querySelector(".price").innerText;

  price = price.substring(1);

  price = parseFloat(price);
  
  
  
  
  
  let name = mainEl.querySelector(".name").innerText;
  let quantity = mainEl.querySelector(".in");
  let disa = mainEl.querySelector(".plus");
  let mini = mainEl.querySelector(".minus");
 

  quantity = parseFloat(quantity.value);



    console.log(inp);
   let newEl = document.createElement("li");

   
   
    

    
    let result1 = quantity * price;
    
 let spa1 = document.createElement("SPAN");
     let spa2 = document.createTextNode(result1);
spa1.className = "sum";
     spa1.appendChild(spa2);


     let spanName = document.createElement("SPAN");
     let spanName1 = document.createTextNode(name);

     spanName.className = "nameclose"

     spanName.appendChild(spanName1);
   
    if (quantity === 0) {
        alert("Needs to be min 1");
      } else {

        
     let value1 =   ` x  ${quantity}   , Price of item:   ${price}   , Total sum : `;

    
      element.innerText = "Added";
      element.setAttribute('disabled', 'true');
      disa.setAttribute('disabled' , 'true');
      mini.setAttribute('disabled' ,'true');

     
    let inputValue = value1 ;

    
    let t = document.createTextNode(inputValue);

   
      newEl.appendChild(spanName);
      newEl.appendChild(t);
      newEl.appendChild(spa1);

        document.querySelector(".newElements").appendChild(newEl);
      }
   


      let span = document.createElement("SPAN");
      let txt = document.createTextNode("\u00D7");
      span.className = "close";
      let close = document.getElementsByClassName("close");
      
      span.appendChild(txt);
      newEl.appendChild(span);
    for (i = 0; i < close.length; i++) {

    
        close[i].onclick = function() {

          
        minusSum(this);

          let div = this.parentElement;
          div.remove();
        }
      }




totalSum(result1);
}



function totalSum(res)
{

   
 total = total + res;

  

  document.querySelector(".totalS").textContent = total + "$";

}
function minusSum(elem)
{

  let mainEl = elem.closest("li");

  let closedname = mainEl.querySelector(".nameclose").innerText;


  let name = document.querySelectorAll(".row");


  name.forEach(function(names){

    let itemName = names.querySelector(".name").innerText;

   
     if(itemName == closedname)
     {
       names.querySelector(".in").value = 0;
       names.querySelector(".add").removeAttribute('disabled');
       names.querySelector(".plus").removeAttribute('disabled');
       names.querySelector(".minus").removeAttribute('disabled');
       names.querySelector(".add").innerText = "Add";
     }

  
  }
  );
  
  






  let quantity = mainEl.querySelector(".sum");  

  quantity = quantity.innerText;

 quantity = parseFloat(quantity);

 console.log(quantity);

  total = total - quantity;

   document.querySelector(".totalS").textContent = total + "$";

   

  
}




