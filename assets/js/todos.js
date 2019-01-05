// Check off Each Todo by Clicking
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
//$('li').click(function(){
//  $(this).toggleClass('completed');

    

//Above we changed 'li' to ul w/ .on() so any new li's added to UL would also have some functionality

    //if li is grey
   /* if ( $(this).css("color") === "rgb(128, 128, 128)") {
        //turn it black
        $(this).css("color", "black");
        $(this).css("text-decoration", "none");
    }
    //else   A CSS Class Could Simplify This Code...
    else{
      //turn it grey
      $(this).css({color: "grey",
       textDecoration: "line-through"
    });
  //Could also combine these styles together in an Obj
     //.css({color: "grey",
     //textDecoration: "line-through"
//Camel-Case Only for Prop Names in Obj no Line Thru });
    }

*/

});

//Click on X to delete Todo
$("ul").on('click', 'span',function(e) {
    $(this).parent().fadeOut(500,function() {
        $(this).remove();
    });
    e.stopPropagation();
    
});

//Pass Event Object Above to Anon F(x) to stop Event Bubbling which might trigger any listeners on Parent elements

$("input[type='text']").keypress(function(e){
    if(event.which === 13){
        //Grabbing New Todo Text from Input
        var todoText = $(this).val();
        //Clear Out Input Field
        $(this).val("");
        //Create a new Li and Add to UL
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$('.fa-plus').click(function(){
    $("input[type='text']").fadeToggle();
});