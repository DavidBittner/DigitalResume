$(document).ready(function() {
    $("#makePretty").click( function() {
        if( document.getElementById('makePretty').checked ) {
            $("#colors").attr( "href", "colors.css" );
        }else {
            $("#colors").attr( "href", "" );
        }
    });
    
    $("div.accHeader").click( function() {
        if( document.getElementById('makeInteractive').checked ) {
            $(this).parent().children("div.accChild").slideToggle();
        }
    });
    
    $("#makeInteractive").click( function() {
        if( document.getElementById('makeInteractive').checked ) {
            $("div.accChild").slideUp();
        }else{
            $("div.accChild").slideDown();
        }
    });
});