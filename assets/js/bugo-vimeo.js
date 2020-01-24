/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/es6/bugo-vimeo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/es6/bugo-vimeo-thumbnail.js":
/*!*****************************************!*\
  !*** ./src/es6/bugo-vimeo-thumbnail.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BugoVimeoThumb; });\n/* harmony import */ var _video_worker_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-worker.esm */ \"./src/es6/video-worker.esm.js\");\n\nclass BugoVimeoThumb {\n  constructor(container) {\n    console.log(container.getAttribute('data-vimeoid'));\n    this.isOpen = false;\n    this.hasVideo = false;\n    this.isPlaying = false;\n    this.keyCode = Object.freeze({\n      'TAB': 9,\n      'RETURN': 13,\n      'ESC': 27,\n      'SPACE': 32,\n      'LEFT': 37,\n      'UP': 38,\n      'RIGHT': 39,\n      'DOWN': 40\n    });\n    this.button = container.querySelector('.vimeo-button');\n    this.thumbnail = this.button.querySelector('img');\n    this.modal = container.querySelector('.vimeo-modal');\n    this.closeButton = this.modal.querySelector('button');\n    this.window = this.modal.querySelector('.window');\n    this.header = this.modal.querySelector('h2');\n    this.summary = this.modal.querySelector('.summary');\n    this.iframe = this.window.querySelector('.vimeo-player');\n    this.videoUrl = container.getAttribute('data-vimeoid');\n    this.player = false;\n    this.video = new _video_worker_esm__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.videoUrl, {\n      autoplay: false,\n      loop: false,\n      startTime: 0\n    });\n    console.log(this);\n    this.modal.addEventListener('keydown', this.handleKeydown.bind(this)); // Add button event listeners\n\n    this.button.addEventListener('click', this.toggleModal.bind(this)); // Close controls\n\n    this.closeButton.addEventListener('click', this.handleClose.bind(this));\n    this.modal.addEventListener('click', this.handleClose.bind(this));\n    this.initVideo();\n  }\n\n  handleKeydown(event) {\n    let flag = false;\n    console.log(event.keyCode);\n\n    switch (event.keyCode) {\n      case this.keyCode.SPACE:\n      case this.keyCode.RETURN:\n        flag = true;\n        this.togglePlay();\n        break;\n\n      case this.keyCode.LEFT:\n      case this.keyCode.DOWN:\n        flag = true;\n        console.log('go to summary');\n        break;\n\n      case this.keyCode.ESC:\n        flag = true;\n        console.log('close window');\n        this.close();\n        break;\n\n      default:\n        flag = true;\n        break;\n    }\n\n    if (flag) {\n      event.stopPropagation();\n      event.preventDefault();\n    }\n  }\n\n  handleClose(event) {\n    this.close();\n  }\n\n  setVideoThumb() {\n    let vid = this.videoId;\n  }\n\n  toggleModal(event) {\n    if (this.isOpen) {\n      this.close();\n    } else {\n      this.open();\n    }\n\n    console.log(this);\n  }\n\n  initVideo(id) {\n    if (this.video.isValid()) {\n      // retrieve iframe/video dom element.\n      this.video.getVideo(video => {\n        const $parent = video.parentNode; // insert video in the body.\n\n        this.window.prepend(video); // remove temporary parent video element (created by VideoWorker).\n\n        $parent.parentNode.removeChild($parent);\n        this.video.getMeta(meta => {\n          console.log(meta);\n          this.thumbnail.src = meta.videoImage;\n          this.header.append(meta.title);\n          this.summary.append(meta.description);\n          this.button.setAttribute('aria-label', \"Play \" + meta.title);\n          this.player = this.window.querySelector('iframe');\n          this.player.setAttribute('role', 'presentation');\n          this.initPlayer();\n        });\n      });\n    }\n  }\n\n  initPlayer(player) {\n    let self = this;\n    this.video.on('play', event => {\n      this.isPlaying = true;\n      console.log('play', this, player);\n    });\n    this.video.on('stop', event => {\n      this.isPlaying = false;\n    });\n    this.video.on('pause', event => {\n      this.isPlaying = false;\n    });\n  }\n\n  togglePlay() {\n    console.log('playing?', this.isPlaying);\n\n    if (this.isPlaying) {\n      this.video.pause();\n    } else {\n      this.video.play();\n    }\n  }\n\n  open() {\n    this.isOpen = true;\n    this.modal.classList.add('open');\n    this.modal.focus();\n  }\n\n  close() {\n    this.isOpen = false;\n    this.video.pause();\n    this.modal.classList.remove('open');\n    this.button.focus();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/es6/bugo-vimeo-thumbnail.js?");

