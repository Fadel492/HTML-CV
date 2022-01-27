// function cliqueBouton() {
//     // let prenom = document.getElementById("prenom");
//     // alert(prenom);
//     // let prenom = document.querySelector(#prenom)
//     // console.log(prenom.value);

//     // let h2s = document.querySelectorAll('h2');
//     // for (let h2 of h2s) {
//     //     h2.style = "color: red"
//     // }
// }

function seDeplacerIn() {
    let id = null;
    const elem = document.querySelector(#deplacer);
    let pos = 0;
    clearInterval(id);
    id = setInterval(seDeplacerOff, 5);

    function seDeplacerOff() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}