(function() {

    // Variable declarations -------------------------------------------------------------------
    var pageModules;
    // var modHeader = document.getElementById("main_header");
    // var modSidebar = document.getElementById("main_sidebar");
    // var modMainContent = document.getElementById("main_content");
    // var modFooter = document.getElementById("main_footer");

    //fonction pour stocker les modules de la pages dans un tableau ----------------------------
    function getPageModules() {
        // pageModules = [modHeader, modSidebar, modMainContent, modFooter]; --- Solution 1
        return document.querySelectorAll("[id]"); // Solution après optimisation ... Plutot que de stocker dans une variable on retourne la selection -> Ensuite on stockera la fonction dans une variable... On sera moins idépendant.
    }


    // fonction pour styliser la couleur de texte et de fond suivant le numéro de case du tableau ------------
    function styliserModule(num, color, bg) {
      if (num < pageModules.length){
          pageModules[num].style.color = color;
          pageModules[num].style.background = bg;
          //pageModules[num].setAttribute("style", "color: color; background: bg");
          return pageModules[num];
      } else {
          return console.log('%c Le nombre n\'existe pas ', 'background: #222; color: #bada55');

      }
    }


//Fonction qui retourne un tableau avec les  ---------------------------------------------------------
    function getModulesInfos(num) {
      obj = {
        id: pageModules[num].id,
        tagname: pageModules[num].tagName,
        classname: pageModules[num].className,
        dimensions: pageModules[num].getBoundingClientRect()
      };

      if (num < pageModules.length){
        return obj;
      } else {

        return console.log("Le nombre n'existe pas !!!!");
      }
    }
    window.onload = function init() {
      pageModules = getPageModules(); //On affecte la fonction à une variable
      console.log("Retour de la fonction styliser ===========");
      styliserModule(5, "white", "#BADA55");
      console.log("Retour d'un objet avec des infos ===========");
      getModulesInfos(1)
      console.log(obj);

    }
}());
