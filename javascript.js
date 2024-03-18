const body = document.body;

// const grid_container = document.createElement("div")
// grid_container.style.flex;
// body.append(grid_container)

const grid_container = document.querySelector('.grid-container');
grid_container.style.display = "flex";
//grid_container.style.flexWrap = "wrap";


const row_container = document.querySelector('.row-container');
row_container.style.display = "flex";
row_container.style.flexWrap = "wrap";
grid_container.append(row_container)

for (let i = 0; i <16; i++ ){
    const invis_square = document.createElement("div")
    for (let i = 0; i <16; i++ ){
        const grid_square = document.createElement("div")
        grid_square.style.border = '3px solid black';
        grid_square.style.height = "10px"
        grid_square.style.width = "10px"
        grid_square.style.margin = "10px"
        row_container.append(grid_square)
    }
    //invis_square.style.border = '1px solid red';
    invis_square.style.flexBasis = '100%';
    row_container.append(invis_square)

}