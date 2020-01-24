var BugoVimeoButton = {
  init: function(button,parent){
    this.el = button;
    this.parent = parent;
  },

  handleClick: function(event){
    parent.toggleModal();
  }
}