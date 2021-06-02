
function addClickEventListener(element) {
    element.addEventListener('click', function() {
        alert("Ahh you called my bluff! These links will come later when my webpage is expanded to webpage(s).")
    })
}


const links = document.getElementsByClassName("nav-link")

for (link in links) {
    addClickEventListener(links[link])
}

