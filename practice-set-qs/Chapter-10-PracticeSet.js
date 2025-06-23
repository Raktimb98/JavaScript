// console.log("Chapter 10 Practice Set");
// document.body.setAttribute(
//   "style",
//   "background-color: black; color: white; font-size: 20px; text-align: center; padding: 20px;"
// );
// document.body.innerHTML += "<h1>Hello World</h1>";

// //? No1: Use a free api to fetch data and display it on the webpage
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach((post) => {
//         const postElement = document.createElement("div");
//         postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
//         document.body.appendChild(postElement);
//         });
//     })
//     .catch((error) => console.error("Error fetching data:", error));

//? No2: Notes app
let n = localStorage.getItem("note")
alert("Your note is " + n)

let a = prompt("Enter your note")
if (a) {
        localStorage.setItem("note", a)
}

let c = confirm("Do you want to delete your note?")
if (c) {
        localStorage.removeItem("note")
        alert("Note deleted successfully!")
}
