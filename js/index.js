let form = document.querySelector('#register');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let name = document.querySelector('#companyName');
        let email = document.querySelector('#businessEmail');
        if (!name.value || !email.value) {
          alert('Nome e Email são Obrigatorios');
        } else {
          grecaptcha.execute();
        }
      });
      function sendForm() {
        alert('reCAPTCHA funcionou');
      }
