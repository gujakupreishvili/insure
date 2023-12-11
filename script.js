const hamburger = document.querySelector(".hamburger");
let menOpen=false
hamburger.addEventListener("click",() =>{
  if (!menOpen){
    hamburger.classList.add('open');
    menOpen=true;
  }else{
    hamburger.classList.remove('open');
    menOpen=false;
  }
});