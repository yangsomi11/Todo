const images = ["0.JPG","2.JPG","3.JPG","4.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
console.log(bgImage)

document.body.appendChild(bgImage);