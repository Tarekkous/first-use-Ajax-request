let url = 'https://randomuser.me/api?results=100&nat=FR&gender=female';
// let url = 'https://randomuser.me/api?nat=FR,gender=female';

let card = document.querySelector('.card');
let first = document.querySelector('.container>h4');
let last = document.querySelector('.container>p');
let main = document.querySelector('main');

fetch(url)
    .then((response) => response.json())
    .then(function (data) {
        // for (let index = 0; index < 100; index++) {
        // }
        // for (const iterator of data) {
        //     console.log(data.results[0].name);

        // }
        console.log(data);

        for (const user of data.results) {
            console.log(user.name.first, user.name.last);
            var clonedCard = card.cloneNode(true);
            let firstOne = clonedCard.querySelector('.container>h4');
            let lastOne = clonedCard.querySelector('.container>p');
            
            firstOne.innerHTML = user.name.first;
            lastOne.innerHTML = user.name.last;
            main.append(clonedCard)
        }
    })



// //on envoie une requête à l'url
// fetch(url)
// //on met la réponse sous forme d'un objet JS
// .then((response) => response.json())
// //si la réponse est resolve
// .then(function (data) {
//     console.log(data);
//     for (const user of data.results) {
//         console.log(user.name.last, user.name.first);
//     }
// })
// //si la réponse est rejet
// .catch(function (error){
//     console.log(error);
//     console.log('url mauvaise');
// })