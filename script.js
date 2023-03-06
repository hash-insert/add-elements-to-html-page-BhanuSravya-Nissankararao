function myfunction() {
    const list = document.createElement("li");
    const text = document.createTextNode("Javascript");
    list.appendChild(text);
    document.getElementById("myList").appendChild(list);
    }