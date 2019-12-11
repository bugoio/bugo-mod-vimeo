import VideoWorker from './video-worker.esm';

export default class BugoVimeoThumb {
  constructor(container){
    console.log(container.getAttribute('data-vimeoid'));
    this.isOpen = false;
    this.hasVideo = false;
    this.isPlaying = false;

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
    this.thumbnail = this.button.querySelector('img');
    this.modal = container.querySelector('.vimeo-modal');
    this.closeButton = this.modal.querySelector('button');
    this.window = this.modal.querySelector('.window');
    this.header = this.modal.querySelector('h2');
    this.summary = this.modal.querySelector('.summary');
    this.iframe = this.window.querySelector('.vimeo-player');
    this.videoUrl = container.getAttribute('data-vimeoid');
    this.player = false;

    this.video = new VideoWorker(this.videoUrl,{
      autoplay: false,
      loop: false,
      startTime: 0,
    });

    console.log(this);

    this.modal.addEventListener('keydown', this.handleKeydown.bind(this));

    // Add button event listeners
    this.button.addEventListener('click',this.toggleModal.bind(this));

    // Close controls
    this.closeButton.addEventListener('click',this.handleClose.bind(this));
    this.modal.addEventListener('click',this.handleClose.bind(this));

    this.initVideo();
  }

  handleKeydown( event ) {
    let flag = false;
    console.log(event.keyCode);

    switch (event.keyCode) {
      case this.keyCode.SPACE:
      case this.keyCode.RETURN:
        flag = true;
        this.togglePlay();
        break;

      case this.keyCode.LEFT:
      case this.keyCode.DOWN:
        flag = true;
        console.log('go to summary');
        break;

      case this.keyCode.ESC:
        flag = true;
        console.log('close window');
        this.close();
        break;
      default:
        flag = true;
        break;
    }
    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  handleClose(event){
    this.close();
  }

  setVideoThumb(){
    let vid = this.videoId;
  }

  toggleModal( event ) {
    if ( this.isOpen ) {
      this.close();
    } else {
      this.open();
    }
    console.log(this);
  }

  initVideo(id){
    if (this.video.isValid()) {
      // retrieve iframe/video dom element.
      this.video.getVideo((video) => {
          const $parent = video.parentNode;

          // insert video in the body.
          this.window.prepend (video);

          // remove temporary parent video element (created by VideoWorker).
          $parent.parentNode.removeChild($parent);
          this.video.getMeta((meta) => {
            console.log(meta);
            this.thumbnail.src = meta.videoImage;
            this.header.append(meta.title);
            this.summary.append(meta.description);
            this.button.setAttribute('aria-label',"Play "+meta.title);
            this.player = this.window.querySelector('iframe');
            this.player.setAttribute('role','presentation');
            this.initPlayer();
          });
        });
    }
  }

  initPlayer(player){
    let self = this;
    this.video.on('play', (event) => {
      this.isPlaying = true;
      console.log('play',this,player);
    });

    this.video.on('stop', (event) => {
      this.isPlaying = false;
    });

    this.video.on('pause', (event) => {
      this.isPlaying = false;
    });
  }

  togglePlay() {
    console.log('playing?',this.isPlaying);
    if(this.isPlaying){
      this.video.pause();
    } else {
      this.video.play();
    }
  }

  open(){
    this.isOpen = true;
    this.modal.classList.add('open');
    this.modal.focus();
  }

  close(){
    this.isOpen = false;
    this.video.pause();
    this.modal.classList.remove('open');
    this.button.focus();
  }
}
