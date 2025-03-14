const Moon = document.getElementById('sailor-moon');
const Mercury = document.getElementById('sailor-mercury');
const Mars = document.getElementById('sailor-mars');
const Jupiter = document.getElementById('sailor-jupiter');
const Venus = document.getElementById('sailor-venus');
const Guardians = document.getElementsByClassName('flex-item');
const charName = document.getElementById('char-name');
const charScreen = document.getElementById('character-screen');


// Get the div by its ID
// const div1 = document.getElementById("myDIV");


// function myFunction() {
//     Guardians.addEventListener('click', function(event) {
//         // div1.style.animation = "mymove 4s forwards";
//         charSum.style.color = white;
//     });
// };


// function myFunction() {
//     charInfo.textContent = "this works!!!";
//     charInfo.style.color = "white";
// }


Array.from(Guardians).forEach(guardian => {
    guardian.addEventListener('click', function () {
        // Change the color of the text when clicking on a character
        charName.style.opacity = 1; // Set the color to white
        // charScreen.style.display = !;
        document.getElementById("character-screen").style.display = "block";
    });
});


