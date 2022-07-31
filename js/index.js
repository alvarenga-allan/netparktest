const siteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"

let form = document.querySelector('#register');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        grecaptcha.ready(function() {
          grecaptcha.execute(siteKey, {action: 'submit'}).then(function(token){
            console.log(recaptcha.token)
        });
      try{
        let required = document.querySelector('.required')
        if (!required.value){
          throw "Erro 999999 - parâmetros faltantes na chamada"
        }
        alert("Enviado com sucesso!")
      } catch (error){
alert("InternalCode: Erro 999999 - parâmetros faltantes na chamada")
      }
    });
  });

  console.log(recaptcha.token)
    // function sendForm() {
    //     alert('Enviado');
    //   }