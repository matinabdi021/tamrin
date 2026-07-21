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
        const card = document.createElement('li');
        card.classList.add('Classli');
        card.textContent = item;
        UlTodoO.classList.add('Classul');
        UlTodoO.appendChild(card);
    });
};

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
        return;
    }
    showTextus.textContent = '';
    addtodo(inputtext);
    InputTodoO.value = '';
})
rendertodos();






