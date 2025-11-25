 function mudarNome(){
     let nome = "Esquisito!" 
     document.getElementById("Bem vindo, visitante!").textContent = "Bem vindo, " + nome
    }

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




