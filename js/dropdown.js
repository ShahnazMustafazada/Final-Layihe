
$(function () {
  $(".dropdown-li").mouseenter(function (e) {
    let element = this.firstElementChild.nextElementSibling;
    $(element).fadeToggle(60);
    // $(".dropdown-li").mouseleave(function(){
    //   $('.dropdown-li').stop();
    // });
    e.stopPropogation();
  });

  $(".dropdown-li").mouseleave(function () { 
    let element = this.firstElementChild.nextElementSibling;
    $(element).fadeToggle(10);
    

    e.stopPropogation();
  });
});

