var btnNext = document.getElementById('next');
var btnBack = document.getElementById('back');
var index = 1;
const imagen = document.getElementById("picture");
const favBtn = document.getElementById("fav");
const contFav = document.getElementById("favCont");
var favList = [];

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
    let img = document.getElementById('img');
    img.src = "https://picsum.photos/id/" + index + "/200/300";
}

favBtn.onclick = () => {
if (favList.includes(index)) return;
    let div = document.createElement("div");
    div.id = "div_" + index;
    let img = document.createElement("img");
    img.src = "https://picsum.photos/id/" + index + "/100/150";
    img.id = "img_" + index;
    let btn = document.createElement("button");
    btn.textContent = "X";

    btn.id = "btn_" + index;
    btn.className = "btn";
    btn.onclick = (e) => {
        const id = e.target.id.split("_")[1];
        const div = document.getElementById("div_" + id);
        div.remove();
        favList = favList.filter((item) => item != id);
    }
    favList.push(index);
    div.appendChild(img);
    div.appendChild(btn);
    contFav.appendChild(div);
}