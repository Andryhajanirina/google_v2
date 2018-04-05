let btn_ele = document.getElementById("btn_element");
let element_centre = document.getElementById("formulaire");
let mot_cle = document.getElementsByName("recherche");


// Cache l'élément centraux
element_centre.style.display = "none";

// Affiche l'élément centraux et cache le bouton
btn_ele.onclick = function(){
    element_centre.style.display = "block";
    btn_ele.style.display = "none";
};

// mot_cle.onsubmit = function(){
//     // https://www.google.fr/#q=hello+world
//     mot_cle = mot_cle.split(" ");
//     document.location.href="mot_cle.html"
// };

