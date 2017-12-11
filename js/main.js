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

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

var pattern = new Image();

function animate() {
    pattern.src = 'http://webbkyrkan.com/img/2027/d6e0440430b044da970b8cd95e5e9371--tiny-houses-floor-plans-small-houses.jpg';
    setInterval(drawShape, 1000);
}

var canvas = document.getElementById('home_canvas');
var ctx = canvas.getContext('2d');

ctx.translate(10, 10);
var left = -1;

function drawShape() {
    

    if (canvas.getContext) {

        left = left * -1;

        for(let i = 0; i < 5; i++){
            
            //ctx.save();
            ctx.clearRect(0, 0, 2000, 700);
            var px = 0;

            if (left < 0) {
                px = 100 + (10 * i);
                console.log('right : ' + (100 + (10 * i)));
            }else{
                px = 100 - (10 * i);
                console.log('right : ' + (100 - (10 * i)));
            }

            

            ctx.drawImage(pattern, px, 00, 600, 400);
            //ctx.restore();

            wait(100);
        }

        
        
    }

    else {
        alert('You need Safari or Firefox 1.5+ to see this demo.');
    }
}

animate();

/*
var canvas = document.getElementById('home_canvas');
var context = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function () {
    context.rotate(Math.PI / 4);
    context.drawImage(imageObj, 0, 0, 736, 677, 0, 0, 500, 300);
};
imageObj.src = 'http://webbkyrkan.com/img/2027/d6e0440430b044da970b8cd95e5e9371--tiny-houses-floor-plans-small-houses.jpg';
*/