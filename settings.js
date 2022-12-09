// Åben og luk for vores settings overlay
let settings = document.getElementById("syn")
let overlay = document.getElementById("noshow")
let closer = document.getElementById("close-overlay")

settings.addEventListener("click", function(){
    overlay.classList.remove("noshow")
})

closer.addEventListener("click", function(){
    overlay.classList.add("noshow")
})

// Toggle dyslexic mode
let dyslexic = document.getElementById("dyslexic");

dyslexic.addEventListener("change", function(event){
    if(event.target.checked){
        let element = document.createElement("link")
        element.id = "ordblind-mode"
        element.setAttribute("rel", "stylesheet")
        element.setAttribute("href", "assets/dyslexic.css")
        document.head.appendChild(element)
        localStorage.dyslexic = true;
    }
    else{
        document.querySelector("#ordblind-mode").remove()
        localStorage.removeItem("dyslexic")
    }
})

if (localStorage.dyslexic) {
    let element = document.createElement("link")
    element.id = "ordblind-mode"
    element.setAttribute("rel", "stylesheet")
    element.setAttribute("href", "assets/dyslexic.css")
    document.head.appendChild(element)
    dyslexic.checked = true;
}


// Toggle dark mode
let darkmode = document.getElementById("darkmode");

darkmode.addEventListener("change", function(event){
    if(event.target.checked){
        let element = document.createElement("link")
        element.id = "dark-mode"
        element.setAttribute("rel", "stylesheet")
        element.setAttribute("href", "assets/darkmode.css")
        document.head.appendChild(element)
        localStorage.darkmode = true;
    }
    else{
        document.querySelector("#dark-mode").remove()
        localStorage.removeItem("darkmode")
    }
})

if (localStorage.darkmode) {
    let element = document.createElement("link")
    element.id = "dark-mode"
    element.setAttribute("rel", "stylesheet")
    element.setAttribute("href", "assets/darkmode.css")
    document.head.appendChild(element)
    darkmode.checked = true;
}

// Toggle reading mode
let reading = document.getElementById("readable");

reading.addEventListener("change", function(event){
    if(event.target.checked){
        let element = document.createElement("link")
        element.id = "read-mode"
        element.setAttribute("rel", "stylesheet")
        element.setAttribute("href", "assets/reading.css")
        document.head.appendChild(element)
        localStorage.reading = true;
    }
    else{
        document.querySelector("#read-mode").remove()
        localStorage.removeItem("reading")
    }
})


if (localStorage.reading) {
    let element = document.createElement("link")
    element.id = "read-mode"
    element.setAttribute("rel", "stylesheet")
    element.setAttribute("href", "assets/reading.css")
    document.head.appendChild(element)
    reading.checked = true;
}
