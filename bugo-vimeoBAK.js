// Bugo Vimeo

// Add Vimeo Player JS
if(!vimeo){
  var vimeo = document.createElement('script');
  vimeo.src = "https://player.vimeo.com/api/player.js";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(vimeo, firstScriptTag);
}

var BugoVimeo = {
  init: function(container){

    this.isOpen = false;
    this.hasVideo = false;

    this.keyCode = Object.freeze({
      'TAB': 9,
      'RETURN': 13,
      'ESC': 27,
      'SPACE': 32,
      'LEFT': 37,
      'UP': 38,
      'RIGHT': 39,
      'DOWN': 40
    });

    this.button = container.querySelector('.vimeo-button');
    this.modal = container.querySelector('.vimeo-modal');
    this.closeButton = this.modal.querySelector('button');
    this.window = this.modal.querySelector('.window');

    console.log(this);

    // Add button event listeners
    if(this.button){
      this.button.addEventListener('click',this.toggleModal.bind(this));
    } else {
      console.error('There needs to be a button with the class .vimeo-button');
    }

    // Add modal event listeners
    if( this.closeButton ){
      this.closeButton.addEventListener('click',this.handleClose.bind(this));
    } else {
      console.error('There needs to be a div with the class .vimeo-modal');
    }
  },

  handleClose: function(event){
    this.close();
  },

  toggleModal: function( event ) {
    if ( this.isOpen ) {
      this.close();
    } else {
      this.open();
    }
    console.log(this);
  },

  getVideo: function(id){

  },

  open: function(){
    this.isOpen = true;
    this.modal.classList.add('open');
  },

  close: function(){
    this.isOpen = false;
    this.modal.classList.remove('open');
  }
}

document.addEventListener("DOMContentLoaded", function(){
  console.log('running thumbnails');
  var thumbnails = document.getElementsByClassName('vimeo-thumbnail');
  for(i=0;i<thumbnails.length;i++){
    console.log(thumbnails[i]);
    document[thumbnails[i].id] = Object.create(BugoVimeo);
    document[thumbnails[i].id].init(thumbnails[i]);
  }
});