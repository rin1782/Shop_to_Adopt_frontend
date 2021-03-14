let outerNode = document.getElementById("outer-node")
let greeting = outerNode.getElementsByTagName("h1")[0]
let container = document.getElementById("container")

images.forEach( i => {
    let img = document.createElement("img")
    img.src = i 
    container.append(img)
})

