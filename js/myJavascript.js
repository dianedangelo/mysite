$(document).ready(function(){
  
$(function(){
        
         var liUl = $("li ul");
         liUl.hide();
        
         $("span").click(function(){
           liUl.slideUp();
           $(this).next().slideDown();
         });
      
      });
   }