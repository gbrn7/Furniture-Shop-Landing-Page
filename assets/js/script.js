const x = document.querySelector(".open");
console.log(x);
x.addEventListener("click", function (){
    x.classList.toggle("bx-x");
    console.log(x);
    const y = document.querySelector(".menu-wrapper");
    console.log(y);
    y.classList.toggle("active");
});

const z = document.querySelectorAll(" .img-box i");
z.forEach(function(element){
    element.addEventListener("click", function(){
        if(element.classList.contains("bxs-heart")){
            element.classList.replace("bxs-heart", "bx-heart");
        }
        else{
            element.classList.replace("bx-heart", "bxs-heart")
        }
    })
})
