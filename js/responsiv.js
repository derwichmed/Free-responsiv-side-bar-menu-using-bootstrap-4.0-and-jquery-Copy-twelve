$(function (){
   $('.menu_icon').mouseover(function (){
      $(this).find('> p').hide();
      $(this).find('img').css('height',40);
      $(this).find('img').animate({
        marginTop: "20px"
      }, 150);
      
      $('.menu').show();
      $('.menu').animate({
        top: "100%"
      }, 150);
   });
   
   $('.menu_item').mouseover(function (){
      $(this).find('> .sub_menu').show();
      if($(window).width() >= 500){
        $(this).find('> .sub_menu').animate({
            left: "100%"
        }, 150);
      }
      else{
        $(this).find('> .sub_menu').animate({
          left: "0"
        }, 150);
      }
      $(this).find('> .sub_menu .sub_menu_item').animate({
        paddingLeft: "20px"
     }, 250);
   });
   $('.menu_item').mouseout(function (){
        $(this).find('> .sub_menu').hide();
   });
   
   $('.menu').mouseout(function (){
        $(this).hide(); 
   });
   
   // mobile responsiv
   $('.header_sub_menu > div > div:first-child').click(function (){
        $(this).parent().parent().parent().hide();
        $(this).parent().parent().parent().animate({
          left: "100%"
        }, 150);
   });
   
       isMenuHidden = true;
       $('.menu_img_icon').click(function (){
           if(isMenuHidden){
               $('.menu').show();
               $('.menu').animate({
                    top: "100%"
               }, 150);
               isMenuHidden = false;
           }
           else{
               $('.menu').hide();
               isMenuHidden = true;
               $('.menu').animate({
                    top: "150%"
               }, 150);
           }
           
       });
});