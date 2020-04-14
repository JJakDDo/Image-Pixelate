const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const input = document.querySelector("input");
const range = document.querySelector("#range");
const label = document.querySelector("p");

let factor = 1;
let image = document.createElement("img");

input.addEventListener("change", function(){
    const file = this.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function(e){
        image.src = e.target.result;
    });
    reader.readAsDataURL(file);


    image.addEventListener("load", function(){
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.classList.add("filter");
        const w = image.width * factor;
        const h = image.height * factor;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(image, 0, 0, w, h);
        ctx.drawImage(canvas, 0, 0, w, h, 0, 0, image.width, image.height);
    });

});

if(range){
    range.addEventListener("input", function(event){
        factor = event.target.value; 
        label.innerText = "Scale Factor: " + factor;
        image.src = image.src;               
    });
}