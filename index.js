const PetsIndex = "http://localhost:3000/api/v1/pets"

document.addEventListener('DOMContentLoaded', () => {
    fetch(PetsIndex)
    .then(response => response.json())
    .then(fosters => {
        console.log(fosters);
    })
})