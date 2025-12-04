function mudarNome(){
     let nome = "Esquisito!" 
     document.getElementById("Bem-vindo").textContent = "Bem vindo, " + nome
    }
/*parte do documento fotos/gif*/
var swiper = new Swiper(".swiper", {
  cssMode:true,
  loop:true,
  navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },
  keyboard:true,
  });



 







