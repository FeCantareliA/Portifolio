import projetos from "./projects.js";

const barsMenu = "<i class='fa-solid fa-bars'></i>";
const closeMenu = "<i class='fa-solid fa-xmark'></i>";
const buttonMenu = document.getElementById("btmenu");
const listMenu = document.getElementById("menu_lista");

const moon ="<i class='fa-solid fa-moon'></i>";
const sun = "<i class='fa-solid fa-sun'></i>"

const changeThemeBtn = document.querySelector("#change-theme");
const labelchange = document.querySelector(".changed-theme")

window.addEventListener('DOMContentLoaded', () => {

  inicio();
  buttonMenu.onclick = inteMenu;
  
  loadTheme();

  
});
criarProjetos(projetos);

function inicio() {
  buttonMenu.innerHTML = barsMenu;
}
const inteMenu = () => {
  if (listMenu.style.display === "none" || listMenu.style.display === "") {
    listMenu.style.display = "block";
    buttonMenu.innerHTML = closeMenu;
  } else {
    listMenu.style.display = "none";
    buttonMenu.innerHTML = barsMenu;
  }
};


function criarProjetos(projetos) {
  const section = document.querySelector(".container__projetos")
  const section_projects = document.querySelector(".projects");
  for (let i = 0; i < projetos.length; i++) {
    const projeto = document.createElement("div");
    projeto.classList.add("projetos")

    const link = document.createElement("a");
    link.href = projetos[i].href;

    const image = document.createElement("img");
    image.classList.add("projetos__imagem");
    image.src = projetos[i].src;

    const projeto_conhecimento = document.createElement("div");
    projeto_conhecimento.classList.add("projetos__conhecimento")

    const projeto_conhecimento_texto = document.createElement("div")
    projeto_conhecimento_texto.classList.add("projetos__conhecimento__texto")

    const nome = document.createElement("h4");
    nome.innerHTML = projetos[i].name;

    projeto_conhecimento_texto.appendChild(nome);

    //Fazer com que crie sozinho os conhecimentos
    projetos[i].conhecimentos.forEach(conhecimento => {
      const icon = document.createElement("i");
      icon.className = conhecimento;
      icon.setAttribute("aria-label", conhecimento.split(" ")[1].toUpperCase());
      projeto_conhecimento_texto.appendChild(icon);
    });

    projeto_conhecimento.appendChild(projeto_conhecimento_texto);

    link.appendChild(image);
    link.appendChild(projeto_conhecimento);

    projeto.appendChild(link);

    section_projects.appendChild(projeto);

    section.appendChild(section_projects);
  }
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
    labelchange.innerHTML = moon;
  }else {
    labelchange.innerHTML = sun;
  }
}
changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Save or remove dark mode from localStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
    labelchange.innerHTML = moon;
  }else{
    labelchange.innerHTML = sun;
  }
});