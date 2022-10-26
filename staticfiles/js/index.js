$(document).ready(function(){
    $(".open").on("click", function(){
        $(".open").hide();
        $(".close").fadeIn();
        $(".menu_inner").slideToggle("slow");
        // $(".menu_wrapper").slideToggle("width", "30%");
        $(".menu_wrapper").css("width", "35%");
        $(".right_content").css("width", "100%");
        
    } )
})



$(document).ready(function(){
    $(".close").on("click", function(){
        $(".close").hide();
        $(".open").fadeIn();
        $(".menu_inner").slideToggle("slow");
        $(".menu_wrapper").css("width", "15%");
        $(".right_content").css("width", "85%");

        
    } )
})



$(document).ready(function(){
    $(".contact_box button, .service_text button").on("click", function(){
        $(".contact_forms").slideToggle();
        $(".contact_forms").css('display', 'grid');

        


        
    } )
})


$(document).ready(function(){
    $(".contact_form_sent .form_cancel_icon i").on("click", function(){
        $(".contact_form_sent").slideToggle();


        
    } )
})


$(document).ready(function(){
    $(".contact_forms .form_cancel_icon i").on("click", function(){
        $(".contact_forms").slideToggle();


        
    } )
})


