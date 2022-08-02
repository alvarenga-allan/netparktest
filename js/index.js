const siteKey = "6LcDdjYhAAAAAH5UsKV7M652mrxd9-p3T9dk_yCA"
let form = document.querySelector('#register');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    grecaptcha.ready(function() {
        grecaptcha.execute(siteKey, {action: 'submit'}).then(function(token) {
          
            const gRecaptchaResponse=document.querySelector("#g-recaptcha-response").value=token;
        
   
      
      try{
        let required = document.querySelector('.required')
        if (!required.value){
          throw "Erro 999999 - parâmetros faltantes na chamada"
        }
        alert("Orçamento enviado com sucesso!")
        
      } catch (error){
        alert("InternalCode: Erro 999999 - parâmetros faltantes na chamada")

      }
    
      
      try{
      
        if (gRecaptchaResponse.length===0){
            throw "Erro 131 - erro no Google Recaptcha"
        }
        alert("Token gerado com sucesso")
        
      } catch (error){
        alert("Erro 131 - erro no Google Recaptcha")

      }
    
});
});
});