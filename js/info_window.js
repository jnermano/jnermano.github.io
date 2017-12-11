var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function add_content(header, content){
    document.getElementById('header_content').innerText = header;
    var m_body = document.getElementsByClassName("modal-body")[0];
    m_body.innerHTML = content;
    modal.style.display = "block";
}