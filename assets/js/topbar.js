const body = document.querySelector("body");
const topbar = document.createElement("div");
topbar.id = "topbar";
topbar.innerHTML = `
  <a href="/">
    <div class="back-arrow">
      <i class="fas fa-arrow-left"></i>back
    </div>
  </a>
  <div class="links">
    <a href="mailto:samuelaguiarp@gmail.com"><i class="fas fa-envelope"></i></a>
    <a href="https://www.linkedin.com/in/samuelaguiar/" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="https://github.com/samuelaguiar/" target="_blank"><i class="fab fa-github"></i></a>
  </div>
`;
body.insertAdjacentElement("afterbegin", topbar);
