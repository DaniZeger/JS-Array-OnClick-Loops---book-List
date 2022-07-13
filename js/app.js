let list = [];

function addItem() {
    let bookItem = document.querySelector("#item");
    let val = bookItem.value;
    console.log(val);
    list.push(val);
    bookItem.value = "";
}

function mark(listItem) {
  
  listItem.style.textDecoration = "line-through";
}


function dispList() {
    let disItem = document.getElementById("disp");
    console.log(disItem);
    disItem.innerHTML = '<ul>';
    for (bookList of list){
        disItem.innerHTML += '<li id="'+bookList+'" onClick="mark('+bookList+')">' + bookList + '</li>'
    }
    disItem.innerHTML += '</ul>';
}

 window.onbeforeunload = function () {
  return 'Are you really want to perform the action?';
 }





