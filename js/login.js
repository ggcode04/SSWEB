$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

var attempt =3;

$('#form_login').submit( function (e) {

  e.preventDefault();

  if ( $('#i_correo').val() == "admin@gmail.com" && $('#i_contra').val() == "admin123"){
    location.href = "./admin.html";
    return false;
  }else if($('#i_correo').val() == "user@gmail.com" && $('#i_contra').val() == "user123"){
    location.href = "./user.html";
    return false;
  }else{
    attempt --;
    alert("Usted Tiene Disponibles "+attempt+" Intentos");
    if( attempt == 0){
      $('#i_correo').hide();
      $('#i_contra').hide();
      $('#b_enviar').hide();
      $('#t_correo').hide();
      $('#t_contra').hide();
    return false;
    }
  }
});
const admin = admin
const user = costumer

const botonEnviar = document.getElementById('b_enviar')

botonEnviar.value = 'Enviar'