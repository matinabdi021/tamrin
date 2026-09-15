const mainElement = document.getElementById("parent");
const mainorg = document.getElementById("mainorg");
const icon = document.getElementById("icon");
const userinput = document.getElementById("inputUser");
const ul = document.getElementById("ullisttodo");
const boxcolor = document.querySelectorAll("#colortag");
const showid = document.getElementById("all");
const showcompleted = document.getElementById("completed");
const addBtn = document.getElementById("btnTodo");
const showactive = document.getElementById("active");
let isDark = false;

let aryee = [];
let selectorColor = "";
let editingId = "";
let completeCounter = 0;

aryee.forEach(function (todos) {
  if (todos.completed === true) {
    completeCounter++;
  }
});

mainElement.addEventListener("click", (e) => {
  e.preventDefault;
  let addButton = e.target.closest("#btnTodo");
  let checkboxButton = e.target.closest('input[type="checkbox"]');
  let deleteButton = e.target.closest(".istyle");
  let colorButton = e.target.closest("[data-color]");
  let editeButton = e.target.closest(".bi.bi-pencil");
  let buttonthame = e.target.closest(".thameclas");

  if (buttonthame) {
    isDark = !isDark;
  }
  isDark
    ? (icon.innerHTML =
        '<img style="width:26px; height:26px; border-radius: 10px; position: absolute; top: 0; left:0.5px;" src="/tamrin/newtodolist/icon/icons8-sun (2).gif" alt="">')
    : (icon.innerHTML =
        '<img id="icon" style="width:26px; height:26px; border-radius: 10px; position: absolute; top: 0; left: 0;"  src="/tamrin/newtodolist/icon/icons8-moon.gif" alt="">');
  isDark
    ? (mainorg.style.backgroundColor = "black")
    : (mainorg.style.backgroundColor = "blue");

  if (editeButton) {
    addBtn.textContent = "save";
    let recEditeBtn = Number(editeButton.getAttribute("data-id"));
    editingId = recEditeBtn;

    let recfindEdite = aryee.find(function (todos) {
      return todos.id === recEditeBtn;
    });

    userinput.value = recfindEdite.title;
  }

  if (colorButton) {
    let reccolor = colorButton.getAttribute("data-color");
    selectorColor = reccolor;
    userinput.style.background = selectorColor;
  }

  boxcolor.forEach(function (color) {
    let recseve = getComputedStyle(color);
    let recback = recseve.background;
    color.setAttribute("data-color", recback);
  });

  if (deleteButton) {
    let li = deleteButton.parentElement;

    let reclitag = Number(deleteButton.getAttribute("data-id"));
    let recli = e.target.closest(".listyle");
    let receivedID = JSON.parse(localStorage.getItem("todos"));
    let recfilter = receivedID.filter(function (todos) {
      return todos.id != reclitag;
    });
    localStorage.setItem("todos", JSON.stringify(recfilter));
    aryee = recfilter;
    li.remove();
    let lengtharrye = aryee.length;
    showid.textContent = lengtharrye;
    let rexfindindex = aryee.findIndex(function (todos) {
      return todos.id === reclitag;
    });
    aryee.splice(rexfindindex, 1);
    recli.remove();

    console.log(rexfindindex);
    console.log(recfilter);
  }

  if (addButton) {
    addBtn.innerHTML = "Add";
    let recinput = userinput.value.trim();
    if (recinput === "") {
      userinput.style.backgroundColor = "#F26B6B";
      recinput.textContent = "";
      return;
    } else {
      userinput.style.backgroundColor = "#ffff";
    }
    let newarry = {
      id: aryee.length + 1,
      title: recinput,
      completed: false,
      priority: "high",
      categorty: "study",
      createdAt: new Date(),
      background: selectorColor,
    };

    if (editingId != "") {
      let recarrey2 = aryee.find(function (todos) {
        return todos.id === editingId;
      });
      recarrey2.title = userinput.value;
      localStorage.setItem("todos", JSON.stringify(aryee));
      let ptag = document.querySelector(`p[data-id="${editingId}"]`);
      ptag.textContent = userinput.value;
      editingId = "";
    } else if (editingId === "") {
      aryee.push(newarry);
      let lengtharrye = aryee.length;
      showid.textContent = lengtharrye;

      localStorage.setItem("todos", JSON.stringify(aryee));
      getcratetodo(newarry);
    }

    userinput.value = "";
    userinput.style.background = "white";

    /*  ul.textContent = ""; */
  }
  if (checkboxButton) {
    let recccc = Number(checkboxButton.getAttribute("data-id"));
    let ptag = document.querySelector(`p[data-id="${recccc}"]`);

    let rectarget = aryee.find(function (todos) {
      return todos.id === recccc;
    });

    if (checkboxButton.checked) {
      rectarget.completed = true;
      completeCounter++;
      showcompleted.textContent = completeCounter;
      localStorage.setItem("todos", JSON.stringify(aryee));
      ptag.classList.add("line-through");
    } else {
      rectarget.completed = false;
      completeCounter--;
      showcompleted.textContent = completeCounter;

      localStorage.setItem("todos", JSON.stringify(aryee));
      ptag.classList.remove("line-through");

      if (!rectarget) {
        return;
      }
    }
  }
  let recfalse = aryee.filter(function (todos) {
    return todos.completed === false;
  });

  showactive.textContent = recfalse.length;
});
let recget = localStorage.getItem("todos");
let recpars = JSON.parse(recget);
if (recget) {
  aryee = recpars;
} else {
  aryee = [];
}

