const InputTodoO=document.getElementById('InputTodo');
const BtnAddO=document.getElementById('BtnAdd');
const InputTodo=document.getElementById('BtnDel');
const UlTodoO=document.getElementById('ListItemUl');
const showTextus=document.getElementById('TextCont')



BtnAddO.addEventListener('click',()=>{
    const OutInput=InputTodoO.value.trim();
    if(OutInput===""){
        showTextus.textContent='لطفا مقداری را وارد کنید';
        return;
           
        
     
    }
    showTextus.textContent='';

    const card=document.createElement('li');
    card.classList.add('Classli');
    UlTodoO.classList.add('Classul')
    card.textContent=OutInput;

    UlTodoO.appendChild(card);

    InputTodoO.value='';
    
  

});