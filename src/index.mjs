import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./styles.css";

const btn = document.getElementById("btn");
if (btn) {
  btn.addEventListener("click", () => {
    console.log("Bootstrap is working 🎉");
  });
}
