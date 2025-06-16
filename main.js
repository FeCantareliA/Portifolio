import projetos from "./projects.js";

window.addEventListener('DOMContentLoaded', () => {
  const buttonMenu = document.getElementById("btmenu");
  const listMenu = document.getElementById("menu_lista");

  const barsMenu = "<i class='fa-solid fa-bars'></i>";
  const closeMenu = "<i class='fa-solid fa-xmark'></i>";

  const inteMenu = () => {
    if (listMenu.style.display === "none" || listMenu.style.display === "") {
      listMenu.style.display = "block";
      buttonMenu.innerHTML = closeMenu;
    } else {
      listMenu.style.display = "none";
      buttonMenu.innerHTML = barsMenu;
    }
  };

  function inicio() {
    buttonMenu.innerHTML = barsMenu;
  }

  inicio();
  buttonMenu.onclick = inteMenu;

  criarProjetos(projetos);
});



function criarProjetos(projetos){
  const section = document.querySelector(".container__projetos")
  const section_projects = document.querySelector(".projects");
for(let i=0; i<projetos.length; i++){
  const projeto = document.createElement("div");
  projeto.classList.add("projetos")

  const link = document.createElement("a");
  link.href = projetos[i].href;

  const image = document.createElement("img");
  image.classList.add("projetos__imagem");
  image.src = projetos[i].src;

  const projeto_conhecimento= document.createElement("div");
  projeto_conhecimento.classList.add("projetos__conhecimento")

  const projeto_conhecimento_texto=document.createElement("div")
  projeto_conhecimento_texto.classList.add("projetos__conhecimento__texto")

  const nome = document.createElement("h4");
  nome.innerHTML=projetos[i].name;

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

