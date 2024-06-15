const container  = document.querySelector(".container");
const WIDTH = 500;
const HEIGHT = 250;

let resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener("click", function() {
    location.reload();
});

sketchBegin(40,40);

function sketchBegin(rows,columns) {
    //Create Rows
    for (let i=0; i<=rows; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        //Create Columns
        for(let o=0; o<=columns; o++) {
            let column = document.createElement("div");
            column.classList.add("column");

            //Make Borders Visible
            column.style.padding = HEIGHT/columns +"px " + WIDTH/rows + "px";
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