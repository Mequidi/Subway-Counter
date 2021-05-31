let countEl = document.getElementById("count-el");
let saveText = document.getElementById("save-txt");

let count = 0
function increment()
{
   count ++;
   countEl.textContent = count;
}

function save()
{
    let countStr = count + " - " ;
    saveText.textContent += countStr ;
    countEl.textContent = 0;
    count = 0;
}