function MoreLess(){
    var box1= document.getElementById("myboxId");
    var box2=document.getElementById("myboxId2");
    var button=document.getElementById("btn");
    if(box1.style.display!="none"){
        box1.style.display="none";
        box2.style.display="inline";
        button.innerHTML="Read Less";
    }
    else{
        box1.style.display="inline";
        box2.style.display="none";
        button.innerHTML="Read More";
    }
}

const toggleBtn= document.getElementById("nav-toggle");
const navLinks=document.getElementById("nav-lists");
toggleBtn.addEventListener('click', () => {
     navLinks.classList.toggle('active');
})