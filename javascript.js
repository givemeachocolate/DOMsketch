const container = document.querySelector("#container")
const body = document.querySelector("body")
const btn = document.createElement("button")
btn.textContent = "RESET"
body.insertBefore(btn, container)
g = "500px"
container.style.width = g
container.style.height = g


btn.addEventListener("click", () => {
    let e = prompt("how many grid do you want?")
    for (k=0; k<f; k++) {
        window["divcol" + k] = document.getElementById(`divColumn${k}`)
        container.removeChild(window["divcol" + k])
    }
    f = e
    // body.removeChild(container)
    // const containerNew = document.createElement("div")
    // containerNew.setAttribute("id", container)
    // const container = document.getElementById(container)
    for (j=0; j<e; j++) {
        window["divColumn" + j] = document.createElement("div")
        window["divColumn" + j].setAttribute("id", `divColumn${j}`)
        container.appendChild(window["divColumn" + j])
        window["divColumnPosition" + j] = document.getElementById(`divColumn${j}`)
        for (i=0; i<e; i++) {
            window["divSub" + j + i] = document.createElement("div")
            window["divSub" + j + i].style.width = "100px"
            window["divSub" + j + i].style.height = "100px"
            window["divSub" + j + i].setAttribute("id", `divSub${j}${i}`)
            window["divColumn" + j].appendChild(window["divSub" + j + i])
            window["divsubPosition" + j + i] = document.getElementById(`divSub${j}${i}`)
            a.push(window["divsubPosition" + j + i])
            b.push(window["divSub" + j + i])
            }
    }
    for (i=0; i<a.length; i++) {
        let c = a[i] 
        let d = b[i]
        c.addEventListener("mouseenter", () => {d.setAttribute("class", "divMouseEnter")})
        c.addEventListener("mouseleave", () => {d.setAttribute("class", "")})
    }
})

// for (i=0; i<16; i++) {
// const div = document.createElement("div")
// div.textContent = "0"
// container.appendChild(div)
// }

let a = []
let b = []
let f = 4

for (j=0; j<f; j++) {
    window["divColumn" + j] = document.createElement("div")
    window["divColumn" + j].setAttribute("id", `divColumn${j}`)
    container.appendChild(window["divColumn" + j])
    window["divColumnPosition" + j] = document.getElementById(`divColumn${j}`)
    for (i=0; i<f; i++) {
        window["divSub" + j + i] = document.createElement("div")
        // window["divSub" + j + i].textContent = "0"
        window["divSub" + j + i].style.width = "100px"
        window["divSub" + j + i].style.height = "100px"
        window["divSub" + j + i].setAttribute("id", `divSub${j}${i}`)
        window["divColumn" + j].appendChild(window["divSub" + j + i])
        window["divsubPosition" + j + i] = document.getElementById(`divSub${j}${i}`)
        // a.push("divsubPosition" + `${i}${j}`)
        // b.push("divSub" + `${i}${j}`)
        a.push(window["divsubPosition" + j + i])
        b.push(window["divSub" + j + i])
        }
}
// divsubPosition00.addEventListener("mouseenter", () => {document.divSub00.style.backgroundColor = "red"})

// divsubPosition00.addEventListener("mouseenter", () => {divSub00.setAttribute("class", "divMouseEnter")})
// divsubPosition00.addEventListener("mouseleave", () => {divSub00.setAttribute("class", "")})

for (i=0; i<a.length; i++) {
    let c = a[i] 
    let d = b[i]
    // a[i].addEventListener("mouseenter", () => {b[i].setAttribute("class", "divMouseEnter")})
    // a[i].addEventListener("mouseleave", () => {b[i].setAttribute("class", "")})
    c.addEventListener("mouseenter", () => {d.setAttribute("class", "divMouseEnter")})
    c.addEventListener("mouseleave", () => {d.setAttribute("class", "")})
    // d.style.width = "100px"
}


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

