document.addEventListener('DOMContentLoaded', function(){
    console.log("ran");
    const images=["pic1.jpg","pic2.jpg","pic3.jpg"];
    const image= images[Math.floor(Math.random()*images.length)]
    console.log(image);
    document.getElementById("image").setAttribute(
        "src",
        `./images/${image}`
    )
}, false);