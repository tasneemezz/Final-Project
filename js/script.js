





var pass = document.getElementById("word");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass. addEventListener('input', () => {
    
  if ( pass.value.length  > 0 ){
    msg. style. display ="block";
  }

   else{
    msg.style.display="none";
   }

  if ( pass.value.length  < 4 ){
    str.innerHTML= "weak";
  }
  if ( pass.value.length  >  ){
    str.innerHTML= "weak";
  }



})






