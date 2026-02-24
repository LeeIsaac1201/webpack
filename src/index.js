import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
require("./styles.css");

const btn = document.getElementById("btn");
btn?.addEventListener("click", () => {
  const msg =
    document.getElementById("webpack-msg") ??
    (() => {
      const p = document.createElement("p");
      p.id = "webpack-msg";
      p.textContent = "Webpack is working!";
      document.body.appendChild(p);
      return p;
    })();
  msg.textContent = "Webpack is working!";
});
