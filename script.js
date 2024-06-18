const container  = document.querySelector(".container");

//Height of the Container
const HEIGHT = 450;

//Default Rows and Columns
let currentRow = 16;
let currentColumn = 16;

//initialize the sketch
sketchBegin(currentRow,currentColumn);

//Reset button with the same grid
let resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener("click", function() {
    sketchClear();
    sketchBegin(currentRow,currentColumn);
});

//Reset button but with prompt for different grid
let gridChangeButton = document.querySelector(".grid-btn");
gridChangeButton.addEventListener("click", function() {
    sketchClear();
    let gridPromptRow = Number(window.prompt("How many rows?", 16));
    while(gridPromptRow >= 100 || gridPromptRow <= 0) {
        gridPromptRow = Number(window.prompt("Choose between 1 and 100...", 16));
    }
    currentRow = gridPromptRow;

    let gridPromptColumn = Number(window.prompt("How many columns?", 16));
    while(gridPromptColumn >= 100 || gridPromptColumn <= 0) {
        gridPromptColumn = Number(window.prompt("Choose between 1 and 100...", 16));
    }
    currentColumn = gridPromptColumn;
    sketchBegin(currentRow,currentColumn);
});

//Clear the rows and columns
function sketchClear() {
    document.querySelectorAll(".column").forEach(e => e.remove());
    document.querySelectorAll(".row").forEach(e => e.remove());
}

//Create the rows and columns
function sketchBegin(rows,columns) {
    //Create Rows
    for (let i=0; i<rows; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        //Create Columns
        for(let o=0; o<columns; o++) {
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