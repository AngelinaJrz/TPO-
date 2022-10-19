$(document).ready(function(){
    
    // trayendo categorías
    $.ajax({
        url: 'https://beta3.api.climatiq.io/emission-factors/categories',
        type: 'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer TVTJKYKNHMM952G4KQ7BDJPDXPFE'    
        },
        success: function(result){

            // generando cada elemento del desplegable con las categorías
            $.each(result.results, function(index, value) {
                $('#result1').append($('<option>').text(value).attr('value', value));
            });
        },
        error: function (error){
            
        }
    });  

    $("#result1").change(function(){
        
        // trayendo emisiones según categoría
        $.ajax({
            url: "https://beta3.api.climatiq.io/search?region=US&category="+encodeURIComponent($(this).val()),
            type: 'GET',
            contentType: 'application/json',
            headers: {
                'Authorization': 'Bearer TVTJKYKNHMM952G4KQ7BDJPDXPFE'    
            },
            success: function(result){
                // limpiar el div
                $('#result2').text("")

                // recorriendo cada resultado
                $.each(result.results, function(index, value) {
                    var co2 = value.constituent_gases.co2e_total;
                    if (co2){
                        $('#result2').append(value.name+" -> CO2: "+ co2 + "<br />");
                    }                    
                });

            },
            error: function (error){
                console.log("error")
            }
        }); 

    });
}); 