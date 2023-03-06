$('#s_empresa').html("Soluciones SS");

$('#s_empresa').html("Soluciones SS");

$('#business').hide();
$('#business2').hide();
$('#empresa').click(function(){
    $('#slider').hide();
    $('#business').show();
    $('#business2').show();
});

const add = document.getElementById('add');

add.addEventListener('click', () => {
    alert('Hola!')
})