/***/ }),

/***/ "./src/es6/bugo-vimeo.js":
/*!*******************************!*\
  !*** ./src/es6/bugo-vimeo.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bugo_vimeo_thumbnail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bugo-vimeo-thumbnail.js */ \"./src/es6/bugo-vimeo-thumbnail.js\");\n/**\n * Bugo Vimeo\n * Add a Vimeo thumbnail and video modal\n */\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var thumbnails = document.getElementsByClassName('vimeo-thumbnail');\n\n  for (let i = 0; i < thumbnails.length; i++) {\n    console.log(thumbnails[i]);\n    document[thumbnails[i].id] = new _bugo_vimeo_thumbnail_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](thumbnails[i]);\n  }\n});\n\n//# sourceURL=webpack:///./src/es6/bugo-vimeo.js?");

/***/ }),

/***/ "./src/es6/video-worker.esm.js":
/*!*************************************!*\
  !*** ./src/es6/video-worker.esm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VideoWorker; });\n// Deferred\n// thanks http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery\nfunction Deferred() {\n  this._done = [];\n  this._fail = [];\n}\n\nDeferred.prototype = {\n  execute(list, args) {\n    let i = list.length;\n    args = Array.prototype.slice.call(args);\n\n    while (i--) {\n      list[i].apply(null, args);\n    }\n  },\n\n  resolve() {\n    this.execute(this._done, arguments);\n  },\n\n  reject() {\n    this.execute(this._fail, arguments);\n  },\n\n  done(callback) {\n    this._done.push(callback);\n  },\n\n  fail(callback) {\n    this._fail.push(callback);\n  }\n\n};\nlet ID = 0;\nlet YoutubeAPIadded = 0;\nlet VimeoAPIadded = 0;\nlet loadingYoutubePlayer = 0;\nlet loadingVimeoPlayer = 0;\nlet YoutubeAPIKey = \"AIzaSyCi39rVv5F9bMLY4LU-ghEcp0zLwAzrQlo\";\nconst loadingYoutubeDefer = new Deferred();\nconst loadingVimeoDefer = new Deferred();\nclass VideoWorker {\n  constructor(url, options) {\n    const self = this;\n    self.url = url;\n    self.YoutubeAPIKey = YoutubeAPIKey;\n    self.options_default = {\n      autoplay: false,\n      loop: false,\n      mute: false,\n      volume: 100,\n      showContols: true,\n      // start / end video time in seconds\n      startTime: 0,\n      endTime: 0\n    };\n    self.options = self.extend({}, self.options_default, options); // check URL\n\n    self.videoID = self.parseURL(url); // init\n\n    if (self.videoID) {\n      self.ID = ID++;\n      self.loadAPI();\n      self.init();\n    }\n  } // Extend like jQuery.extend\n\n\n  extend(out) {\n    out = out || {};\n    Object.keys(arguments).forEach(i => {\n      if (!arguments[i]) {\n        return;\n      }\n\n      Object.keys(arguments[i]).forEach(key => {\n        out[key] = arguments[i][key];\n      });\n    });\n    return out;\n  }\n\n  parseURL(url) {\n    // parse youtube ID\n    function getYoutubeID(ytUrl) {\n      // eslint-disable-next-line no-useless-escape\n      const regExp = /.*(?:youtu.be\\/|v\\/|u\\/\\w\\/|embed\\/|watch\\?v=)([^#\\&\\?]*).*/;\n      const match = ytUrl.match(regExp);\n      return match && match[1].length === 11 ? match[1] : false;\n    } // parse vimeo ID\n\n\n    function getVimeoID(vmUrl) {\n      // eslint-disable-next-line no-useless-escape\n      const regExp = /https?:\\/\\/(?:www\\.|player\\.)?vimeo.com\\/(?:channels\\/(?:\\w+\\/)?|groups\\/([^\\/]*)\\/videos\\/|album\\/(\\d+)\\/video\\/|video\\/|)(\\d+)(?:$|\\/|\\?)/;\n      const match = vmUrl.match(regExp);\n      return match && match[3] ? match[3] : false;\n    } // parse local string\n\n\n    function getLocalVideos(locUrl) {\n      // eslint-disable-next-line no-useless-escape\n      const videoFormats = locUrl.split(/,(?=mp4\\:|webm\\:|ogv\\:|ogg\\:)/);\n      const result = {};\n      let ready = 0;\n      videoFormats.forEach(val => {\n        // eslint-disable-next-line no-useless-escape\n        const match = val.match(/^(mp4|webm|ogv|ogg)\\:(.*)/);\n\n        if (match && match[1] && match[2]) {\n          // eslint-disable-next-line prefer-destructuring\n          result[match[1] === 'ogv' ? 'ogg' : match[1]] = match[2];\n          ready = 1;\n        }\n      });\n      return ready ? result : false;\n    }\n\n    const Youtube = getYoutubeID(url);\n    const Vimeo = getVimeoID(url);\n    const Local = getLocalVideos(url);\n\n    if (Youtube) {\n      this.type = 'youtube';\n      return Youtube;\n    } else if (Vimeo) {\n      this.type = 'vimeo';\n      return Vimeo;\n    } else if (Local) {\n      this.type = 'local';\n      return Local;\n    }\n\n    return false;\n  }\n\n  isValid() {\n    return !!this.videoID;\n  } // events\n\n\n  on(name, callback) {\n    this.userEventsList = this.userEventsList || []; // add new callback in events list\n\n    (this.userEventsList[name] || (this.userEventsList[name] = [])).push(callback);\n  }\n\n  off(name, callback) {\n    if (!this.userEventsList || !this.userEventsList[name]) {\n      return;\n    }\n\n    if (!callback) {\n      delete this.userEventsList[name];\n    } else {\n      this.userEventsList[name].forEach((val, key) => {\n        if (val === callback) {\n          this.userEventsList[name][key] = false;\n        }\n      });\n    }\n  }\n\n  fire(name) {\n    const args = [].slice.call(arguments, 1);\n\n    if (this.userEventsList && typeof this.userEventsList[name] !== 'undefined') {\n      this.userEventsList[name].forEach(val => {\n        // call with all arguments\n        if (val) {\n          val.apply(this, args);\n        }\n      });\n    }\n  }\n\n  play(start) {\n    const self = this;\n\n    if (!self.player) {\n      return;\n    }\n\n    if (self.type === 'youtube' && self.player.playVideo) {\n      if (typeof start !== 'undefined') {\n        self.player.seekTo(start || 0);\n      }\n\n      if (YT.PlayerState.PLAYING !== self.player.getPlayerState()) {\n        self.player.playVideo();\n      }\n    }\n\n    if (self.type === 'vimeo') {\n      if (typeof start !== 'undefined') {\n        self.player.setCurrentTime(start);\n      }\n\n      self.player.getPaused().then(paused => {\n        if (paused) {\n          self.player.play();\n        }\n      });\n    }\n\n    if (self.type === 'local') {\n      if (typeof start !== 'undefined') {\n        self.player.currentTime = start;\n      }\n\n      if (self.player.paused) {\n        self.player.play();\n      }\n    }\n  }\n\n  pause() {\n    const self = this;\n\n    if (!self.player) {\n      return;\n    }\n\n    if (self.type === 'youtube' && self.player.pauseVideo) {\n      if (YT.PlayerState.PLAYING === self.player.getPlayerState()) {\n        self.player.pauseVideo();\n      }\n    }\n\n    if (self.type === 'vimeo') {\n      self.player.getPaused().then(paused => {\n        if (!paused) {\n          self.player.pause();\n        }\n      });\n    }\n\n    if (self.type === 'local') {\n      if (!self.player.paused) {\n        self.player.pause();\n      }\n    }\n  }\n\n  mute() {\n    const self = this;\n\n    if (!self.player) {\n      return;\n    }\n\n    if (self.type === 'youtube' && self.player.mute) {\n      self.player.mute();\n    }\n\n    if (self.type === 'vimeo' && self.player.setVolume) {\n      self.player.setVolume(0);\n    }\n\n    if (self.type === 'local') {\n      self.$video.muted = true;\n    }\n  }\n\n  unmute() {\n    const self = this;\n\n    if (!self.player) {\n      return;\n    }\n\n    if (self.type === 'youtube' && self.player.mute) {\n      self.player.unMute();\n    }\n\n    if (self.type === 'vimeo' && self.player.setVolume) {\n      self.player.setVolume(self.options.volume);\n    }\n\n    if (self.type === 'local') {\n      self.$video.muted = false;\n    }\n  }\n\n  setVolume(volume = false) {\n    const self = this;\n\n    if (!self.player || !volume) {\n      return;\n    }\n\n    if (self.type === 'youtube' && self.player.setVolume) {\n      self.player.setVolume(volume);\n    }\n\n    if (self.type === 'vimeo' && self.player.setVolume) {\n      self.player.setVolume(volume);\n    }\n\n    if (self.type === 'local') {\n      self.$video.volume = volume / 100;\n    }\n  }\n\n  getVolume(callback) {\n    const self = this;\n\n    if (!self.player) {\n      callback(false);\n      return;\n    }\n\n    if (self.type === 'youtube' && self.player.getVolume) {\n      callback(self.player.getVolume());\n    }\n\n    if (self.type === 'vimeo' && self.player.getVolume) {\n      self.player.getVolume().then(volume => {\n        callback(volume);\n      });\n    }\n\n    if (self.type === 'local') {\n      callback(self.$video.volume * 100);\n    }\n  }\n\n  getMuted(callback) {\n    const self = this;\n\n    if (!self.player) {\n      callback(null);\n      return;\n    }\n\n    if (self.type === 'youtube' && self.player.isMuted) {\n      callback(self.player.isMuted());\n    }\n\n    if (self.type === 'vimeo' && self.player.getVolume) {\n      self.player.getVolume().then(volume => {\n        callback(!!volume);\n      });\n    }\n\n    if (self.type === 'local') {\n      callback(self.$video.muted);\n    }\n  }\n\n  getImageURL(callback) {\n    const self = this;\n\n    if (self.videoImage) {\n      callback(self.videoImage);\n      return;\n    }\n\n    if (self.type === 'youtube') {\n      const availableSizes = ['maxresdefault', 'sddefault', 'hqdefault', '0'];\n      let step = 0;\n      const tempImg = new Image();\n\n      tempImg.onload = function () {\n        // if no thumbnail, youtube add their own image with width = 120px\n        if ((this.naturalWidth || this.width) !== 120 || step === availableSizes.length - 1) {\n          // ok\n          self.videoImage = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;\n          callback(self.videoImage);\n        } else {\n          // try another size\n          step++;\n          this.src = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;\n        }\n      };\n\n      tempImg.src = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;\n    }\n\n    if (self.type === 'vimeo') {\n      let request = new XMLHttpRequest();\n      request.open('GET', `https://vimeo.com/api/v2/video/${self.videoID}.json`, true);\n\n      request.onreadystatechange = function () {\n        if (this.readyState === 4) {\n          if (this.status >= 200 && this.status < 400) {\n            // Success!\n            const response = JSON.parse(this.responseText);\n            self.videoImage = response[0].thumbnail_large;\n            callback(self.videoImage);\n          } else {// Error :(\n          }\n        }\n      };\n\n      request.send();\n      request = null;\n    }\n  }\n\n  getMeta(callback) {\n    const self = this;\n\n    if (self.meta) {\n      callback(self.meta);\n      return;\n    }\n\n    self.meta = {};\n\n    if (self.type === 'youtube') {\n      let request = new XMLHttpRequest();\n      request.open('GET', `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${self.videoID}&key=${self.YoutubeAPIKey}`, true);\n\n      request.onreadystatechange = function () {\n        if (this.readyState === 4) {\n          if (this.status >= 200 && this.status < 400) {\n            // Success!\n            const response = JSON.parse(this.responseText).items[0].snippet;\n            console.log(response);\n            self.meta.videoImage = response.thumbnails.standard.url;\n            self.meta.title = response.title;\n            self.meta.description = response.description;\n            callback(self.meta);\n          } else {// Error :(\n          }\n        }\n      };\n\n      request.send();\n      request = null;\n    }\n\n    if (self.type === 'vimeo') {\n      let request = new XMLHttpRequest();\n      request.open('GET', `https://vimeo.com/api/v2/video/${self.videoID}.json`, true);\n\n      request.onreadystatechange = function () {\n        if (this.readyState === 4) {\n          if (this.status >= 200 && this.status < 400) {\n            // Success!\n            const response = JSON.parse(this.responseText);\n            console.log(response);\n            self.meta.videoImage = response[0].thumbnail_large;\n            self.meta.title = response[0].title;\n            self.meta.description = response[0].description;\n            callback(self.meta);\n          } else {// Error :(\n          }\n        }\n      };\n\n      request.send();\n      request = null;\n    }\n  } // fallback to the old version.\n\n\n  getIframe(callback) {\n    this.getVideo(callback);\n  }\n\n  getVideo(callback) {\n    const self = this; // return generated video block\n\n    if (self.$video) {\n      callback(self.$video);\n      return;\n    } // generate new video block\n\n\n    self.onAPIready(() => {\n      let hiddenDiv;\n\n      if (!self.$video) {\n        hiddenDiv = document.createElement('div');\n        hiddenDiv.style.display = 'none';\n      } // Youtube\n\n\n      if (self.type === 'youtube') {\n        self.playerOptions = {};\n        self.playerOptions.videoId = self.videoID;\n        self.playerOptions.playerVars = {\n          autohide: 1,\n          rel: 0,\n          autoplay: 0,\n          // autoplay enable on mobile devices\n          playsinline: 1\n        }; // hide controls\n\n        if (!self.options.showContols) {\n          self.playerOptions.playerVars.iv_load_policy = 3;\n          self.playerOptions.playerVars.modestbranding = 1;\n          self.playerOptions.playerVars.controls = 0;\n          self.playerOptions.playerVars.showinfo = 0;\n          self.playerOptions.playerVars.disablekb = 1;\n        } // events\n\n\n        let ytStarted;\n        let ytProgressInterval;\n        self.playerOptions.events = {\n          onReady(e) {\n            // mute\n            if (self.options.mute) {\n              e.target.mute();\n            } else if (self.options.volume) {\n              e.target.setVolume(self.options.volume);\n            } // autoplay\n\n\n            if (self.options.autoplay) {\n              self.play(self.options.startTime);\n            }\n\n            self.fire('ready', e); // For seamless loops, set the endTime to 0.1 seconds less than the video's duration\n            // https://github.com/nk-o/video-worker/issues/2\n\n            if (self.options.loop && !self.options.endTime) {\n              const secondsOffset = 0.1;\n              self.options.endTime = self.player.getDuration() - secondsOffset;\n            } // volumechange\n\n\n            setInterval(() => {\n              self.getVolume(volume => {\n                if (self.options.volume !== volume) {\n                  self.options.volume = volume;\n                  self.fire('volumechange', e);\n                }\n              });\n            }, 150);\n          },\n\n          onStateChange(e) {\n            // loop\n            if (self.options.loop && e.data === YT.PlayerState.ENDED) {\n              self.play(self.options.startTime);\n            }\n\n            if (!ytStarted && e.data === YT.PlayerState.PLAYING) {\n              ytStarted = 1;\n              self.fire('started', e);\n            }\n\n            if (e.data === YT.PlayerState.PLAYING) {\n              self.fire('play', e);\n            }\n\n            if (e.data === YT.PlayerState.PAUSED) {\n              self.fire('pause', e);\n            }\n\n            if (e.data === YT.PlayerState.ENDED) {\n              self.fire('ended', e);\n            } // progress check\n\n\n            if (e.data === YT.PlayerState.PLAYING) {\n              ytProgressInterval = setInterval(() => {\n                self.fire('timeupdate', e); // check for end of video and play again or stop\n\n                if (self.options.endTime && self.player.getCurrentTime() >= self.options.endTime) {\n                  if (self.options.loop) {\n                    self.play(self.options.startTime);\n                  } else {\n                    self.pause();\n                  }\n                }\n              }, 150);\n            } else {\n              clearInterval(ytProgressInterval);\n            }\n          }\n\n        };\n        const firstInit = !self.$video;\n\n        if (firstInit) {\n          const div = document.createElement('div');\n          div.setAttribute('id', self.playerID);\n          hiddenDiv.appendChild(div);\n          document.body.appendChild(hiddenDiv);\n        }\n\n        self.player = self.player || new window.YT.Player(self.playerID, self.playerOptions);\n\n        if (firstInit) {\n          self.$video = document.getElementById(self.playerID); // get video width and height\n\n          self.videoWidth = parseInt(self.$video.getAttribute('width'), 10) || 1280;\n          self.videoHeight = parseInt(self.$video.getAttribute('height'), 10) || 720;\n        }\n      } // Vimeo\n\n\n      if (self.type === 'vimeo') {\n        self.playerOptions = {\n          id: self.videoID,\n          autopause: 0,\n          transparent: 0,\n          autoplay: self.options.autoplay ? 1 : 0,\n          loop: self.options.loop ? 1 : 0,\n          muted: self.options.mute ? 1 : 0\n        };\n\n        if (self.options.volume) {\n          self.playerOptions.volume = self.options.volume;\n        } // hide controls\n\n\n        if (!self.options.showContols) {\n          self.playerOptions.badge = 0;\n          self.playerOptions.byline = 0;\n          self.playerOptions.portrait = 0;\n          self.playerOptions.title = 0;\n        }\n\n        if (!self.$video) {\n          let playerOptionsString = '';\n          Object.keys(self.playerOptions).forEach(key => {\n            if (playerOptionsString !== '') {\n              playerOptionsString += '&';\n            }\n\n            playerOptionsString += `${key}=${encodeURIComponent(self.playerOptions[key])}`;\n          }); // we need to create iframe manually because when we create it using API\n          // js events won't triggers after iframe moved to another place\n\n          self.$video = document.createElement('iframe');\n          self.$video.setAttribute('id', self.playerID);\n          self.$video.setAttribute('src', `https://player.vimeo.com/video/${self.videoID}?${playerOptionsString}`);\n          self.$video.setAttribute('frameborder', '0');\n          self.$video.setAttribute('mozallowfullscreen', '');\n          self.$video.setAttribute('allowfullscreen', '');\n          hiddenDiv.appendChild(self.$video);\n          document.body.appendChild(hiddenDiv);\n        }\n\n        self.player = self.player || new Vimeo.Player(self.$video, self.playerOptions); // set current time for autoplay\n\n        if (self.options.startTime && self.options.autoplay) {\n          self.player.setCurrentTime(self.options.startTime);\n        } // get video width and height\n\n\n        self.player.getVideoWidth().then(width => {\n          self.videoWidth = width || 1280;\n        });\n        self.player.getVideoHeight().then(height => {\n          self.videoHeight = height || 720;\n        }); // events\n\n        let vmStarted;\n        self.player.on('timeupdate', e => {\n          if (!vmStarted) {\n            self.fire('started', e);\n            vmStarted = 1;\n          }\n\n          self.fire('timeupdate', e); // check for end of video and play again or stop\n\n          if (self.options.endTime) {\n            if (self.options.endTime && e.seconds >= self.options.endTime) {\n              if (self.options.loop) {\n                self.play(self.options.startTime);\n              } else {\n                self.pause();\n              }\n            }\n          }\n        });\n        self.player.on('play', e => {\n          self.fire('play', e); // check for the start time and start with it\n\n          if (self.options.startTime && e.seconds === 0) {\n            self.play(self.options.startTime);\n          }\n        });\n        self.player.on('pause', e => {\n          self.fire('pause', e);\n        });\n        self.player.on('ended', e => {\n          self.fire('ended', e);\n        });\n        self.player.on('loaded', e => {\n          self.fire('ready', e);\n        });\n        self.player.on('volumechange', e => {\n          self.fire('volumechange', e);\n        });\n      } // Local\n\n\n      function addSourceToLocal(element, src, type) {\n        const source = document.createElement('source');\n        source.src = src;\n        source.type = type;\n        element.appendChild(source);\n      }\n\n      if (self.type === 'local') {\n        if (!self.$video) {\n          self.$video = document.createElement('video'); // show controls\n\n          if (self.options.showContols) {\n            self.$video.controls = true;\n          } // mute\n\n\n          if (self.options.mute) {\n            self.$video.muted = true;\n          } else if (self.$video.volume) {\n            self.$video.volume = self.options.volume / 100;\n          } // loop\n\n\n          if (self.options.loop) {\n            self.$video.loop = true;\n          } // autoplay enable on mobile devices\n\n\n          self.$video.setAttribute('playsinline', '');\n          self.$video.setAttribute('webkit-playsinline', '');\n          self.$video.setAttribute('id', self.playerID);\n          hiddenDiv.appendChild(self.$video);\n          document.body.appendChild(hiddenDiv);\n          Object.keys(self.videoID).forEach(key => {\n            addSourceToLocal(self.$video, self.videoID[key], `video/${key}`);\n          });\n        }\n\n        self.player = self.player || self.$video;\n        let locStarted;\n        self.player.addEventListener('playing', e => {\n          if (!locStarted) {\n            self.fire('started', e);\n          }\n\n          locStarted = 1;\n        });\n        self.player.addEventListener('timeupdate', function (e) {\n          self.fire('timeupdate', e); // check for end of video and play again or stop\n\n          if (self.options.endTime) {\n            if (self.options.endTime && this.currentTime >= self.options.endTime) {\n              if (self.options.loop) {\n                self.play(self.options.startTime);\n              } else {\n                self.pause();\n              }\n            }\n          }\n        });\n        self.player.addEventListener('play', e => {\n          self.fire('play', e);\n        });\n        self.player.addEventListener('pause', e => {\n          self.fire('pause', e);\n        });\n        self.player.addEventListener('ended', e => {\n          self.fire('ended', e);\n        });\n        self.player.addEventListener('loadedmetadata', function () {\n          // get video width and height\n          self.videoWidth = this.videoWidth || 1280;\n          self.videoHeight = this.videoHeight || 720;\n          self.fire('ready'); // autoplay\n\n          if (self.options.autoplay) {\n            self.play(self.options.startTime);\n          }\n        });\n        self.player.addEventListener('volumechange', e => {\n          self.getVolume(volume => {\n            self.options.volume = volume;\n          });\n          self.fire('volumechange', e);\n        });\n      }\n\n      callback(self.$video);\n    });\n  }\n\n  init() {\n    const self = this;\n    self.playerID = `VideoWorker-${self.ID}`;\n  }\n\n  loadAPI() {\n    const self = this;\n\n    if (YoutubeAPIadded && VimeoAPIadded) {\n      return;\n    }\n\n    let src = ''; // load Youtube API\n\n    if (self.type === 'youtube' && !YoutubeAPIadded) {\n      YoutubeAPIadded = 1;\n      src = 'https://www.youtube.com/iframe_api';\n    } // load Vimeo API\n\n\n    if (self.type === 'vimeo' && !VimeoAPIadded) {\n      VimeoAPIadded = 1;\n      src = 'https://player.vimeo.com/api/player.js';\n    }\n\n    if (!src) {\n      return;\n    } // add script in head section\n\n\n    let tag = document.createElement('script');\n    let head = document.getElementsByTagName('head')[0];\n    tag.src = src;\n    head.appendChild(tag);\n    head = null;\n    tag = null;\n  }\n\n  onAPIready(callback) {\n    const self = this; // Youtube\n\n    if (self.type === 'youtube') {\n      // Listen for global YT player callback\n      if ((typeof YT === 'undefined' || YT.loaded === 0) && !loadingYoutubePlayer) {\n        // Prevents Ready event from being called twice\n        loadingYoutubePlayer = 1; // Creates deferred so, other players know when to wait.\n\n        window.onYouTubeIframeAPIReady = function () {\n          window.onYouTubeIframeAPIReady = null;\n          loadingYoutubeDefer.resolve('done');\n          callback();\n        };\n      } else if (typeof YT === 'object' && YT.loaded === 1) {\n        callback();\n      } else {\n        loadingYoutubeDefer.done(() => {\n          callback();\n        });\n      }\n    } // Vimeo\n\n\n    if (self.type === 'vimeo') {\n      if (typeof Vimeo === 'undefined' && !loadingVimeoPlayer) {\n        loadingVimeoPlayer = 1;\n        const vimeoInterval = setInterval(() => {\n          if (typeof Vimeo !== 'undefined') {\n            clearInterval(vimeoInterval);\n            loadingVimeoDefer.resolve('done');\n            callback();\n          }\n        }, 20);\n      } else if (typeof Vimeo !== 'undefined') {\n        callback();\n      } else {\n        loadingVimeoDefer.done(() => {\n          callback();\n        });\n      }\n    } // Local\n\n\n    if (self.type === 'local') {\n      callback();\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/es6/video-worker.esm.js?");

/***/ })

/******/ });