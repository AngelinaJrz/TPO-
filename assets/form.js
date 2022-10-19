$(document).ready(function(){

    $("#basic-form").validate({
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        messages : {
            fname: {
                minlength: "Debe tener al menos 3 caracteres",
                maxlength: "No debe ingresar más de 30 caracteres",
                required: "Complete este campo"
            },
            lname: {
                minlength: "Debe tener al menos 3 caracteres",
                maxlength: "No debe ingresar más de 30 caracteres",
                required: "Complete este campo"

            },
            email: {
                email: "El email no es válido",
                required: "Complete este campo"

            },
            subject: {
                maxlength: "No debe ingresar más de 50 caracteres",
                required: "Complete este campo"
            }
        }
    });

    $( "#enviar" ).click(function( event ) {

        if ($("#basic-form").valid()){            
            console.log("CORREO ENVIADO PAPAAA");
            $('#mensaje-enviado').show();
            $("#basic-form")[0].reset();
            
        }else{
            console.log("INVÁLIDO!!!");  
        }
        
      });

}); 