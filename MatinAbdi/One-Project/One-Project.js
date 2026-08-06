/* ---------------------------------------DOCUMENT ELEMENTS OPEN----------------------------------- */
/* doc input USERNAME */
let jsinPutUserName=document.getElementById('inputUserName');
let errorSpanusername=document.getElementById('errorUserName');
/* doc input Email */
let jsinPutEmail=document.getElementById('inputEmail');
let errorSpanemail=document.getElementById('errorEmail');
/* doc input PASSWORD */
let jsInPutPassWord=document.getElementById('InputpassWord');
let errorSpanpassword=document.getElementById('errorPasword');
/* ---------------------------------------DOCUMENT ELEMENTS CLOSE----------------------------------- */ 
/* -----------------------------------------FUNCTION INPUTS OPEN --------------------------------- */
/* function input username blur */
jsinPutUserName.addEventListener('blur',()=>{
    
   if(jsinPutUserName.value.length<8){
     errorSpanusername.textContent='invalid username';
     errorSpanusername.style.color='red';
   }else{
      errorSpanusername.textContent='valid username';
      errorSpanusername.style.color='green';
   }
})
/* function input email blur */
jsinPutEmail.addEventListener('blur',()=>{
    
    if(jsinPutEmail.value.length<8){
        errorSpanemail.textContent='invalid Email';
        errorSpanemail.style.color='red';
    }else{
        errorSpanemail.textContent='valid Email';
        errorSpanemail.style.color='green';
    }
})
/* function input password blur */
jsInPutPassWord,addEventListener('blur',()=>{
    if(jsInPutPassWord.value.length<8){
        errorSpanpassword.textContent='invalid password';
        errorSpanpassword.style.color='red';
    }else{
        errorSpanpassword.textContent='valid password';
        errorSpanpassword.style.color='green';
    }

})
/* FUNCTION INPUTS */
/* -----------------------------------------FUNCTION INPUTS CLOSE --------------------------------- */










