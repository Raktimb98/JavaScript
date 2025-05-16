//? Q1 Create a navbar and change the color of the first element to red

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

//? Q2 Create a table without a tbody , now use "view page source" button to check whether it has a tbody or not
//* And the answer is no, it doesn't have a tbody

//? Q3 Create a element with three children now change the color of the first and last element to green
let navList = document.querySelector("nav ul").children;
navList[0].style.color = "green"; // First li
navList[navList.length - 1].style.color = "green"; // Last li

//? Q4 Writ a javaScript code to change the background color of all <li> tag to cyan
let listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
  item.style.backgroundColor = "cyan";
});

//? Q5 Which of the following is used to look for the farthest ancestor that matches a given css selector ?
// a) closest()
// b) matches()
// c) contains()
// d) none of these()
//* The answer is closest() method