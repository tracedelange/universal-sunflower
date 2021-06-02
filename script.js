

function addClickEventListener(input) {
    input.addEventListener('click', function() {
        alert("Ahh you called my bluff! These links will come later when my webpage is expanded to webpage(s).")
    })
}

function getRandomImage() {
    const randomNumber = Math.floor(Math.random() * 7);
    exampleImage.src = `images/${randomNumber + 1}.jpg`
}

const links = document.getElementsByClassName("nav-link");

for (let i = 0; i < links.length; i++) {
    addClickEventListener(links[i])
}

const exampleImage = document.getElementById("software-images")



exampleImage.addEventListener('click', function(){
    getRandomImage()
})

