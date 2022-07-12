let list = [];

function addItem() {
    let bookItem = document.querySelector("#item");
    let val = bookItem.value;
    console.log(val);
    list.push(val);
    bookItem.value = "";
}


