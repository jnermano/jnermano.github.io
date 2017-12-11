var testims = [
    "Dans la phase d'étude, il cerne tout d'abord le programme (un logement, un musée, l'établissement scolaire d'un village, le centre nautique d'une ville balnéaire, etc.), puis les besoins et attentes du client. Cette première étape est primordiale pour le bon déroulement du projet.<br/>- <b>Martin Louis</b>",
    "Ensuite, c’est la phase de conception. L’élaboration des plans et des visuels 3D ne se fait désormais quasiment que sur ordinateur. L’architecte établit le budget, tout en dialoguant avec le client pour valider les étapes du projet.<br/>- <b>Jean To</b>",
    'Durant la réalisation des travaux, il est l\'intermédiaire numéro 1 entre le client et les entreprises. "C’est parfois un véritable casse - tête, on doit faire correspondre les plannings de tous les intervenants.Au moindre retard d\'une équipe, les conséquences sur le chantier peuvent être importantes !"<br/>- <b>Claan Ronald</b>',
    "On m'avait conseillé de faire un bac scientifique pour entrer ensuite en école d'archi. rapporte Julie. Une fois là-bas, je me suis vite rendu compte de la diversité des profils : certains viennent de littéraire, d’autres ont des bacs pro dans le domaine du bâtiment, d’autres des bacs technologiques \"Arts appliqués\".<br/>- <b>Ken Tou</b>"
];


function show_test(pos){
    var testim = document.getElementById("testim");
    var pagging = document.getElementById("pagination_");

    testim.innerHTML = testims[pos];

    var children_btn = pagging.getElementsByTagName("a");
    for(var i = 0; i < children_btn.length; i++){
        children_btn[i].className = "";
    }
    children_btn[pos].className = "active";
}

show_test(0);


function scroll_spy(){
    
    var sections = document.getElementsByClassName("anchor");

    var min = 1000;
    var ele = null, last_ele = null;

    for(var i = 0; i < sections.length; i ++){
        
        var diff = Math.abs(sections[i].offsetTop - window.scrollY);

        var item_menu = document.querySelectorAll("a[href='#" + sections[i].id + "']")[0];

        if(item_menu.className === "active"){
            last_ele = item_menu;
        }
        
        if(diff <= min){
            ele = item_menu;
            min = diff;
        }
    }
    if(last_ele !== null)
        last_ele.className = "";

    ele.className = "active";

}

document.addEventListener("scroll", scroll_spy);
scroll_spy();