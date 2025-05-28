//? Write a program to show different alerts when different buttons are clicked.
// document.getElementsByClassName("btn1")[0].addEventListener("click", function() {
//     alert("Button 1 clicked!");
// });
// document.getElementsByClassName("btn2")[0].addEventListener("click", function() {
//     alert("Button 2 clicked!");
// });
// document.getElementsByClassName("btn3")[0].addEventListener("click", function() {
//     alert("Button 3 clicked!");
// });

//? Create a website which is capable of storing bookmarks of your favorite websites using href.
// document.getElementById("google").addEventListener("click",function(){
//     let url = "https://www.google.com/";
//     window.open(url,"_blank","width=600,height=400,scrollbars=yes,resizable=yes");
//     window.focus();
// })
// document.getElementById("facebook").addEventListener("click",function(){
//     let url = "https://www.facebook.com/";
//     window.open(url,"_blank","width=600,height=400,scrollbars=yes,resizable=yes");
//     window.focus();
// })
// document.getElementById("twitter").addEventListener("click",function(){
//     let url = "https://www.twitter.com/";
//     window.open(url,"_blank","width=600,height=400,scrollbars=yes,resizable=yes");
//     window.focus();
// })

//? Write a javaScript program to keep fetching contents of a website (Every 5 seconds)
// function fetchWebsiteContent() {
//     fetch('https://api.github.com') // Example API endpoint
//         .then(response => response.json())
//         .then(data => {
//             console.log(data); // Display the fetched data in the console
//         })
//         .catch(error => console.error('Error fetching data:', error));
// }
// setInterval(fetchWebsiteContent, 5000); // Fetch content every 5 seconds

//? Create a toggle bulb effect using classlist toggle method in javaScript.
setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb");
}, 200);