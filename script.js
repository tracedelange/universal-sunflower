

function addClickEventListener(input) {
    input.addEventListener('click', function() {
        alert("Ahh you called my bluff! These links will come later when my webpage is expanded to webpage(s).")
    })
}

function getRandomImage() {
    const randomNumber = Math.floor(Math.random() * 7);
    exampleImage.src = `images/${randomNumber + 1}.jpg`
}

function getNextImage() {
    const currentSrc = exampleImage.src.split('/')
    const index = currentSrc[currentSrc.length - 1].split('.')[0]

    if (index === "7") {
        exampleImage.src = `images/1.jpg`
    } else {
        exampleImage.src = `images/${parseInt(index) + 1}.jpg`  
    }
}

const links = document.getElementsByClassName("nav-link");

for (let i = 0; i < links.length; i++) {
    addClickEventListener(links[i])
}

const exampleImage = document.getElementById("software-images")



exampleImage.addEventListener('click', function(){
    getNextImage()
})

