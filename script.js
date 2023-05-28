const date =  document.querySelector('#fecha');

const list =  document.querySelector('#list');

const input =  document.querySelector('#input');

const buttonAdd =  document.querySelector('#enter');

//function add pendient

function add(value){
    //insertando bloque de codigo html con js
    const element = ` <li id= "element">
                        <i class="far fa-circle co" id="0" data="doned"></i>
                        <p class="text line-through">${value}</p>
                        <i class="fas fa-trash de" id="0" data="deleted"></i>
                    </li>`;
    list.insertAdjacentHTML("beforeend",element);
}

buttonAdd.addEventListener('click', () =>{
    const pendient = input.value;
    if(pendient){
        add(pendient)
    }
    input.value = '';
})

document.addEventListener('keyup',function(event){
    if(event.key == 'Enter'){
        const pendient = input.value;
        if(pendient){
            add(pendient);
        }
        input.value = '';
    }
    
})