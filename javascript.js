const container = document.querySelector("#container")

// for (i=0; i<16; i++) {
// const div = document.createElement("div")
// div.textContent = "0"
// container.appendChild(div)
// }

for(j=0; j<4; j++) {
    window["divColumn" + j] = document.createElement("div")
    window["divColumn" + j].setAttribute("id", `divColumn${j}`)
    container.appendChild(window["divColumn" + j])
    window["divColumnPosition" + j] = document.getElementById(`divColumn${j}`)
    for (i=0; i<4; i++) {
        window["divSub" + j + i] = document.createElement("div")
        window["divSub" + j + i].textContent = "0"
        window["divSub" + j + i].setAttribute("id", `divSub${j}${i}`)
        window["divColumn" + j].appendChild(window["divSub" + j + i])
        window["divsubPosition" + j + i] = document.getElementById(`divSub${j}${i}`)
        }
}
// divsubPosition00.addEventListener("mouseenter", () => {document.divSub00.style.backgroundColor = "red"})

divsubPosition00.addEventListener("mouseenter", () => {divSub00.setAttribute("class", "divMouseEnter")})
divsubPosition00.addEventListener("mouseleave", () => {divSub00.setAttribute("class", "")})


// window["divSub" + j + i].setAttribute("class", "divMouseEnter")

// const divRow1 = document.createElement("div")
// divRow1.setAttribute("id", "divRow1")
// container.appendChild(divRow1)
// const divRow1Position = document.getElementById("divRow1")
// for (i=0; i<4; i++) {
//     const divSub = document.createElement("div")
//     divSub.textContent = "0"
//     divRow1Position.appendChild(divSub)
//     }

// const divRow2 = document.createElement("div")
// divRow2.setAttribute("id", "divRow2")
// container.appendChild(divRow2)
// const divRow2Position = document.getElementById("divRow2")
// for (i=0; i<4; i++) {
//     const divSub = document.createElement("div")
//     divSub.textContent = "0"
//     divRow2Position.appendChild(divSub)
//     }

// const divRow3 = document.createElement("div")
// divRow3.setAttribute("id", "divRow3")
// container.appendChild(divRow3)
// const divRow3Position = document.getElementById("divRow3")
// for (i=0; i<4; i++) {
//     const divSub = document.createElement("div")
//     divSub.textContent = "0"
//     divRow3Position.appendChild(divSub)
//     }

// const divRow4 = document.createElement("div")
// divRow4.setAttribute("id", "divRow4")
// container.appendChild(divRow4)
// const divRow4Position = document.getElementById("divRow4")
// for (i=0; i<4; i++) {
//     const divSub = document.createElement("div")
//     divSub.textContent = "0"
//     divRow4Position.appendChild(divSub)
//     }

// const div = document.querySelector("div")

