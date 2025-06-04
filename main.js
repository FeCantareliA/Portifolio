const buttonMenu = document.getElementById("btmenu");
const listMenu = document.getElementById("menu_lista")



const barsMenu = "<i class='fa-solid fa-bars' ></i>";
const closeMenu = "<i class='fa-solid fa-xmark'></i>";






const inteMenu = () =>{
if(listMenu.style.display === "none" || listMenu.style.display === ""){
    listMenu.style.display="block";
    buttonMenu.innerHTML=closeMenu;
}else
    listMenu.style.display = "none";
    buttonMenu.innerHTML = barsMenu; 
}


buttonMenu.onclick = inteMenu;
 