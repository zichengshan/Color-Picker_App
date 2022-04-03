
const formEl = document.getElementById("color-picker-form")
const seedColorEl = document.getElementById("seed-color")
const colorSchemeEl = document.getElementById("color-scheme")
const colorBoardEl = document.getElementById("color-board")

formEl.addEventListener("submit", event => {
    event.preventDefault()
    let html = ""
    let seedColor = seedColorEl.value.substr(1)
    let colorScheme = colorSchemeEl.value
    fetch(`https://www.thecolorapi.com/scheme?&hex=${seedColor}&mode=${colorScheme}&count=5`, {method: "GET"})
        .then(res => res.json())
        .then(data => {
            console.log(data.colors[0].hex.value)
            for(let color of data.colors){
                html += `
                <img src="${color.image.bare}">
                <p>${color.hex.value}</p>
            `
            }
            colorBoardEl.innerHTML = html
        })
})
