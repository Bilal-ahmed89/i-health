

$(document).ready(function(){

  
    
    $('#moreText').click(function(){
        $('#extraText').animate({
            height: 'toggle'
        });
       
    })
     //------------------------------//
    $('#play').click(function(){
        $('#video').animate({
            height: 'toggle'
        });
    })
     //------------------------------//
    $('#close').click(function(){
        $('#video').animate({
            height : 'hide'
        });
    })   
     //------------------------------//
    $('#close-msg').click(function(){
        $('#confirm-msg').animate({
            height : 'hide'
        });
    });
    //------------------------------//
    // saving in local FUNCTION//

    let persons = [];
    
    $('#booking').on('click', function(){
        
        $('#confirm-msg').animate({
            height: 'toggle'
        });


        let name = $('#name').val();
        let email = $('#email').val();
        let subject = $('#subject').val();
        let message = $('#message').val();
   
        let person = {
           name:name,
           email:email,
           subject:subject,
           message:message
   
        }
         
         localStorage.setItem('appointment', JSON.stringify(person))

        $('#name').val('');
        $('#email').val('');
        $('#subject').val('');
        $('#message').val('');
     })
    
     

    }
   


)




    
