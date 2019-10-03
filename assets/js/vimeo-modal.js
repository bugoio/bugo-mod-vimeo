if(!vimeo){
  var vimeo = document.createElement('script');
  vimeo.src = "https://player.vimeo.com/api/player.js";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(vimeo, firstScriptTag);
}

$(document).ready(function(){

  $('.vimeo-link').on('click',function(e){
    e.preventDefault();
      var vimeoid = $(this).attr('data-vimeoid');
      // var target = $(this).attr('data-target');
      var modal = $(this).attr('data-modal');
      console.log(modal);

      var options = {
        id: vimeoid,
        width: 640,
        loop: false,
        autoplay: true
      };

      var iframe = $('.iframe-wrapper')
      var player = new Vimeo.Player(iframe, options);
      console.log(player);
      player.play();
      $('#' + modal).toggleClass('open');

      $('.vimeo-modal').on('click',function(){
        console.log($(this).is('.open'),'clicked');
        if($(this).is('.open')){
          $('.vimeo-modal').removeClass('open');
          player.pause();
        }
      });

      $('.iframe-wrapper').on('click',function(e){
        e.stopPropagation();
      });
  });
});