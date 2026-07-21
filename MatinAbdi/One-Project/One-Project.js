const InputTodoO = document.getElementById('InputTodo');
const BtnAddO = document.getElementById('BtnAdd');
const InputTodo = document.getElementById('BtnDel');
const UlTodoO = document.getElementById('ListItemUl');
const showTextus = document.getElementById('TextCont')
//craet arrey
const todoArray = JSON.parse(localStorage.getItem('Listdata')) || [];

//function one

function rendertodos() {
    UlTodoO.innerHTML = '';
    // creat ForEech
    todoArray.forEach((item) => {
        const carddiv=document.createElement('div')
        const clearbtn=document.createElement('div');
        const checkbox=document.createElement('input');
        const card = document.createElement('li');
         //style
        card.classList.add('Classli');
        UlTodoO.classList.add('Classul');
        carddiv.classList.add('Classdiv');
        checkbox.classList.add('input')

        checkbox.setAttribute('type','checkbox')
        card.textContent = item; 
      

        UlTodoO.appendChild(card);
        UlTodoO.appendChild(carddiv);
        carddiv.appendChild(card);
        carddiv.appendChild(checkbox);
    });
};


<<<<<<< HEAD
// function addtodo

function addtodo(text) {
    todoArray.push(text);
    localStorage.setItem('Listdata', JSON.stringify(todoArray));
    rendertodos();


}
//Event Btn
BtnAddO.addEventListener('click', () => {
    const inputtext = InputTodoO.value.trim();
    if (inputtext === "") {
        showTextus.textContent = ' لطفا مقداری را وارد کنید';
=======
//test
BtnAddO.addEventListener('click',()=>{
    const OutInput=InputTodoO.value.trim();
    if(OutInput===""){
        showTextus.textContent='لطفا مقداری را وارد کنید';
>>>>>>> main
        return;
    }
    showTextus.textContent = '';
    addtodo(inputtext);
    InputTodoO.value = '';
})
rendertodos();






