const form = document.getElementById('user_email');
const botton = document.getElementById('forgot-botton');

botton.addEventListener('click', function(){
    if(form.value == ''){
        alert('Por favor ingresa un Correo Electronico');
    }
    else if(form.value == "admin@gmail.com"){
        alert('Te hemos enviado mensaje a tu correo electronico para hacer el restablecimiento de tu contraseña');
    }
    else{
        alert('Ingresa un correo electronico valido')
    }
})