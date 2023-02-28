const toP = document.querySelector(".top")
window.addEventListener("scroll",function(){
    const X = this.pageYOffset;
    if(x>1){toP.classList.add("active")}
    else{
        toP.classList.remove("active")
    }
})

const itemsliderbar = document.querySelectorAll(".category-left-li")
itemsliderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
    menu.classList.toggle("block")
})