const images =[
    "https://source.unsplash.com/random/?city,night",
    "https://source.unsplash.com/random/?morning",
    "https://source.unsplash.com/random/?space",
    "https://source.unsplash.com/random/?sky",
    "https://source.unsplash.com/random/?sea",
    "https://source.unsplash.com/random/?star",
    "https://source.unsplash.com/random/?mountain",
    "https://source.unsplash.com/random/?night",
    "https://source.unsplash.com/random/?sunset",
    "https://source.unsplash.com/random/?Wallpapers",
]

const idx=Math.floor(Math.random() * images.length);
console.log(idx)
const image= images[idx];

const body = document.querySelector("body")
body.style.backgroundImage=`url(${image})`
// bgImg=document.createElement("img");
// bgImg.src = `image/${image}`;

// document.body.appendChild(bgImg)
