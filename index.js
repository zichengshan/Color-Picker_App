
const formEl = document.getElementById("color-picker-form")
const seedColorEl = document.getElementById("seed-color")
const colorSchemeEl = document.getElementById("color-scheme")
const colorBoardEl = document.getElementById("color-board")

formEl.addEventListener("submit", event => {
    event.preventDefault()
    let html = ""
    let seedColor = seedColorEl.value.substr(1)
    let colorScheme = colorSchemeEl.value
    let index = 0
    fetch(`https://www.thecolorapi.com/scheme?&hex=${seedColor}&mode=${colorScheme}&count=5`, {method: "GET"})
        .then(res => res.json())
        .then(data => {
            console.log(data.colors[0].hex.value)
            for(let color of data.colors){
                html += `
                    <div class="color-bar">
                        <img id="color-bar-image" src="${color.image.bare}">
                        <input class="color-bar-text" id="res-${index}" value="${color.hex.value}"></input>
                    </div>
            `
                index++
            }
            colorBoardEl.innerHTML = html
            setListener()
        })
})

function copyPassword() {
    this.select()
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(this.value).then(function (){
        /* Alert the copied text */
        alert("Copied");
    });
}

function setListener() {
    const res0El = document.getElementById("res-0")
    const res1El = document.getElementById("res-1")
    const res2El = document.getElementById("res-2")
    const res3El = document.getElementById("res-3")
    const res4El = document.getElementById("res-4")
    res0El.addEventListener('click', copyPassword);
    res1El.addEventListener('click', copyPassword);
    res2El.addEventListener('click', copyPassword);
    res3El.addEventListener('click', copyPassword);
    res4El.addEventListener('click', copyPassword);
}