aryee.forEach(function (todos) {
  getcratetodo(todos);
});

function getcratetodo(todos) {
  console.log(todos);

  let newli = document.createElement("li");
  newli.setAttribute("draggable", "true");
  newli.setAttribute("data-id", todos.id);
  let newi = document.createElement("i");
  let icon = document.createElement("li");
  icon.setAttribute("data-id", todos.id);
  newi.setAttribute("data-id", todos.id);
  let newp = document.createElement("p");
  newp.setAttribute("data-id", todos.id);
  let newlabele = document.createElement("label");
  let newlinput = document.createElement("input");
  newlinput.setAttribute("data-id", todos.id);
  if (todos.completed === true) {
    newlinput.setAttribute("checked", todos.completed);
  }
  let newspan = document.createElement("span");
  newli.style.background = todos.background;
  newli.classList.add("listyle", "p-2", "border", "rounded-2");
  newli.classList.add("drag");
  newi.classList.add("istyle", "bi", "bi-x-lg");
  newi.classList.add("me-2");
  icon.classList.add("bi", "bi-pencil");
  icon.classList.add("me-2");
  newp.classList.add("pstyle", "mb-0");

  if (todos.completed === true) {
    newp.classList.add("line-through");
  } else {
  }
  newlinput.classList.add("m-0");
  newlinput.setAttribute("type", "checkbox");
  newspan.classList.add("checkmark");
  newlabele.append(newlinput);
  newlabele.append(newspan);
  newli.append(newi);
  newli.append(icon);
  newli.append(newp);
  newli.append(newlabele);
  ul.append(newli);
  newp.innerHTML = todos.title;
}
let drag = null;
let targetdrag = null;
mainElement.addEventListener("dragstart", (e) => {
  drag = e.target.closest(".drag");
  if (drag) {
    console.log("start", drag);
  }
});
mainElement.addEventListener("dragover", (e) => {
  e.preventDefault();
  targetdrag = e.target.closest(".drag");
  if (targetdrag) {
    console.log("over", targetdrag);
  }
});
mainElement.addEventListener("drop", (e) => {
  const cards = [...ul.querySelectorAll(".drag")];

  let dargIndex = cards.indexOf(drag);
  let targetIndex = cards.indexOf(targetdrag);

  if (dargIndex < targetIndex) {
    ul.insertBefore(drag, targetdrag.nextSibling);
  } else {
    ul.insertBefore(drag, targetdrag);
  }
  const newcards = [...ul.querySelectorAll(".drag")];
  const newcarder = newcards.map(function (todo) {
    return Number(todo.getAttribute("data-id"));
  });

  const newarayy = newcarder.map(function (id) {
    return aryee.find(function (todo) {
      return todo.id === id;
    });
  });

  localStorage.setItem("todos", JSON.stringify(newarayy));
});

userinput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getTodoEnter();
  }
});
function getTodoEnter() {
  let recinput = userinput.value.trim();
  if (recinput === "") {
    userinput.style.backgroundColor = "#F26B6B";
    recinput.textContent = "";
    return;
  } else {
    userinput.style.backgroundColor = "#ffff";
  }
  let newarry = {
    id: aryee.length + 1,
    title: recinput,
    completed: false,
    priority: "high",
    categorty: "study",
    createdAt: new Date(),
    background: selectorColor,
  };
  aryee.push(newarry);
  localStorage.setItem("todos", JSON.stringify(aryee));
  getcratetodo(newarry);
}
