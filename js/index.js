const siteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

function onSubmit(token) {
  document.getElementById("form").submit();
}

function onClick(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', {action: 'validate_captcha'}).then(function(token) {
       console.log(token)
       document.getElementById('g-recaptcha-response').value = token;
    });
  });
}
