$(function(){
$('#btn_send').click(function(e){
    e.preventDefault();
    
    $.ajax({
        url: 'https://formspree.io/igocooper@gmail.com',
        method: 'POST',
        data: { email: $('#email').val()},
        data_type: 'json'
    }).done(function(){
        alert('Thank you!');
    });
}) ;
});