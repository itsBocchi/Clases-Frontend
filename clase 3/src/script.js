var btnNext = document.getElementById('next');
var btnBack = document.getElementById('back');
var index = 1;
const imagen = document.getElementById("picture");
const favBtn = document.getElementById("fav");
const contFav = document.getElementById("favCont");
var favlist = [];

btnNext.onclick = () => {
    index++;
    console.log('Next', index);
    updateImage();
    }

btnBack.onclick = () => {
    index--;
    console.log('Back', index);
    updateImage();
}

function updateImage() {
    var img = document.getElementById('img');
    img.src = "https://picsum.photos/id/" + index + "/200/300";
}

favBtn.onclick = () => {
    let picture = document.createElement("img");
    // inject image into dom
    picture.src = "https://picsum.photos/id/" + index + "/200/300";
    contFav.appendChild(picture);
}