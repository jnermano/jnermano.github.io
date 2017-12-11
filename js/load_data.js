var li_profile = document.getElementById("li_profile");
var a_profile = document.getElementById("a_profile");

if (localStorage.length > 0) {
    var key = localStorage.key(0);
    var adh = JSON.parse(localStorage.getItem(key));
    a_profile.innerText = "Salut, " + adh.prenom;
}else{
    a_profile.innerText = "Salut, visiteur";
}

function show_user(){
    if (localStorage.length > 0) {
        var key = localStorage.key(0);
        var adh = JSON.parse(localStorage.getItem(key));
    }else{
        document.getElementsByClassName('modal-content')[0].style.width = '50%';
        add_content("Information", "<p>Aucune information n'est disponible sur vous dans notre base de données. <h4>Veuillez remplir le formulaire de contact <a href='contact.html'>ICI</a>.</h4> <h3>Merci!</h3></p>")
    }
}