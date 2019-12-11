/**
 * Bugo Vimeo
 * Add a Vimeo thumbnail and video modal
 */

import BugoVimeoThumb from './bugo-vimeo-thumbnail.js';


document.addEventListener("DOMContentLoaded", function(){
  var thumbnails = document.getElementsByClassName('vimeo-thumbnail');
  for(let i=0;i<thumbnails.length;i++){
    console.log(thumbnails[i]);
    document[thumbnails[i].id] = new BugoVimeoThumb(thumbnails[i]);
  }
});