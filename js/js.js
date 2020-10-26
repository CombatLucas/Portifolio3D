var imagens = [
  "./Imgs/manequim1.png",
  "./Imgs/manequim2.png",
  "./Imgs/fonte.png",
  "./Imgs/sea.png",
  "./Imgs/sea2.png",
  "./Imgs/foot.png",
  "./Imgs/foot2.png",
  "./Imgs/satisfying.png",
  "./Imgs/car.png"
];

function trocar(idImagem){
  var img = document.getElementById("agni");
  img.src = imagens[ idImagem ];
}

function ativaNoScroll() {

  document.querySelectorAll('img').forEach((img, index) => {
    if(img.getBoundingClientRect().top < window.innerHeight) {
      img.src = img.getAttribute('data-src');
    };
  })
}

window.addEventListener('scroll', ativaNoScroll);