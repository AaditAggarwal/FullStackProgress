var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "GoodBye!";

document.querySelector("input[type='checkbox']").click();

var thirdListItem = document.querySelector("ul").lastElementChild;
thirdListItem.innerHTML = "Aadit";

var listItems = document.getElementsByTagName("li"); // Gets an array of list elements

var button = document.getElementsByClassName("btn")[0]; // Gets the first button element with class 'btn'
button.style.backgroundColor = "yellow"; // Changes the background color of the button

var htmlList = document.getElementById("list");
htmlList.style.listStyle = "none";

var allListItems = document.querySelectorAll("#list li"); // Gets all list items within the element with id 'list'

var link = document.querySelector("#list a");
link.style.color = "red";

// manipulate classes of html elements
document.querySelector("button").classList.add("invisble");

document.querySelector("button").classList.remove("invisble");

document.querySelector("button").classList.toggle("visible");

document.querySelector("h1").classList.toggle("huge");

// correctly manipulate innerHTML/textContent
document.querySelector("h1").innerHTML = "<em>Goodbye!</em>";

document.querySelector("h1").textContent;

// manipulate html element attributes
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bing.com");
