const siteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"

let form = document.querySelector('#register');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
      try{
        let required = document.querySelector('.required')
        if (!required.value){
          throw "Erro 999999 - parâmetros faltantes na chamada"
        }
      } catch (error){
alert("Erro 999999 - parâmetros faltantes na chamada")
      }
    });
    function sendForm() {
        alert('Enviado');
      }