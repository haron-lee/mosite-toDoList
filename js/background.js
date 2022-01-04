const imgBox = document.querySelector(".quote");
let images = [],
  index = 0;

images[0] = "bgImg/0.jpg";
images[1] = "bgImg/1.jpg";
images[2] = "bgImg/2.jpg";
images[3] = "bgImg/3.jpg";
images[4] = "bgImg/4.jpg";
images[5] = "bgImg/5.jpg";
images[6] = "bgImg/6.jpg";

index = Math.floor(Math.random() * images.length);
imgBox.style.background = `url('${images[index]}') no-repeat center center / cover`;
