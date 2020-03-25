$('p').animate({
    marginLeft: '50px'
}, 3000)
.queue(function(){
    //alert('Bonjour !');
    $(this).dequeue();
    })
.animate({
    marginLeft: '0px'
}, 3000);
