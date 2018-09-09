$(function(){

    $("body").on("mouseenter", ".navitem", function(){
        $(this).css({
            "border-bottom-width": "3px", 
            "border-bottom-color": "black"
        });
        $(this).css({
            "padding-bottom": "7px", 
            "border-bottom-color": "black"
        });
//        $(this).css({"background-color": "black"});

    }).on("mouseleave", ".navitem", function(){

        $(this).css({
            "border-bottom-width": "0px", 
            "border-bottom-color": "#95e098"
        });
        $(this).css({
            "padding-bottom": "10px", 
            "padding-color": "#95e098"
        });

    })
})

