const body = document.body;


const grid_container = document.querySelector('.grid-container');
grid_container.style.display = "flex";

const row_container = document.querySelector('.row-container');
row_container.style.display = "flex";
row_container.style.flexWrap = "wrap";
grid_container.append(row_container)



function logic(userInput){
    if (userInput > 50 ){
        alert("Picksomething different!")
    }
    else{
    for (let i = 0; i <userInput; i++ ){
         const invis_square = document.createElement("div")
         for (let i = 0; i <userInput; i++ ){
            
             const grid_square = document.createElement("div")
            //  grid_square.style.border = '3px solid black';
             grid_square.style.height = "10px"
             grid_square.style.width = "10px"
             //grid_square.style.margin = "10px"
             grid_square.addEventListener('mouseenter',() => {
                 grid_square.style.backgroundColor = 'red';
             })
             // grid_square.addEventListener('mouseleave',() => {
             //     grid_square.style.backgroundColor = '';
             // })
             row_container.append(grid_square)
         }
         invis_square.style.flexBasis = '100%';
         row_container.append(invis_square)
        }
    }
}

function clear_grid(){
    while (row_container.firstChild) {
        row_container.removeChild(row_container.firstChild);
      }
}

const prompt1 = document.querySelector("#prompt");
prompt1.addEventListener('click', () => {
    clear_grid();
    let userInput = prompt("asking for the number of squares per side for the new grid","More than 0!");
    //let i = userInput;
    logic(userInput);
})


// for (let i = 0; i <16; i++ ){
//     const invis_square = document.createElement("div")
//     for (let i = 0; i <16; i++ ){

//         const grid_square = document.createElement("div")
//         grid_square.style.border = '3px solid black';
//         grid_square.style.height = "10px"
//         grid_square.style.width = "10px"
//         grid_square.style.margin = "10px"
//         grid_square.addEventListener('mouseenter',() => {
//             grid_square.style.backgroundColor = 'red';
//         })
//         grid_square.addEventListener('mouseleave',() => {
//             grid_square.style.backgroundColor = '';
//         })
//         row_container.append(grid_square)
//     }
//     invis_square.style.flexBasis = '100%';
//     row_container.append(invis_square)
// }

//let userInput = prompt("asking for the number of squares per side for the new grid","More than 0!");
// function click_button(){
//     const prompt = document.querySelector("#prompt");
//     prompt.addEventListener('click', e => {
//         let userInput = prompt("asking for the number of squares per side for the new grid","More than 0!");
//         // set_Grid_size(userInput)
//     })
// }


// btn_1.addEventListener("click", () => {
//     alert("Hello World2");
//  });








// const grid_container_div = document.createElement("div");
// const grid_container_style = document.createElement("style");

// grid_container_style = "text/css";

// grid_container_style.innerHTML = `.grid_container_style_Class { 
// }`;

// document.head.appendChild(grid_container_style);

// grid_container_div.classList.add("grid_container_style_Class")
// grid_container_div.textContent = "Hello, this is a dynamic div!";

// document.body.appendChild(grid_container_div);