// let add_inputas = document.getElementById('input').value;
var todo_skyrius = document.getElementById("todo");
var add_inputas = document.querySelector(".addBox__input");
var todo_listas = document.getElementById("todo_list");
var konteineris = document.querySelector(".container");
var todo_divas;
var completed_skyrius = document.getElementById('completed')




var mygtukas_prideti = document.querySelector(".addBox__button");
mygtukas_prideti.addEventListener("click", () => {

    

  // if(add_inputas.value == ''){
  //     alert('neivesti duomenys')
  // } else {
  todo_divas = document.createElement("div");
  todo_divas.classList.add("todo_div");

  var todo_juosta = document.createElement("li"); 
  todo_juosta.classList.add("todo_list_item");
  todo_juosta.innerHTML = add_inputas.value;
  todo_divas.appendChild(todo_juosta);

  const mygtukas_atliktosUzduotys = document.createElement('button')
  mygtukas_atliktosUzduotys.classList.add("completed_btn", "btn");
  mygtukas_atliktosUzduotys.innerHTML = '<i class="fas fa-check"></i>';
  todo_divas.appendChild(mygtukas_atliktosUzduotys);


  const mygtukas_trinti = document.createElement("button");
  mygtukas_trinti.classList.add("trash_btn", "btn");
  mygtukas_trinti.innerHTML = '<i class="fas fa-trash-alt"></i>';
  todo_divas.appendChild(mygtukas_trinti);

  const mygtukas_redaguoti = document.createElement("button");
  mygtukas_redaguoti.classList.add("edit_btn", "btn");
  mygtukas_redaguoti.innerHTML = '<i class="fas fa-edit"></i>';
  todo_divas.appendChild(mygtukas_redaguoti);

  todo_listas.appendChild(todo_divas);
  add_inputas.value = '';
  // }
});

konteineris.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash_btn")) {
      todo_divas = e.target.parentElement  //* KODEL REIKIA NURODYTI KELIĄ, KAI YRA GLOBALUS KINTAMASIS?*//
    todo_divas.remove()
  }
});

konteineris.addEventListener('click',(e)=>{
    if(e.target.classList.contains('completed_btn')){
        todo_divas = e.target.parentElement;
        completed_skyrius.appendChild(todo_divas)

    }
})
