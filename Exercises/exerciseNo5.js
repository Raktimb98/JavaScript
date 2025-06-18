//? Write a javascript program to pretend to look like a hacker , write a async function which will simply display the following output in console after 2 seconds no.1 Initializing the system... no.2 Loading modules... no.3 Accessing the database... no.4 Hacking the system... no.5 Hacked successfully! and try to use html and css to make it look like a hacker console.
async function hackerConsole() {
  const lines = [
    "1. Initializing the system...",
    "2. Loading modules...",
    "3. Accessing the database...",
    "4. Hacking the system...",
    "5. Hacked successfully!",
  ];
  const consoleDiv = document.getElementById("hackerConsole");
  consoleDiv.innerHTML = ""; // Clear initial blink

  for (let i = 0; i < lines.length; i++) {
    await new Promise((res) => setTimeout(res, 2000));
    const line = document.createElement("div");
    line.className = "console-line";
    line.textContent = lines[i];
    consoleDiv.appendChild(line);
  }
  // Add blinking cursor at the end
  const cursor = document.createElement("span");
  cursor.className = "console-line blink";
  cursor.textContent = "_";
  consoleDiv.appendChild(cursor);
}

hackerConsole();
