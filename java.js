const Moon = document.getElementByClass("item1");
const Mercury = document.getElementsByClassName("item2");
const Mars = document.getElementByClass("item3");
const Jupiter = document.getElementByClass("item4");
const Venus = document.getElementByClass("item5");
const container = document.getElementByClass("flex-container");

function selectChar() {
    Mercury.style.animation = "mymove 4s ";
    Mercury.style.animationFillMode = "forwards";
}
