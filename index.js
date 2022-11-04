
//* WELCOME TEXT ANIMATIOM *//

const text = document.querySelector(".Welcome");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

//* Nav Bar *//
const NavBar = [
    {title: "Home", link: "http://127.0.0.1:5501/index.html"},
    {title: "Blog", link: "http://127.0.0.1:5501/Blog.html"},
    {title: "Design", link: "http://127.0.0.1:5501/design.html"},
    {title: "Data-Visualisations", link: "http://127.0.0.1:5501/Data-V.html"},
    {title: "Data-Art", link: "http://127.0.0.1:5501/Data-A.html"},
    {title: "Data2", link: "http://127.0.0.1:5501/Data2.html" },
    {title: "Data3", link: "http://127.0.0.1:5501/Data3.html"},

];

const navigation = document.getElementsByClassName("navigation");

for (var i = 0; i < navigation.length; i++) {
    let list = document.createElement("ul");

    for (var j = 0; j < NavBar.length; i++) {
        let listItemLink = document.createElement("a");
        listItemLink.innerText = NavBar[j].title;
        listItemLink.setAttribute("href", NavBar[j].link);
        let listItem = document.createElement("li");
        listItem.appendChild(listItemLink);
        list.appendChild(listItem);
    }
    navigation[i].appendChild(list);
}