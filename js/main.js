$(document).ready(function(){
    
// Fade in Project Names
    $(".tile").mouseenter(function(){
        $(this).find('p').fadeIn("slow");
    $(".tile").mouseleave(function(){
        $(this).find('p').fadeOut("fast"); 
        })
    }); 
    
// Make the SplashPage DownArrow pulsate!
        $( function() {
            var t = 1000;
            setInterval( function(){
                $('#downarrow').fadeOut( t, function(){ $(this).fadeIn( t ); } );
            }, 2*t);
        });

    
    
// Highlight menu items when scrolled to that item
    
            var scroll_pos = 0;
            $(document).scroll(function() { 
                
                scroll_pos = $(document).scrollTop();
                
                if(scroll_pos > 680 && scroll_pos < 1200) {
                    
                    $("ul>li:nth-child(2)").addClass("prettyGreen"); //ABOUT
                } else {
                    $("ul>li:nth-child(2)").removeClass("prettyGreen");
                }
                
                if (scroll_pos >680) {
                    $("ul>li:nth-child(1)").fadeIn("slow"); //LOGO FADEIN
                } else {
                    $("ul>li:nth-child(1)").fadeOut("slow");
                }
                
                if(scroll_pos > 1500 && scroll_pos < 2000) { //WORK
                    $("ul>li:nth-child(3)").addClass("prettyGreen");
                } else {
                    $("ul>li:nth-child(3)").removeClass("prettyGreen");
                }
                
                if(scroll_pos > 2900 && scroll_pos < 3500) { //CV
                    $("ul>li:nth-child(4)").addClass("prettyGreen");
                } else {
                    $("ul>li:nth-child(4)").removeClass("prettyGreen");
                }
                
                if(scroll_pos > 3920 && scroll_pos < 4500) { //CONTACT
                    
                    $("ul>li:nth-child(5)").addClass("prettyGreen");
                } else {
                    $("ul>li:nth-child(5)").removeClass("prettyGreen");
                }
                
                if(scroll_pos > 4500) {  //DONT HIGHLIGHT ANYTHING IF GREATER THAN 4000px
                    $("ul>li:nth-child(5)").removeClass("prettyGreen");
                }
                
                
            });
       

    
//SMOOTHSCROLL on nav links
    
    var hashTagActive = "";
        $(".scroll").click(function (event) {
            if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
                event.preventDefault();
                //calculate destination place
                var dest = 0;
                if ($(this.hash).offset().top-200 > $(document).height() - $(window).height()) {
                    dest = $(document).height() - $(window).height();
                } else {
                    dest = $(this.hash).offset().top-100;
                }
                //go to destination
                $('html,body').animate({
                    scrollTop: dest
                }, 1500, 'swing');
                hashTagActive = this.hash;
            }
        });


}); //CLOSER







