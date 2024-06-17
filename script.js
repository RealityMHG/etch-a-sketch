const container  = document.querySelector(".container");
const HEIGHT = 450;

let currentRow = 16;
let currentColumn = 16;

let resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener("click", function() {
    location.reload();
});

let gridChangeButton = document.querySelector(".grid-btn");
gridChangeButton.addEventListener("click", function() {
    let gridPromptRow = Number(window.prompt("How many rows?", 16));
    currentRow = gridPromptRow;
    let gridPromptColumn = Number(window.prompt("How many columns?", 16));
    currentColumn = gridPromptColumn;
    sketchBegin(currentRow,currentColumn);
});

sketchBegin(currentRow,currentColumn);

function sketchClear() {
    
}

function sketchBegin(rows,columns) {
    //Create Rows
    for (let i=0; i<=rows-1; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        //Create Columns
        for(let o=0; o<=columns-1; o++) {
            let column = document.createElement("div");
            column.classList.add("column");

            //Make Borders Visible
            let columnHeight = (100/columns);
            console.log(columnHeight);
            column.style.height = columnHeight +"%";
            column.style.border = "1px solid";
            column.style.borderColor = "Black";

            row.appendChild(column);

            column.addEventListener("mouseover", (event) => {
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                if(!event.target.style.backgroundColor)
                    event.target.style.backgroundColor = "#" + randomColor;
            });
        }
        container.appendChild(row);
    }
}