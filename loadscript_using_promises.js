const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
        resolve(1);
    };
    script.onerror = () => {
        reject(new Error("Script load error"));
    };
  });
};
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js");
p1.then((value) => {
    console.log("Script loaded successfully", value);
}).catch((error) => {
    console.error("Error loading script ,", error);
});