// make sure the jQuery library is ready
$(document).ready(function () {
  $("button").css("color", "black");
});

// SELECT ELEMENTS
// document.querySelector("h1");
$("h1");

// document.querySelectorAll("button")
$("button");

// MANIPULATING STYLES
// document.querySelector("h1").classList.add("big-title");
$("h1").addClass("big-title"); // .removeClass("big-title");

console.log($("h1").hasClass("big-title")); // true

// MANIPULATING TEXT
// document.querySelector("h1").innerText = "New Title";
$("h1").text("New Title");

// document.querySelector("h1").innerHTML = "<span>New Title</span>";
$("h1").html("<span>New Title</span>");

// MANIPULATING ATTRIBUTES
// document.querySelector("img").setAttribute("src", "new-image.jpg");
$("img").attr("src", "new-image.jpg");

// document.querySelector("a").setAttribute("href", "https://www.new-url.com");
$("a").attr("href", "https://www.new-url.com");

// ADDING EVENT LISTENERS
// document.querySelector("h1").addEventListener("click", function() {});
$("h1").click(function () {
  $(this).toggleClass("big-title");
});

// for (var i = 0; i < 5; i++) {
// document.querySelectorAll("button")[i].addEventListener("click", function() {
//   document.querySelector("h1").style.color = "purple";
// });
// }

$("button").click(function () {
  $("h1").toggleClass("purple-color");
});

$("input").keypress(function (event) {
  console.log(event.key);
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $(this).toggleClass("purple-color");
});

// ADD ELEMENTS
$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");

// delete the first button
$("button").first().remove();

// hide element
$("button").on("click", function () {
  $("h1").toggle();
});

// Animation
$("button").on("click", function () {
  $("input").fadeToggle();
});

$("button").on("click", function () {
  $("h1").slideToggle();
});

$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 });
});

// chain animations
$("button").on("click", function () {
  $("input").fadeToggle().slideToggle().animate({ opacity: 0.5 });
});
