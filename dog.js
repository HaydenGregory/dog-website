const genDog = document.getElementById('gen-dog')
const genRandDog = document.getElementById('gen-rand-dog')
const dogPic = document.getElementById('dog-pic')
const breedList = document.getElementById('drop-down')

fetch('https://dog.ceo/api/breeds/list').then(function (response) {
    return response.json()
}).then(function (data) {
    for (i = 0; i < data.message.length; i++) {
        const option = document.createElement('option')
        option.textContent = data.message[i]
        option.setAttribute('value', data.message[i])
        breedList.appendChild(option)
    }
})


genDog.addEventListener('click', function (event) {
    genDog.textContent = ('Generating Doggo...')
    fetch(`https://dog.ceo/api/breed/${breedList.value}/images/random`)
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        dogPic.setAttribute('src', data.message)
        dogPic.setAttribute('width', '900px')
        dogPic.setAttribute('height', '650px')
        genDog.textContent = ('Generate Doggo')
    })
})


genRandDog.addEventListener('click', function (event) {
        genRandDog.textContent = 'Generating Doggo...'
        fetch('https://dog.ceo/api/breeds/image/random').then(function (response) {
                return response.json()
            }).then(function (data) {
                    dogPic.setAttribute("src", data.message)
                    dogPic.setAttribute('width', '900px')
                    dogPic.setAttribute('height', '650px')
                    genRandDog.textContent = 'Random Doggo'
                })
            })
            






// ! Old Code

// breedList.addEventListener('change', function (event) {
//     fetch(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
//         .then(function (response) {
//             return response.json()
//         }).then(function (data) {
//         })
// })
