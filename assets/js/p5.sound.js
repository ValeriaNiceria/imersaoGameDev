/** [p5.sound]  Version: 0.3.12 - 2020-01-06 */ 
 /**
 *  <p>p5.sound extends p5 with <a href="http://caniuse.com/audio-api"
 *  target="_blank">Web Audio</a> functionality including audio input,
 *  playback, analysis and synthesis.
 *  </p>
 *  <ul>
 *  <li><a href="#/p5.SoundFile"><b>p5.SoundFile</b></a>: Load and play sound files.</li>
 *  <li><a href="#/p5.Amplitude"><b>p5.Amplitude</b></a>: Get the current volume of a sound.</li>
 *  <li><a href="#/p5.AudioIn"><b>p5.AudioIn</b></a>: Get sound from an input source, typically
 *    a computer microphone.</li>
 *  <li><a href="#/p5.FFT"><b>p5.FFT</b></a>: Analyze the frequency of sound. Returns
 *    results from the frequency spectrum or time domain (waveform).</li>
 *  <li><a href="#/p5.Oscillator"><b>p5.Oscillator</b></a>: Generate Sine,
 *    Triangle, Square and Sawtooth waveforms. Base class of
 *    <li><a href="#/p5.Noise">p5.Noise</a> and <a href="#/p5.Pulse">p5.Pulse</a>.
 *    </li>
 *  <li>
 *    <a href="#/p5.MonoSynth">p5.MonoSynth</a> and <a href="#/p5.PolySynth">p5.PolySynth</a>: Play musical notes
 *  </li>
 *  <li><a href="#/p5.Envelope"><b>p5.Envelope</b></a>: An Envelope is a series
 *    of fades over time. Often used to control an object's
 *    output gain level as an "ADSR Envelope" (Attack, Decay,
 *    Sustain, Release). Can also modulate other parameters.</li>
 *  <li><a href="#/p5.Delay"><b>p5.Delay</b></a>: A delay effect with
 *    parameters for feedback, delayTime, and lowpass filter.</li>
 *  <li><a href="#/p5.Filter"><b>p5.Filter</b></a>: Filter the frequency range of a
 *    sound.
 *  </li>
 *  <li><a href="#/p5.Reverb"><b>p5.Reverb</b></a>: Add reverb to a sound by specifying
 *    duration and decay. </li>
 *  <b><li><a href="#/p5.Convolver">p5.Convolver</a>:</b> Extends
 *  <a href="#/p5.Reverb">p5.Reverb</a> to simulate the sound of real
 *    physical spaces through convolution.</li>
 *  <b><li><a href="#/p5.SoundRecorder">p5.SoundRecorder</a></b>: Record sound for playback
 *    / save the .wav file.
 *  <b><li><a href="#/p5.SoundLoop">p5.SoundLoop</a>, <a href="#/p5.Phrase">p5.Phrase</a></b>, <b><a href="#/p5.Part">p5.Part</a></b> and
 *  <b><a href="#/p5.Score">p5.Score</a></b>: Compose musical sequences.
 *  </li>
 *  <li><a href="#/p5/userStartAudio">userStartAudio</a>: Enable audio in a
 *  browser- and user-friendly way.</a>
 *  <p>p5.sound is on <a href="https://github.com/therewasaguy/p5.sound/">GitHub</a>.
 *  Download the latest version
 *  <a href="https://github.com/therewasaguy/p5.sound/blob/master/lib/p5.sound.js">here</a>.</p>
 *
 *  @module p5.sound
 *  @submodule p5.sound
 *  @for p5.sound
 *  @main
 */

/**
 *  p5.sound 
 *  https://p5js.org/reference/#/libraries/p5.sound
 *
 *  From the Processing Foundation and contributors
 *  https://github.com/processing/p5.js-sound/graphs/contributors
 *
 *  MIT License (MIT)
 *  https://github.com/processing/p5.js-sound/blob/master/LICENSE
 *
 *  Some of the many audio libraries & resources that inspire p5.sound:
 *   - TONE.js (c) Yotam Mann. Licensed under The MIT License (MIT). https://github.com/TONEnoTONE/Tone.js
 *   - buzz.js (c) Jay Salvat. Licensed under The MIT License (MIT). http://buzz.jaysalvat.com/
 *   - Boris Smus Web Audio API book, 2013. Licensed under the Apache License http://www.apache.org/licenses/LICENSE-2.0
 *   - wavesurfer.js https://github.com/katspaugh/wavesurfer.js
 *   - Web Audio Components by Jordan Santell https://github.com/web-audio-components
 *   - Wilm Thoben's Sound library for Processing https://github.com/processing/processing/tree/master/java/libraries/sound
 *
 *   Web Audio API: http://w3.org/TR/webaudio/
 */

 (function(modules) { 
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	__webpack_require__.m = modules;
 	__webpack_require__.c = installedModules;
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	__webpack_require__.p = "";
 	return __webpack_require__(__webpack_require__.s = 31);
 })
 ([
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){"use strict";function a(t,e){this.isUndef(t)||1===t?this.input=this.context.createGain():1<t&&(this.input=new Array(t)),this.isUndef(e)||1===e?this.output=this.context.createGain():1<e&&(this.output=new Array(t))}var e;return a.prototype.set=function(t,e,n){if(this.isObject(t))n=e;else if(this.isString(t)){var o={};o[t]=e,t=o}t:for(var i in t){e=t[i];var r=this;if(-1!==i.indexOf(".")){for(var s=i.split("."),u=0;u<s.length-1;u++)if((r=r[s[u]])instanceof a){s.splice(0,u+1);var p=s.join(".");r.set(p,e);continue t}i=s[s.length-1]}var c=r[i];this.isUndef(c)||(a.Signal&&c instanceof a.Signal||a.Param&&c instanceof a.Param?c.value!==e&&(this.isUndef(n)?c.value=e:c.rampTo(e,n)):c instanceof AudioParam?c.value!==e&&(c.value=e):c instanceof a?c.set(e):c!==e&&(r[i]=e))}return this},a.prototype.get=function(t){this.isUndef(t)?t=this._collectDefaults(this.constructor):this.isString(t)&&(t=[t]);for(var e={},n=0;n<t.length;n++){var o=t[n],i=this,r=e;if(-1!==o.indexOf(".")){for(var s=o.split("."),u=0;u<s.length-1;u++){var p=s[u];r[p]=r[p]||{},r=r[p],i=i[p]}o=s[s.length-1]}var c=i[o];this.isObject(t[o])?r[o]=c.get():a.Signal&&c instanceof a.Signal?r[o]=c.value:a.Param&&c instanceof a.Param?r[o]=c.value:c instanceof AudioParam?r[o]=c.value:c instanceof a?r[o]=c.get():this.isFunction(c)||this.isUndef(c)||(r[o]=c)}return e},a.prototype._collectDefaults=function(t){var e=[];if(this.isUndef(t.defaults)||(e=Object.keys(t.defaults)),!this.isUndef(t._super))for(var n=this._collectDefaults(t._super),o=0;o<n.length;o++)-1===e.indexOf(n[o])&&e.push(n[o]);return e},a.prototype.toString=function(){for(var t in a){var e=t[0].match(/^[A-Z]$/),n=a[t]===this.constructor;if(this.isFunction(a[t])&&e&&n)return t}return"Tone"},Object.defineProperty(a.prototype,"numberOfInputs",{get:function(){return this.input?this.isArray(this.input)?this.input.length:1:0}}),Object.defineProperty(a.prototype,"numberOfOutputs",{get:function(){return this.output?this.isArray(this.output)?this.output.length:1:0}}),a.prototype.dispose=function(){return this.isUndef(this.input)||(this.input instanceof AudioNode&&this.input.disconnect(),this.input=null),this.isUndef(this.output)||(this.output instanceof AudioNode&&this.output.disconnect(),this.output=null),this},a.prototype.connect=function(t,e,n){return Array.isArray(this.output)?(e=this.defaultArg(e,0),this.output[e].connect(t,0,n)):this.output.connect(t,e,n),this},a.prototype.disconnect=function(t,e,n){this.isArray(this.output)?this.isNumber(t)?this.output[t].disconnect():(e=this.defaultArg(e,0),this.output[e].disconnect(t,0,n)):this.output.disconnect.apply(this.output,arguments)},a.prototype.connectSeries=function(){if(1<arguments.length)for(var t=arguments[0],e=1;e<arguments.length;e++){var n=arguments[e];t.connect(n),t=n}return this},a.prototype.chain=function(){if(0<arguments.length)for(var t=this,e=0;e<arguments.length;e++){var n=arguments[e];t.connect(n),t=n}return this},a.prototype.fan=function(){if(0<arguments.length)for(var t=0;t<arguments.length;t++)this.connect(arguments[t]);return this},AudioNode.prototype.chain=a.prototype.chain,AudioNode.prototype.fan=a.prototype.fan,a.prototype.defaultArg=function(t,e){if(this.isObject(t)&&this.isObject(e)){var n={};for(var o in t)n[o]=this.defaultArg(e[o],t[o]);for(var i in e)n[i]=this.defaultArg(t[i],e[i]);return n}return this.isUndef(t)?e:t},a.prototype.optionsObject=function(t,e,n){var o={};if(1===t.length&&this.isObject(t[0]))o=t[0];else for(var i=0;i<e.length;i++)o[e[i]]=t[i];return this.isUndef(n)?o:this.defaultArg(o,n)},a.prototype.isUndef=function(t){return void 0===t},a.prototype.isFunction=function(t){return"function"==typeof t},a.prototype.isNumber=function(t){return"number"==typeof t},a.prototype.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)&&t.constructor===Object},a.prototype.isBoolean=function(t){return"boolean"==typeof t},a.prototype.isArray=function(t){return Array.isArray(t)},a.prototype.isString=function(t){return"string"==typeof t},a.noOp=function(){},a.prototype._readOnly=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this._readOnly(t[e]);else Object.defineProperty(this,t,{writable:!1,enumerable:!0})},a.prototype._writable=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this._writable(t[e]);else Object.defineProperty(this,t,{writable:!0})},a.State={Started:"started",Stopped:"stopped",Paused:"paused"},a.prototype.equalPowerScale=function(t){var e=.5*Math.PI;return Math.sin(t*e)},a.prototype.dbToGain=function(t){return Math.pow(2,t/6)},a.prototype.gainToDb=function(t){return Math.log(t)/Math.LN10*20},a.prototype.intervalToFrequencyRatio=function(t){return Math.pow(2,t/12)},a.prototype.now=function(){return a.context.now()},a.now=function(){return a.context.now()},a.extend=function(t,e){function n(){}a.prototype.isUndef(e)&&(e=a),n.prototype=e.prototype,t.prototype=new n,(t.prototype.constructor=t)._super=e},Object.defineProperty(a,"context",{get:function(){return e},set:function(t){e=a.Context&&t instanceof a.Context?t:new a.Context(t),a.Context&&a.Context.emit("init",e)}}),Object.defineProperty(a.prototype,"context",{get:function(){return a.context}}),a.setContext=function(t){a.context=t},Object.defineProperty(a.prototype,"blockTime",{get:function(){return 128/this.context.sampleRate}}),Object.defineProperty(a.prototype,"sampleTime",{get:function(){return 1/this.context.sampleRate}}),Object.defineProperty(a,"supported",{get:function(){var t=window.hasOwnProperty("AudioContext")||window.hasOwnProperty("webkitAudioContext"),e=window.hasOwnProperty("Promise"),n=window.hasOwnProperty("Worker");return t&&e&&n}}),a.version="r10",window.TONE_SILENCE_VERSION_LOGGING||console.log("%c * Tone.js "+a.version+" * ","background: #000; color: #fff"),a}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(17)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (audiocontext) {
  var Master = function Master() {
    this.input = audiocontext.createGain();
    this.output = audiocontext.createGain(); 

    this.limiter = audiocontext.createDynamicsCompressor();
    this.limiter.threshold.value = -3;
    this.limiter.ratio.value = 20;
    this.limiter.knee.value = 1;
    this.audiocontext = audiocontext;
    this.output.disconnect(); 

    this.input.connect(this.limiter); 

    this.limiter.connect(this.output); 

    this.meter = audiocontext.createGain();
    this.fftMeter = audiocontext.createGain();
    this.output.connect(this.meter);
    this.output.connect(this.fftMeter); 

    this.output.connect(this.audiocontext.destination); 

    this.soundArray = []; 

    this.parts = []; 

    this.extensions = [];
  }; 


  var p5sound = new Master();
  /**
   * Returns a number representing the master amplitude (volume) for sound
   * in this sketch.
   *
   * @method getMasterVolume
   * @return {Number} Master amplitude (volume) for sound in this sketch.
   *                  Should be between 0.0 (silence) and 1.0.
   */

  p5.prototype.getMasterVolume = function () {
    return p5sound.output.gain.value;
  };
  /**
   *  <p>Scale the output of all sound in this sketch</p>
   *  Scaled between 0.0 (silence) and 1.0 (full volume).
   *  1.0 is the maximum amplitude of a digital sound, so multiplying
   *  by greater than 1.0 may cause digital distortion. To
   *  fade, provide a <code>rampTime</code> parameter. For more
   *  complex fades, see the Envelope class.
   *
   *  Alternately, you can pass in a signal source such as an
   *  oscillator to modulate the amplitude with an audio signal.
   *
   *  <p><b>How This Works</b>: When you load the p5.sound module, it
   *  creates a single instance of p5sound. All sound objects in this
   *  module output to p5sound before reaching your computer's output.
   *  So if you change the amplitude of p5sound, it impacts all of the
   *  sound in this module.</p>
   *
   *  <p>If no value is provided, returns a Web Audio API Gain Node</p>
   *
   *  @method  masterVolume
   *  @param {Number|Object} volume  Volume (amplitude) between 0.0
   *                                     and 1.0 or modulating signal/oscillator
   *  @param {Number} [rampTime]  Fade for t seconds
   *  @param {Number} [timeFromNow]  Schedule this event to happen at
   *                                 t seconds in the future
   */


  p5.prototype.masterVolume = function (vol, rampTime, tFromNow) {
    if (typeof vol === 'number') {
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var now = p5sound.audiocontext.currentTime;
      var currentVol = p5sound.output.gain.value;
      p5sound.output.gain.cancelScheduledValues(now + tFromNow);
      p5sound.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow);
      p5sound.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
    } else if (vol) {
      vol.connect(p5sound.output.gain);
    } else {
      return p5sound.output.gain;
    }
  };
  /**
   *  `p5.soundOut` is the p5.sound master output. It sends output to
   *  the destination of this window's web audio context. It contains
   *  Web Audio API nodes including a dyanmicsCompressor (<code>.limiter</code>),
   *  and Gain Nodes for <code>.input</code> and <code>.output</code>.
   *
   *  @property {Object} soundOut
   */


  p5.prototype.soundOut = p5.soundOut = p5sound; 

  p5.soundOut._silentNode = p5sound.audiocontext.createGain();
  p5.soundOut._silentNode.gain.value = 0;

  p5.soundOut._silentNode.connect(p5sound.audiocontext.destination);

  return p5sound;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(5),__webpack_require__(8),__webpack_require__(22),__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n){"use strict";return n.Signal=function(){var t=this.optionsObject(arguments,["value","units"],n.Signal.defaults);this.output=this._gain=this.context.createGain(),t.param=this._gain.gain,n.Param.call(this,t),this.input=this._param=this._gain.gain,this.context.getConstant(1).chain(this._gain)},n.extend(n.Signal,n.Param),n.Signal.defaults={value:0,units:n.Type.Default,convert:!0},n.Signal.prototype.connect=n.SignalBase.prototype.connect,n.Signal.prototype.dispose=function(){return n.Param.prototype.dispose.call(this),this._param=null,this._gain.disconnect(),this._gain=null,this},n.Signal}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(2),__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i){"use strict";return i.Multiply=function(t){this.createInsOuts(2,0),this._mult=this.input[0]=this.output=new i.Gain,this._param=this.input[1]=this.output.gain,this._param.value=this.defaultArg(t,0)},i.extend(i.Multiply,i.Signal),i.Multiply.prototype.dispose=function(){return i.prototype.dispose.call(this),this._mult.dispose(),this._mult=null,this._param=null,this},i.Multiply}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var CrossFade = __webpack_require__(51);
  /**
   * Effect is a base class for audio effects in p5. <br>
   * This module handles the nodes and methods that are
   * common and useful for current and future effects.
   *
   *
   * This class is extended by <a href="/reference/#/p5.Distortion">p5.Distortion</a>,
   * <a href="/reference/#/p5.Compressor">p5.Compressor</a>,
   * <a href="/reference/#/p5.Delay">p5.Delay</a>,
   * <a href="/reference/#/p5.Filter">p5.Filter</a>,
   * <a href="/reference/#/p5.Reverb">p5.Reverb</a>.
   *
   * @class  p5.Effect
   * @constructor
   *
   * @param {Object} [ac]   Reference to the audio context of the p5 object
   * @param {AudioNode} [input]  Gain Node effect wrapper
   * @param {AudioNode} [output] Gain Node effect wrapper
   * @param {Object} [_drywet]   Tone.JS CrossFade node (defaults to value: 1)
   * @param {AudioNode} [wet]  Effects that extend this class should connect
   *                              to the wet signal to this gain node, so that dry and wet
   *                              signals are mixed properly.
   */


  p5.Effect = function () {
    this.ac = p5sound.audiocontext;
    this.input = this.ac.createGain();
    this.output = this.ac.createGain();
    /**
     *	The p5.Effect class is built
     * 	using Tone.js CrossFade
     * 	@private
     */

    this._drywet = new CrossFade(1);
    /**
     *	In classes that extend
     *	p5.Effect, connect effect nodes
     *	to the wet parameter
     */

    this.wet = this.ac.createGain();
    this.input.connect(this._drywet.a);
    this.wet.connect(this._drywet.b);

    this._drywet.connect(this.output);

    this.connect(); 

    p5sound.soundArray.push(this);
  };
  /**
   *  Set the output volume of the filter.
   *
   *  @method  amp
   *  @for p5.Effect
   *  @param {Number} [vol] amplitude between 0 and 1.0
   *  @param {Number} [rampTime] create a fade that lasts until rampTime
   *  @param {Number} [tFromNow] schedule this event to happen in tFromNow seconds
   */


  p5.Effect.prototype.amp = function (vol, rampTime, tFromNow) {
    var rampTime = rampTime || 0;
    var tFromNow = tFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    var currentVol = this.output.gain.value;
    this.output.gain.cancelScheduledValues(now);
    this.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow + .001);
    this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime + .001);
  };
  /**
   *  Link effects together in a chain
   *  Example usage: filter.chain(reverb, delay, panner);
   *  May be used with an open-ended number of arguments
   *
   *  @method chain
   *  @for p5.Effect
   *  @param {Object} [arguments]  Chain together multiple sound objects
   */


  p5.Effect.prototype.chain = function () {
    if (arguments.length > 0) {
      this.connect(arguments[0]);

      for (var i = 1; i < arguments.length; i += 1) {
        arguments[i - 1].connect(arguments[i]);
      }
    }

    return this;
  };
  /**
   *  Adjust the dry/wet value.
   *
   *  @method drywet
   *  @for p5.Effect
   *  @param {Number} [fade] The desired drywet value (0 - 1.0)
   */


  p5.Effect.prototype.drywet = function (fade) {
    if (typeof fade !== "undefined") {
      this._drywet.fade.value = fade;
    }

    return this._drywet.fade.value;
  };
  /**
   *  Send output to a p5.js-sound, Web Audio Node, or use signal to
   *  control an AudioParam
   *
   *  @method connect
   *  @for p5.Effect
   *  @param {Object} unit
   */


  p5.Effect.prototype.connect = function (unit) {
    var u = unit || p5.soundOut.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
   * Disconnect all output.
   * @method disconnect
   * @for p5.Effect
   */


  p5.Effect.prototype.disconnect = function () {
    if (this.output) {
      this.output.disconnect();
    }
  };

  p5.Effect.prototype.dispose = function () {
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);

    if (this.input) {
      this.input.disconnect();
      delete this.input;
    }

    if (this.output) {
      this.output.disconnect();
      delete this.output;
    }

    if (this._drywet) {
      this._drywet.disconnect();

      delete this._drywet;
    }

    if (this.wet) {
      this.wet.disconnect();
      delete this.wet;
    }

    this.ac = undefined;
  };

  return p5.Effect;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e){"use strict";return e.WaveShaper=function(e,t){this._shaper=this.input=this.output=this.context.createWaveShaper(),this._curve=null,Array.isArray(e)?this.curve=e:isFinite(e)||this.isUndef(e)?this._curve=new Float32Array(this.defaultArg(e,1024)):this.isFunction(e)&&(this._curve=new Float32Array(this.defaultArg(t,1024)),this.setMap(e))},e.extend(e.WaveShaper,e.SignalBase),e.WaveShaper.prototype.setMap=function(e){for(var t=0,r=this._curve.length;t<r;t++){var s=t/(r-1)*2-1;this._curve[t]=e(s,t)}return this._shaper.curve=this._curve,this},Object.defineProperty(e.WaveShaper.prototype,"curve",{get:function(){return this._shaper.curve},set:function(e){this._curve=new Float32Array(e),this._shaper.curve=this._curve}}),Object.defineProperty(e.WaveShaper.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(e){if(-1===["none","2x","4x"].indexOf(e))throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");this._shaper.oversample=e}}),e.WaveShaper.prototype.dispose=function(){return e.prototype.dispose.call(this),this._shaper.disconnect(),this._shaper=null,this._curve=null,this},e.WaveShaper}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var processorNames = __webpack_require__(10);
  /**
   * @for p5
   */

  /**
   * Returns a number representing the sample rate, in samples per second,
   * of all sound objects in this audio context. It is determined by the
   * sampling rate of your operating system's sound card, and it is not
   * currently possile to change.
   * It is often 44100, or twice the range of human hearing.
   *
   * @method sampleRate
   * @return {Number} samplerate samples per second
   */


  p5.prototype.sampleRate = function () {
    return p5sound.audiocontext.sampleRate;
  };
  /**
   *  Returns the closest MIDI note value for
   *  a given frequency.
   *
   *  @method freqToMidi
   *  @param  {Number} frequency A freqeuncy, for example, the "A"
   *                             above Middle C is 440Hz
   *  @return {Number}   MIDI note value
   */


  p5.prototype.freqToMidi = function (f) {
    var mathlog2 = Math.log(f / 440) / Math.log(2);
    var m = Math.round(12 * mathlog2) + 69;
    return m;
  };
  /**
   *  Returns the frequency value of a MIDI note value.
   *  General MIDI treats notes as integers where middle C
   *  is 60, C# is 61, D is 62 etc. Useful for generating
   *  musical frequencies with oscillators.
   *
   *  @method  midiToFreq
   *  @param  {Number} midiNote The number of a MIDI note
   *  @return {Number} Frequency value of the given MIDI note
   *  @example
   *  <div><code>
   *  let midiNotes = [60, 64, 67, 72];
   *  let noteIndex = 0;
   *  let midiVal, freq;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(startSound);
   *    osc = new p5.TriOsc();
   *    env = new p5.Envelope();
   *  }
   *
   *  function draw() {
   *    background(220);
   *    text('tap to play', 10, 20);
   *    if (midiVal) {
   *      text('MIDI: ' + midiVal, 10, 40);
   *      text('Freq: ' + freq, 10, 60);
   *    }
   *  }
   *
   *  function startSound() {
   *    // see also: userStartAudio();
   *    osc.start();
   *
   *    midiVal = midiNotes[noteIndex % midiNotes.length];
   *    freq = midiToFreq(midiVal);
   *    osc.freq(freq);
   *    env.ramp(osc, 0, 1.0, 0);
   *
   *    noteIndex++;
   *  }
   *  </code></div>
   */


  var midiToFreq = p5.prototype.midiToFreq = function (m) {
    return 440 * Math.pow(2, (m - 69) / 12.0);
  }; 


  var noteToFreq = function noteToFreq(note) {
    if (typeof note !== 'string') {
      return note;
    }

    var wholeNotes = {
      A: 21,
      B: 23,
      C: 24,
      D: 26,
      E: 28,
      F: 29,
      G: 31
    };
    var value = wholeNotes[note[0].toUpperCase()];
    var octave = ~~note.slice(-1);
    value += 12 * (octave - 1);

    switch (note[1]) {
      case '#':
        value += 1;
        break;

      case 'b':
        value -= 1;
        break;

      default:
        break;
    }

    return midiToFreq(value);
  };
  /**
   *  List the SoundFile formats that you will include. LoadSound
   *  will search your directory for these extensions, and will pick
   *  a format that is compatable with the client's web browser.
   *  <a href="http://media.io/">Here</a> is a free online file
   *  converter.
   *
   *  @method soundFormats
   *  @param {String} [...formats] i.e. 'mp3', 'wav', 'ogg'
   *  @example
   *  <div><code>
   *  function preload() {
   *    // set the global sound formats
   *    soundFormats('mp3', 'ogg');
   *
   *    // load either beatbox.mp3, or .ogg, depending on browser
   *    mySound = loadSound('assets/beatbox.mp3');
   *  }
   *
   *  function setup() {
   *       let cnv = createCanvas(100, 100);
   *       background(220);
   *       text('sound loaded! tap to play', 10, 20, width - 20);
   *       cnv.mousePressed(function() {
   *         mySound.play();
   *       });
   *     }
   *  </code></div>
   */


  p5.prototype.soundFormats = function () {
    p5sound.extensions = []; 

    for (var i = 0; i < arguments.length; i++) {
      arguments[i] = arguments[i].toLowerCase();

      if (['mp3', 'wav', 'ogg', 'm4a', 'aac'].indexOf(arguments[i]) > -1) {
        p5sound.extensions.push(arguments[i]);
      } else {
        throw arguments[i] + ' is not a valid sound format!';
      }
    }
  };

  p5.prototype.disposeSound = function () {
    for (var i = 0; i < p5sound.soundArray.length; i++) {
      p5sound.soundArray[i].dispose();
    }
  }; 


  p5.prototype.registerMethod('remove', p5.prototype.disposeSound);

  p5.prototype._checkFileFormats = function (paths) {
    var path; 

    if (typeof paths === 'string') {
      path = paths; 

      var extTest = path.split('.').pop(); 

      if (['mp3', 'wav', 'ogg', 'm4a', 'aac'].indexOf(extTest) > -1) {
        if (p5.prototype.isFileSupported(extTest)) {
          path = path;
        } else {
          var pathSplit = path.split('.');
          var pathCore = pathSplit[pathSplit.length - 1];

          for (var i = 0; i < p5sound.extensions.length; i++) {
            var extension = p5sound.extensions[i];
            var supported = p5.prototype.isFileSupported(extension);

            if (supported) {
              pathCore = '';

              if (pathSplit.length === 2) {
                pathCore += pathSplit[0];
              }

              for (var i = 1; i <= pathSplit.length - 2; i++) {
                var p = pathSplit[i];
                pathCore += '.' + p;
              }

              path = pathCore += '.';
              path = path += extension;
              break;
            }
          }
        }
      } 
      else {
          for (var i = 0; i < p5sound.extensions.length; i++) {
            var extension = p5sound.extensions[i];
            var supported = p5.prototype.isFileSupported(extension);

            if (supported) {
              path = path + '.' + extension;
              break;
            }
          }
        }
    } 
    else if (_typeof(paths) === 'object') {
        for (var i = 0; i < paths.length; i++) {
          var extension = paths[i].split('.').pop();
          var supported = p5.prototype.isFileSupported(extension);

          if (supported) {
            path = paths[i];
            break;
          }
        }
      }

    return path;
  };
  /**
   *  Used by Osc and Envelope to chain signal math
   */


  p5.prototype._mathChain = function (o, math, thisChain, nextChain, type) {
    for (var i in o.mathOps) {
      if (o.mathOps[i] instanceof type) {
        o.mathOps[i].dispose();
        thisChain = i;

        if (thisChain < o.mathOps.length - 1) {
          nextChain = o.mathOps[i + 1];
        }
      }
    }

    o.mathOps[thisChain - 1].disconnect();
    o.mathOps[thisChain - 1].connect(math);
    math.connect(nextChain);
    o.mathOps[thisChain] = math;
    return o;
  }; 


  function convertToWav(audioBuffer) {
    var leftChannel, rightChannel;
    leftChannel = audioBuffer.getChannelData(0); 

    if (audioBuffer.numberOfChannels > 1) {
      rightChannel = audioBuffer.getChannelData(1);
    } else {
      rightChannel = leftChannel;
    }

    var interleaved = interleave(leftChannel, rightChannel); 

    var buffer = new window.ArrayBuffer(44 + interleaved.length * 2);
    var view = new window.DataView(buffer); 

    writeUTFBytes(view, 0, 'RIFF');
    view.setUint32(4, 36 + interleaved.length * 2, true);
    writeUTFBytes(view, 8, 'WAVE'); 

    writeUTFBytes(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); 

    view.setUint16(22, 2, true);
    view.setUint32(24, p5sound.audiocontext.sampleRate, true);
    view.setUint32(28, p5sound.audiocontext.sampleRate * 4, true);
    view.setUint16(32, 4, true);
    view.setUint16(34, 16, true); 

    writeUTFBytes(view, 36, 'data');
    view.setUint32(40, interleaved.length * 2, true); 

    var lng = interleaved.length;
    var index = 44;
    var volume = 1;

    for (var i = 0; i < lng; i++) {
      view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
      index += 2;
    }

    return view;
  } 


  function interleave(leftChannel, rightChannel) {
    var length = leftChannel.length + rightChannel.length;
    var result = new Float32Array(length);
    var inputIndex = 0;

    for (var index = 0; index < length;) {
      result[index++] = leftChannel[inputIndex];
      result[index++] = rightChannel[inputIndex];
      inputIndex++;
    }

    return result;
  }

  function writeUTFBytes(view, offset, string) {
    var lng = string.length;

    for (var i = 0; i < lng; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  function safeBufferSize(idealBufferSize) {
    var bufferSize = idealBufferSize; 

    var tempAudioWorkletNode = new AudioWorkletNode(p5sound.audiocontext, processorNames.soundFileProcessor);

    if (tempAudioWorkletNode instanceof ScriptProcessorNode) {
      bufferSize = tempAudioWorkletNode.bufferSize;
    }

    tempAudioWorkletNode.disconnect();
    tempAudioWorkletNode = null;
    return bufferSize;
  }

  return {
    convertToWav: convertToWav,
    midiToFreq: midiToFreq,
    noteToFreq: noteToFreq,
    safeBufferSize: safeBufferSize
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(2),__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i){"use strict";return i.Add=function(t){this.createInsOuts(2,0),this._sum=this.input[0]=this.input[1]=this.output=new i.Gain,this._param=this.input[1]=new i.Signal(t),this._param.connect(this._sum)},i.extend(i.Add,i.Signal),i.Add.prototype.dispose=function(){return i.prototype.dispose.call(this),this._sum.dispose(),this._sum=null,this._param.dispose(),this._param=null,this},i.Add}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(20),__webpack_require__(45),__webpack_require__(46),__webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t){return t.Type={Default:"number",Time:"time",Frequency:"frequency",TransportTime:"transportTime",Ticks:"ticks",NormalRange:"normalRange",AudioRange:"audioRange",Decibels:"db",Interval:"interval",BPM:"bpm",Positive:"positive",Cents:"cents",Degrees:"degrees",MIDI:"midi",BarsBeatsSixteenths:"barsBeatsSixteenths",Samples:"samples",Hertz:"hertz",Note:"note",Milliseconds:"milliseconds",Seconds:"seconds",Notation:"notation"},t.prototype.toSeconds=function(e){return this.isNumber(e)?e:this.isUndef(e)?this.now():this.isString(e)?new t.Time(e).toSeconds():e instanceof t.TimeBase?e.toSeconds():void 0},t.prototype.toFrequency=function(e){return this.isNumber(e)?e:this.isString(e)||this.isUndef(e)?new t.Frequency(e).valueOf():e instanceof t.TimeBase?e.toFrequency():void 0},t.prototype.toTicks=function(e){return this.isNumber(e)||this.isString(e)?new t.TransportTime(e).toTicks():this.isUndef(e)?t.Transport.ticks:e instanceof t.TimeBase?e.toTicks():void 0},t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(22),__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i){"use strict";return window.GainNode&&!AudioContext.prototype.createGain&&(AudioContext.prototype.createGain=AudioContext.prototype.createGainNode),i.Gain=function(){var t=this.optionsObject(arguments,["gain","units"],i.Gain.defaults);this.input=this.output=this._gainNode=this.context.createGain(),this.gain=new i.Param({param:this._gainNode.gain,units:t.units,value:t.gain,convert:t.convert}),this._readOnly("gain")},i.extend(i.Gain),i.Gain.defaults={gain:1,convert:!0},i.Gain.prototype.dispose=function(){i.Param.prototype.dispose.call(this),this._gainNode.disconnect(),this._gainNode=null,this._writable("gain"),this.gain.dispose(),this.gain=null},i.prototype.createInsOuts=function(t,n){1===t?this.input=new i.Gain:1<t&&(this.input=new Array(t)),1===n?this.output=new i.Gain:1<n&&(this.output=new Array(t))},i.Gain}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports) {

module.exports = {
  recorderProcessor: 'recorder-processor',
  soundFileProcessor: 'sound-file-processor',
  amplitudeProcessor: 'amplitude-processor'
};

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var CustomError = function CustomError(name, errorTrace, failedPath) {
    var err = new Error();
    var tempStack, splitStack;
    err.name = name;
    err.originalStack = err.stack + errorTrace;
    tempStack = err.stack + errorTrace;
    err.failedPath = failedPath; 

    var splitStack = tempStack.split('\n');
    splitStack = splitStack.filter(function (ln) {
      return !ln.match(/(p5.|native code|globalInit)/g);
    });
    err.stack = splitStack.join('\n');
    return err; 
  };

  return CustomError;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(18)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o){function t(e,t,n){if(e.input)Array.isArray(e.input)?(o.prototype.isUndef(n)&&(n=0),this.connect(e.input[n])):this.connect(e.input,t,n);else try{e instanceof AudioNode?i.call(this,e,t,n):i.call(this,e,t)}catch(t){throw new Error("error connecting to node: "+e+"\n"+t)}}var i,r;return!window.hasOwnProperty("AudioContext")&&window.hasOwnProperty("webkitAudioContext")&&(window.AudioContext=window.webkitAudioContext),o.Context=function(t){for(var e in o.Emitter.call(this),t=t||new window.AudioContext,this._context=t,this._context)this._defineProperty(this._context,e);this._latencyHint="interactive",this._lookAhead=.1,this._updateInterval=this._lookAhead/3,this._computedUpdateInterval=0,this._worker=this._createWorker(),this._constants={}},o.extend(o.Context,o.Emitter),o.Emitter.mixin(o.Context),o.Context.prototype._defineProperty=function(e,n){this.isUndef(this[n])&&Object.defineProperty(this,n,{get:function(){return"function"==typeof e[n]?e[n].bind(e):e[n]},set:function(t){e[n]=t}})},o.Context.prototype.now=function(){return this._context.currentTime},o.Context.prototype._createWorker=function(){window.URL=window.URL||window.webkitURL;var t=new Blob(["var timeoutTime = "+(1e3*this._updateInterval).toFixed(1)+";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"]),e=URL.createObjectURL(t),n=new Worker(e);return n.addEventListener("message",function(){this.emit("tick")}.bind(this)),n.addEventListener("message",function(){var t=this.now();if(this.isNumber(this._lastUpdate)){var e=t-this._lastUpdate;this._computedUpdateInterval=Math.max(e,.97*this._computedUpdateInterval)}this._lastUpdate=t}.bind(this)),n},o.Context.prototype.getConstant=function(t){if(this._constants[t])return this._constants[t];for(var e=this._context.createBuffer(1,128,this._context.sampleRate),n=e.getChannelData(0),o=0;o<n.length;o++)n[o]=t;var i=this._context.createBufferSource();return i.channelCount=1,i.channelCountMode="explicit",i.buffer=e,i.loop=!0,i.start(0),this._constants[t]=i},Object.defineProperty(o.Context.prototype,"lag",{get:function(){var t=this._computedUpdateInterval-this._updateInterval;return t=Math.max(t,0)}}),Object.defineProperty(o.Context.prototype,"lookAhead",{get:function(){return this._lookAhead},set:function(t){this._lookAhead=t}}),Object.defineProperty(o.Context.prototype,"updateInterval",{get:function(){return this._updateInterval},set:function(t){this._updateInterval=Math.max(t,o.prototype.blockTime),this._worker.postMessage(Math.max(1e3*t,1))}}),Object.defineProperty(o.Context.prototype,"latencyHint",{get:function(){return this._latencyHint},set:function(t){var e=t;if(this._latencyHint=t,this.isString(t))switch(t){case"interactive":e=.1,this._context.latencyHint=t;break;case"playback":e=.8,this._context.latencyHint=t;break;case"balanced":e=.25,this._context.latencyHint=t;break;case"fastest":e=.01}this.lookAhead=e,this.updateInterval=e/3}}),o.supported?(i=AudioNode.prototype.connect,r=AudioNode.prototype.disconnect,AudioNode.prototype.connect!==t&&(AudioNode.prototype.connect=t,AudioNode.prototype.disconnect=function(e,t,n){if(e&&e.input&&Array.isArray(e.input))o.prototype.isUndef(n)&&(n=0),this.disconnect(e.input[n],t,n);else if(e&&e.input)this.disconnect(e.input,t,n);else try{r.apply(this,arguments)}catch(t){throw new Error("error disconnecting node: "+e+"\n"+t)}}),o.context=new o.Context):console.warn("This browser does not support Tone.js"),o.Context}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(7),__webpack_require__(3),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i){"use strict";return i.Scale=function(t,e){this._outputMin=this.defaultArg(t,0),this._outputMax=this.defaultArg(e,1),this._scale=this.input=new i.Multiply(1),this._add=this.output=new i.Add(0),this._scale.connect(this._add),this._setRange()},i.extend(i.Scale,i.SignalBase),Object.defineProperty(i.Scale.prototype,"min",{get:function(){return this._outputMin},set:function(t){this._outputMin=t,this._setRange()}}),Object.defineProperty(i.Scale.prototype,"max",{get:function(){return this._outputMax},set:function(t){this._outputMax=t,this._setRange()}}),i.Scale.prototype._setRange=function(){this._add.value=this._outputMin,this._scale.value=this._outputMax-this._outputMin},i.Scale.prototype.dispose=function(){return i.prototype.dispose.call(this),this._add.dispose(),this._add=null,this._scale.dispose(),this._scale=null,this},i.Scale}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(2),__webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o){"use strict";return o.TimelineSignal=function(){var e=this.optionsObject(arguments,["value","units"],o.Signal.defaults);this._events=new o.Timeline(10),o.Signal.apply(this,e),e.param=this._param,o.Param.call(this,e),this._initial=this._fromUnits(this._param.value)},o.extend(o.TimelineSignal,o.Param),o.TimelineSignal.Type={Linear:"linear",Exponential:"exponential",Target:"target",Curve:"curve",Set:"set"},Object.defineProperty(o.TimelineSignal.prototype,"value",{get:function(){var e=this.now(),t=this.getValueAtTime(e);return this._toUnits(t)},set:function(e){var t=this._fromUnits(e);this._initial=t,this.cancelScheduledValues(),this._param.value=t}}),o.TimelineSignal.prototype.setValueAtTime=function(e,t){return e=this._fromUnits(e),t=this.toSeconds(t),this._events.add({type:o.TimelineSignal.Type.Set,value:e,time:t}),this._param.setValueAtTime(e,t),this},o.TimelineSignal.prototype.linearRampToValueAtTime=function(e,t){return e=this._fromUnits(e),t=this.toSeconds(t),this._events.add({type:o.TimelineSignal.Type.Linear,value:e,time:t}),this._param.linearRampToValueAtTime(e,t),this},o.TimelineSignal.prototype.exponentialRampToValueAtTime=function(e,t){t=this.toSeconds(t);var i=this._searchBefore(t);i&&0===i.value&&this.setValueAtTime(this._minOutput,i.time),e=this._fromUnits(e);var n=Math.max(e,this._minOutput);return this._events.add({type:o.TimelineSignal.Type.Exponential,value:n,time:t}),e<this._minOutput?(this._param.exponentialRampToValueAtTime(this._minOutput,t-this.sampleTime),this.setValueAtTime(0,t)):this._param.exponentialRampToValueAtTime(e,t),this},o.TimelineSignal.prototype.setTargetAtTime=function(e,t,i){return e=this._fromUnits(e),e=Math.max(this._minOutput,e),i=Math.max(this._minOutput,i),t=this.toSeconds(t),this._events.add({type:o.TimelineSignal.Type.Target,value:e,time:t,constant:i}),this._param.setTargetAtTime(e,t,i),this},o.TimelineSignal.prototype.setValueCurveAtTime=function(e,t,i,n){n=this.defaultArg(n,1);for(var a=new Array(e.length),l=0;l<a.length;l++)a[l]=this._fromUnits(e[l])*n;t=this.toSeconds(t),i=this.toSeconds(i),this._events.add({type:o.TimelineSignal.Type.Curve,value:a,time:t,duration:i}),this._param.setValueAtTime(a[0],t);for(var s=1;s<a.length;s++){var r=t+s/(a.length-1)*i;this._param.linearRampToValueAtTime(a[s],r)}return this},o.TimelineSignal.prototype.cancelScheduledValues=function(e){return e=this.toSeconds(e),this._events.cancel(e),this._param.cancelScheduledValues(e),this},o.TimelineSignal.prototype.setRampPoint=function(e){e=this.toSeconds(e);var t=this._toUnits(this.getValueAtTime(e)),i=this._searchBefore(e);if(i&&i.time===e)this.cancelScheduledValues(e+this.sampleTime);else if(i&&i.type===o.TimelineSignal.Type.Curve&&i.time+i.duration>e)this.cancelScheduledValues(e),this.linearRampToValueAtTime(t,e);else{var n=this._searchAfter(e);n&&(this.cancelScheduledValues(e),n.type===o.TimelineSignal.Type.Linear?this.linearRampToValueAtTime(t,e):n.type===o.TimelineSignal.Type.Exponential&&this.exponentialRampToValueAtTime(t,e)),this.setValueAtTime(t,e)}return this},o.TimelineSignal.prototype.linearRampToValueBetween=function(e,t,i){return this.setRampPoint(t),this.linearRampToValueAtTime(e,i),this},o.TimelineSignal.prototype.exponentialRampToValueBetween=function(e,t,i){return this.setRampPoint(t),this.exponentialRampToValueAtTime(e,i),this},o.TimelineSignal.prototype._searchBefore=function(e){return this._events.get(e)},o.TimelineSignal.prototype._searchAfter=function(e){return this._events.getAfter(e)},o.TimelineSignal.prototype.getValueAtTime=function(e){e=this.toSeconds(e);var t=this._searchAfter(e),i=this._searchBefore(e),n=this._initial;if(null===i)n=this._initial;else if(i.type===o.TimelineSignal.Type.Target){var a,l=this._events.getBefore(i.time);a=null===l?this._initial:l.value,n=this._exponentialApproach(i.time,a,i.value,i.constant,e)}else n=i.type===o.TimelineSignal.Type.Curve?this._curveInterpolate(i.time,i.value,i.duration,e):null===t?i.value:t.type===o.TimelineSignal.Type.Linear?this._linearInterpolate(i.time,i.value,t.time,t.value,e):t.type===o.TimelineSignal.Type.Exponential?this._exponentialInterpolate(i.time,i.value,t.time,t.value,e):i.value;return n},o.TimelineSignal.prototype.connect=o.SignalBase.prototype.connect,o.TimelineSignal.prototype._exponentialApproach=function(e,t,i,n,a){return i+(t-i)*Math.exp(-(a-e)/n)},o.TimelineSignal.prototype._linearInterpolate=function(e,t,i,n,a){return t+(a-e)/(i-e)*(n-t)},o.TimelineSignal.prototype._exponentialInterpolate=function(e,t,i,n,a){return(t=Math.max(this._minOutput,t))*Math.pow(n/t,(a-e)/(i-e))},o.TimelineSignal.prototype._curveInterpolate=function(e,t,i,n){var a=t.length;if(e+i<=n)return t[a-1];if(n<=e)return t[0];var l=(n-e)/i,s=Math.floor((a-1)*l),r=Math.ceil((a-1)*l),o=t[s],p=t[r];return r===s?o:this._linearInterpolate(s,o,r,p,l*(a-1))},o.TimelineSignal.prototype.dispose=function(){o.Signal.prototype.dispose.call(this),o.Param.prototype.dispose.call(this),this._events.dispose(),this._events=null},o.TimelineSignal}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var Effect = __webpack_require__(4);
  /**
   *  <p>A p5.Filter uses a Web Audio Biquad Filter to filter
   *  the frequency response of an input source. Subclasses
   *  include:</p>
   *  <a href="/reference/#/p5.LowPass"><code>p5.LowPass</code></a>:
   *  Allows frequencies below the cutoff frequency to pass through,
   *  and attenuates frequencies above the cutoff.<br/>
   *  <a href="/reference/#/p5.HighPass"><code>p5.HighPass</code></a>:
   *  The opposite of a lowpass filter. <br/>
   *  <a href="/reference/#/p5.BandPass"><code>p5.BandPass</code></a>:
   *  Allows a range of frequencies to pass through and attenuates
   *  the frequencies below and above this frequency range.<br/>
   *
   *  The <code>.res()</code> method controls either width of the
   *  bandpass, or resonance of the low/highpass cutoff frequency.
   *
   *  This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.
   *  Methods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,
   *  <a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and
   *  <a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.
   *
   *  @class p5.Filter
   *  @extends p5.Effect
   *  @constructor
   *  @param {String} [type] 'lowpass' (default), 'highpass', 'bandpass'
   *  @example
   *  <div><code>
  *  let fft, noise, filter;
  *
  *  function setup() {
  *    let cnv = createCanvas(100,100);
  *    cnv.mousePressed(makeNoise);
  *    fill(255, 0, 255);
  *
  *    filter = new p5.BandPass();
  *    noise = new p5.Noise();
  *    noise.disconnect();
  *    noise.connect(filter);
  *
  *    fft = new p5.FFT();
  *  }
  *
  *  function draw() {
  *    background(220);
  *
  *    // set the BandPass frequency based on mouseX
  *    let freq = map(mouseX, 0, width, 20, 10000);
  *    freq = constrain(freq, 0, 22050);
  *    filter.freq(freq);
  *    // give the filter a narrow band (lower res = wider bandpass)
  *    filter.res(50);
  *
  *    // draw filtered spectrum
  *    let spectrum = fft.analyze();
  *    noStroke();
  *    for (let i = 0; i < spectrum.length; i++) {
  *      let x = map(i, 0, spectrum.length, 0, width);
  *      let h = -height + map(spectrum[i], 0, 255, height, 0);
  *      rect(x, height, width/spectrum.length, h);
  *    }
  *    if (!noise.started) {
  *      text('tap here and drag to change frequency', 10, 20, width - 20);
  *    } else {
  *      text('Frequency: ' + round(freq)+'Hz', 20, 20, width - 20);
  *    }
  *  }
  *
  *  function makeNoise() {
  *    // see also: `userStartAudio()`
  *    noise.start();
  *    noise.amp(0.5, 0.2);
  *  }
  *
  *  function mouseReleased() {
  *    noise.amp(0, 0.2);
  *  }
  *
   *  </code></div>
   */


  p5.Filter = function (type) {
    Effect.call(this); 

    /**
      *  The p5.Filter is built with a
      *  <a href="http://www.w3.org/TR/webaudio/#BiquadFilterNode">
      *  Web Audio BiquadFilter Node</a>.
      *
      *  @property {DelayNode} biquadFilter
    */

    this.biquad = this.ac.createBiquadFilter();
    this.input.connect(this.biquad);
    this.biquad.connect(this.wet);

    if (type) {
      this.setType(type);
    } 


    this._on = true;
    this._untoggledType = this.biquad.type;
  };

  p5.Filter.prototype = Object.create(Effect.prototype);
  /**
   *  Filter an audio signal according to a set
   *  of filter parameters.
   *
   *  @method  process
   *  @param  {Object} Signal  An object that outputs audio
   *  @param {Number} [freq] Frequency in Hz, from 10 to 22050
   *  @param {Number} [res] Resonance/Width of the filter frequency
   *                        from 0.001 to 1000
   */

  p5.Filter.prototype.process = function (src, freq, res, time) {
    src.connect(this.input);
    this.set(freq, res, time);
  };
  /**
   *  Set the frequency and the resonance of the filter.
   *
   *  @method  set
   *  @param {Number} [freq] Frequency in Hz, from 10 to 22050
   *  @param {Number} [res]  Resonance (Q) from 0.001 to 1000
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */


  p5.Filter.prototype.set = function (freq, res, time) {
    if (freq) {
      this.freq(freq, time);
    }

    if (res) {
      this.res(res, time);
    }
  };
  /**
   *  Set the filter frequency, in Hz, from 10 to 22050 (the range of
   *  human hearing, although in reality most people hear in a narrower
   *  range).
   *
   *  @method  freq
   *  @param  {Number} freq Filter Frequency
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   *  @return {Number} value  Returns the current frequency value
   */


  p5.Filter.prototype.freq = function (freq, time) {
    var t = time || 0;

    if (freq <= 0) {
      freq = 1;
    }

    if (typeof freq === 'number') {
      this.biquad.frequency.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.biquad.frequency.exponentialRampToValueAtTime(freq, this.ac.currentTime + 0.02 + t);
    } else if (freq) {
      freq.connect(this.biquad.frequency);
    }

    return this.biquad.frequency.value;
  };
  /**
   *  Controls either width of a bandpass frequency,
   *  or the resonance of a low/highpass cutoff frequency.
   *
   *  @method  res
   *  @param {Number} res  Resonance/Width of filter freq
   *                       from 0.001 to 1000
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   *  @return {Number} value Returns the current res value
   */


  p5.Filter.prototype.res = function (res, time) {
    var t = time || 0;

    if (typeof res === 'number') {
      this.biquad.Q.value = res;
      this.biquad.Q.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.biquad.Q.linearRampToValueAtTime(res, this.ac.currentTime + 0.02 + t);
    } else if (res) {
      res.connect(this.biquad.Q);
    }

    return this.biquad.Q.value;
  };
  /**
   * Controls the gain attribute of a Biquad Filter.
   * This is distinctly different from .amp() which is inherited from p5.Effect
   * .amp() controls the volume via the output gain node
   * p5.Filter.gain() controls the gain parameter of a Biquad Filter node.
   *
   * @method gain
   * @param  {Number} gain
   * @return {Number} Returns the current or updated gain value
   */


  p5.Filter.prototype.gain = function (gain, time) {
    var t = time || 0;

    if (typeof gain === 'number') {
      this.biquad.gain.value = gain;
      this.biquad.gain.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.biquad.gain.linearRampToValueAtTime(gain, this.ac.currentTime + 0.02 + t);
    } else if (gain) {
      gain.connect(this.biquad.gain);
    }

    return this.biquad.gain.value;
  };
  /**
   * Toggle function. Switches between the specified type and allpass
   *
   * @method toggle
   * @return {boolean} [Toggle value]
   */


  p5.Filter.prototype.toggle = function () {
    this._on = !this._on;

    if (this._on === true) {
      this.biquad.type = this._untoggledType;
    } else if (this._on === false) {
      this.biquad.type = 'allpass';
    }

    return this._on;
  };
  /**
   *  Set the type of a p5.Filter. Possible types include:
   *  "lowpass" (default), "highpass", "bandpass",
   *  "lowshelf", "highshelf", "peaking", "notch",
   *  "allpass".
   *
   *  @method  setType
   *  @param {String} t
   */


  p5.Filter.prototype.setType = function (t) {
    this.biquad.type = t;
    this._untoggledType = this.biquad.type;
  };

  p5.Filter.prototype.dispose = function () {
    Effect.prototype.dispose.apply(this);

    if (this.biquad) {
      this.biquad.disconnect();
      delete this.biquad;
    }
  };
  /**
   *  Constructor: <code>new p5.LowPass()</code> Filter.
   *  This is the same as creating a p5.Filter and then calling
   *  its method <code>setType('lowpass')</code>.
   *  See p5.Filter for methods.
   *
   *  @class p5.LowPass
   *  @constructor
   *  @extends p5.Filter
   */


  p5.LowPass = function () {
    p5.Filter.call(this, 'lowpass');
  };

  p5.LowPass.prototype = Object.create(p5.Filter.prototype);
  /**
   *  Constructor: <code>new p5.HighPass()</code> Filter.
   *  This is the same as creating a p5.Filter and then calling
   *  its method <code>setType('highpass')</code>.
   *  See p5.Filter for methods.
   *
   *  @class p5.HighPass
   *  @constructor
   *  @extends p5.Filter
   */

  p5.HighPass = function () {
    p5.Filter.call(this, 'highpass');
  };

  p5.HighPass.prototype = Object.create(p5.Filter.prototype);
  /**
   *  Constructor: <code>new p5.BandPass()</code> Filter.
   *  This is the same as creating a p5.Filter and then calling
   *  its method <code>setType('bandpass')</code>.
   *  See p5.Filter for methods.
   *
   *  @class p5.BandPass
   *  @constructor
   *  @extends p5.Filter
   */

  p5.BandPass = function () {
    p5.Filter.call(this, 'bandpass');
  };

  p5.BandPass.prototype = Object.create(p5.Filter.prototype);
  return p5.Filter;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(7),__webpack_require__(25),__webpack_require__(2),__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n){"use strict";return n.Subtract=function(t){this.createInsOuts(2,0),this._sum=this.input[0]=this.output=new n.Gain,this._neg=new n.Negate,this._param=this.input[1]=new n.Signal(t),this._param.chain(this._neg,this._sum)},n.extend(n.Subtract,n.Signal),n.Subtract.prototype.dispose=function(){return n.prototype.dispose.call(this),this._neg.dispose(),this._neg=null,this._sum.disconnect(),this._sum=null,this._param.dispose(),this._param=null,this},n.Subtract}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

global.TONE_SILENCE_VERSION_LOGGING = true;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(35), __webpack_require__(12), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (StartAudioContext, Context, Tone) {
  var audiocontext = new window.AudioContext(); 

  Tone.context.dispose();
  Tone.setContext(audiocontext);
  /**
   * <p>Returns the Audio Context for this sketch. Useful for users
   * who would like to dig deeper into the <a target='_blank' href=
   * 'http://webaudio.github.io/web-audio-api/'>Web Audio API
   * </a>.</p>
   *
   * <p>Some browsers require users to startAudioContext
   * with a user gesture, such as touchStarted in the example below.</p>
   *
   * @for p5
   * @method getAudioContext
   * @return {Object}    AudioContext for this sketch
   * @example
   * <div><code>
   *  function draw() {
   *    background(255);
   *    textAlign(CENTER);
   *
   *    if (getAudioContext().state !== 'running') {
   *      text('click to start audio', width/2, height/2);
   *    } else {
   *      text('audio is enabled', width/2, height/2);
   *    }
   *  }
   *
   *  function touchStarted() {
   *    if (getAudioContext().state !== 'running') {
   *      getAudioContext().resume();
   *    }
   *    var synth = new p5.MonoSynth();
   *    synth.play('A4', 0.5, 0, 0.2);
   *  }
   *
   * </div></code>
   */

  p5.prototype.getAudioContext = function () {
    return audiocontext;
  };
  /**
   *  <p>It is not only a good practice to give users control over starting
   *  audio. This policy is enforced by many web browsers, including iOS and
   *  <a href="https://goo.gl/7K7WLu" title="Google Chrome's autoplay
   *  policy">Google Chrome</a>, which create the Web Audio API's
   *  <a href="https://developer.mozilla.org/en-US/docs/Web/API/AudioContext"
   *  title="Audio Context @ MDN">Audio Context</a>
   *  in a suspended state.</p>
   *
   *  <p>In these browser-specific policies, sound will not play until a user
   *  interaction event (i.e. <code>mousePressed()</code>) explicitly resumes
   *  the AudioContext, or starts an audio node. This can be accomplished by
   *  calling <code>start()</code> on a <code>p5.Oscillator</code>,
   *  <code> play()</code> on a <code>p5.SoundFile</code>, or simply
   *  <code>userStartAudio()</code>.</p>
   *
   *  <p><code>userStartAudio()</code> starts the AudioContext on a user
   *  gesture. The default behavior will enable audio on any
   *  mouseUp or touchEnd event. It can also be placed in a specific
   *  interaction function, such as <code>mousePressed()</code> as in the
   *  example below. This method utilizes
   *  <a href="https://github.com/tambien/StartAudioContext">StartAudioContext
   *  </a>, a library by Yotam Mann (MIT Licence, 2016).</p>
   *  @param  {Element|Array}   [element(s)] This argument can be an Element,
   *                                Selector String, NodeList, p5.Element,
   *                                jQuery Element, or an Array of any of those.
   *  @param  {Function} [callback] Callback to invoke when the AudioContext
   *                                has started
   *  @return {Promise}            Returns a Promise that resolves when
   *                                       the AudioContext state is 'running'
   *  @method userStartAudio
   *  @for p5
   *  @example
   *  <div><code>
   *  function setup() {
   *    // mimics the autoplay policy
   *    getAudioContext().suspend();
   *
   *    let mySynth = new p5.MonoSynth();
   *
   *    // This won't play until the context has resumed
   *    mySynth.play('A6');
   *  }
   *  function draw() {
   *    background(220);
   *    textAlign(CENTER, CENTER);
   *    text(getAudioContext().state, width/2, height/2);
   *  }
   *  function mousePressed() {
   *    userStartAudio();
   *  }
   *  </code></div>
   */


  p5.prototype.userStartAudio = function (elements, callback) {
    var elt = elements;

    if (elements instanceof p5.Element) {
      elt = elements.elt;
    } else if (elements instanceof Array && elements[0] instanceof p5.Element) {
      elt = elements.map(function (e) {
        return e.elt;
      });
    }

    return StartAudioContext(audiocontext, elt, callback);
  };

  return audiocontext;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}.call(this, __webpack_require__(34)))

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o){"use strict";return o.Emitter=function(){this._events={}},o.extend(o.Emitter),o.Emitter.prototype.on=function(t,e){for(var i=t.split(/\W+/),r=0;r<i.length;r++){var n=i[r];this._events.hasOwnProperty(n)||(this._events[n]=[]),this._events[n].push(e)}return this},o.Emitter.prototype.off=function(t,e){for(var i=t.split(/\W+/),r=0;r<i.length;r++)if(t=i[r],this._events.hasOwnProperty(t))if(o.prototype.isUndef(e))this._events[t]=[];else for(var n=this._events[t],s=0;s<n.length;s++)n[s]===e&&n.splice(s,1);return this},o.Emitter.prototype.emit=function(t){if(this._events){var e=Array.apply(null,arguments).slice(1);if(this._events.hasOwnProperty(t))for(var i=this._events[t],r=0,n=i.length;r<n;r++)i[r].apply(this,e)}return this},o.Emitter.mixin=function(t){var e=["on","off","emit"];t._events={};for(var i=0;i<e.length;i++){var r=e[i],n=o.Emitter.prototype[r];t[r]=n}},o.Emitter.prototype.dispose=function(){return o.prototype.dispose.call(this),this._events=null,this},o.Emitter}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(c){"use strict";return c.SignalBase=function(){},c.extend(c.SignalBase),c.SignalBase.prototype.connect=function(e,n,a){return c.Signal&&c.Signal===e.constructor||c.Param&&c.Param===e.constructor||c.TimelineSignal&&c.TimelineSignal===e.constructor?(e._param.cancelScheduledValues(0),e._param.value=0,e.overridden=!0):e instanceof AudioParam&&(e.cancelScheduledValues(0),e.value=0),c.prototype.connect.call(this,e,n,a),this},c.SignalBase}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(21)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o){return o.Time=function(t,e){if(!(this instanceof o.Time))return new o.Time(t,e);this._plusNow=!1,o.TimeBase.call(this,t,e)},o.extend(o.Time,o.TimeBase),o.Time.prototype._unaryExpressions=Object.create(o.TimeBase.prototype._unaryExpressions),o.Time.prototype._unaryExpressions.quantize={regexp:/^@/,method:function(t){return o.Transport.nextSubdivision(t())}},o.Time.prototype._unaryExpressions.now={regexp:/^\+/,method:function(t){return this._plusNow=!0,t()}},o.Time.prototype.quantize=function(t,e){return e=this.defaultArg(e,1),this._expr=function(t,e,o){return t=t(),e=e.toSeconds(),t+(Math.round(t/e)*e-t)*o}.bind(this,this._expr,new this.constructor(t),e),this},o.Time.prototype.addNow=function(){return this._plusNow=!0,this},o.Time.prototype._defaultExpr=function(){return this._plusNow=!0,this._noOp},o.Time.prototype.copy=function(t){return o.TimeBase.prototype.copy.call(this,t),this._plusNow=t._plusNow,this},o.Time.prototype.toNotation=function(){var t=this.toSeconds(),e=this._toNotationHelper(t,["1m","2n","4n","8n","16n","32n","64n","128n"]),o=this._toNotationHelper(t,["1m","2n","2t","4n","4t","8n","8t","16n","16t","32n","32t","64n","64t","128n"]);return o.split("+").length<e.split("+").length?o:e},o.Time.prototype._toNotationHelper=function(t,e){for(var o=this._notationToUnits(e[e.length-1]),n="",i=0;i<e.length;i++){var r=this._notationToUnits(e[i]),s=t/r;if(1-s%1<1e-6&&(s+=1e-6),0<(s=Math.floor(s))){if(n+=1===s?e[i]:s.toString()+"*"+e[i],(t-=s*r)<o)break;n+=" + "}}return""===n&&(n="0"),n},o.Time.prototype._notationToUnits=function(t){for(var e=this._primaryExpressions,o=[e.n,e.t,e.m],n=0;n<o.length;n++){var i=o[n],r=t.match(i.regexp);if(r)return i.method.call(this,r[1])}},o.Time.prototype.toBarsBeatsSixteenths=function(){var t=this._beatsToUnits(1),e=this.toSeconds()/t,o=Math.floor(e/this._timeSignature()),n=e%1*4;return e=Math.floor(e)%this._timeSignature(),3<(n=n.toString()).length&&(n=parseFloat(n).toFixed(3)),[o,e,n].join(":")},o.Time.prototype.toTicks=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.floor(e*o.Transport.PPQ)},o.Time.prototype.toSamples=function(){return this.toSeconds()*this.context.sampleRate},o.Time.prototype.toFrequency=function(){return 1/this.toSeconds()},o.Time.prototype.toSeconds=function(){return this.valueOf()},o.Time.prototype.toMilliseconds=function(){return 1e3*this.toSeconds()},o.Time.prototype.valueOf=function(){return this._expr()+(this._plusNow?this.now():0)},o.Time}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n){return n.TimeBase=function(e,t){if(!(this instanceof n.TimeBase))return new n.TimeBase(e,t);if(this._expr=this._noOp,e instanceof n.TimeBase)this.copy(e);else if(!this.isUndef(t)||this.isNumber(e)){t=this.defaultArg(t,this._defaultUnits);var r=this._primaryExpressions[t].method;this._expr=r.bind(this,e)}else this.isString(e)?this.set(e):this.isUndef(e)&&(this._expr=this._defaultExpr())},n.extend(n.TimeBase),n.TimeBase.prototype.set=function(e){return this._expr=this._parseExprString(e),this},n.TimeBase.prototype.clone=function(){var e=new this.constructor;return e.copy(this),e},n.TimeBase.prototype.copy=function(e){var t=e._expr();return this.set(t)},n.TimeBase.prototype._primaryExpressions={n:{regexp:/^(\d+)n/i,method:function(e){return 1===(e=parseInt(e))?this._beatsToUnits(this._timeSignature()):this._beatsToUnits(4/e)}},t:{regexp:/^(\d+)t/i,method:function(e){return e=parseInt(e),this._beatsToUnits(8/(3*parseInt(e)))}},m:{regexp:/^(\d+)m/i,method:function(e){return this._beatsToUnits(parseInt(e)*this._timeSignature())}},i:{regexp:/^(\d+)i/i,method:function(e){return this._ticksToUnits(parseInt(e))}},hz:{regexp:/^(\d+(?:\.\d+)?)hz/i,method:function(e){return this._frequencyToUnits(parseFloat(e))}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method:function(e,t,r){var n=0;return e&&"0"!==e&&(n+=this._beatsToUnits(this._timeSignature()*parseFloat(e))),t&&"0"!==t&&(n+=this._beatsToUnits(parseFloat(t))),r&&"0"!==r&&(n+=this._beatsToUnits(parseFloat(r)/4)),n}},s:{regexp:/^(\d+(?:\.\d+)?s)/,method:function(e){return this._secondsToUnits(parseFloat(e))}},samples:{regexp:/^(\d+)samples/,method:function(e){return parseInt(e)/this.context.sampleRate}},default:{regexp:/^(\d+(?:\.\d+)?)/,method:function(e){return this._primaryExpressions[this._defaultUnits].method.call(this,e)}}},n.TimeBase.prototype._binaryExpressions={"+":{regexp:/^\+/,precedence:2,method:function(e,t){return e()+t()}},"-":{regexp:/^\-/,precedence:2,method:function(e,t){return e()-t()}},"*":{regexp:/^\*/,precedence:1,method:function(e,t){return e()*t()}},"/":{regexp:/^\//,precedence:1,method:function(e,t){return e()/t()}}},n.TimeBase.prototype._unaryExpressions={neg:{regexp:/^\-/,method:function(e){return-e()}}},n.TimeBase.prototype._syntaxGlue={"(":{regexp:/^\(/},")":{regexp:/^\)/}},n.TimeBase.prototype._tokenize=function(e){for(var t=-1,r=[];0<e.length;){var n=i(e=e.trim(),this);r.push(n),e=e.substr(n.value.length)}function i(e,t){for(var r=["_binaryExpressions","_unaryExpressions","_primaryExpressions","_syntaxGlue"],n=0;n<r.length;n++){var i=t[r[n]];for(var s in i){var o=i[s],p=o.regexp,a=e.match(p);if(null!==a)return{method:o.method,precedence:o.precedence,regexp:o.regexp,value:a[0]}}}throw new SyntaxError("Tone.TimeBase: Unexpected token "+e)}return{next:function(){return r[++t]},peek:function(){return r[t+1]}}},n.TimeBase.prototype._matchGroup=function(e,t,r){if(!this.isUndef(e))for(var n in t){var i=t[n];if(i.regexp.test(e.value)){if(this.isUndef(r))return i;if(i.precedence===r)return i}}return!1},n.TimeBase.prototype._parseBinary=function(e,t){var r;this.isUndef(t)&&(t=2),r=t<0?this._parseUnary(e):this._parseBinary(e,t-1);for(var n=e.peek();n&&this._matchGroup(n,this._binaryExpressions,t);)r=(n=e.next()).method.bind(this,r,this._parseBinary(e,t-1)),n=e.peek();return r},n.TimeBase.prototype._parseUnary=function(e){var t,r;t=e.peek();var n=this._matchGroup(t,this._unaryExpressions);return n?(t=e.next(),r=this._parseUnary(e),n.method.bind(this,r)):this._parsePrimary(e)},n.TimeBase.prototype._parsePrimary=function(e){var t,r;if(t=e.peek(),this.isUndef(t))throw new SyntaxError("Tone.TimeBase: Unexpected end of expression");if(this._matchGroup(t,this._primaryExpressions)){var n=(t=e.next()).value.match(t.regexp);return t.method.bind(this,n[1],n[2],n[3])}if(t&&"("===t.value){if(e.next(),r=this._parseBinary(e),!(t=e.next())||")"!==t.value)throw new SyntaxError("Expected )");return r}throw new SyntaxError("Tone.TimeBase: Cannot process token "+t.value)},n.TimeBase.prototype._parseExprString=function(e){this.isString(e)||(e=e.toString());var t=this._tokenize(e);return this._parseBinary(t)},n.TimeBase.prototype._noOp=function(){return 0},n.TimeBase.prototype._defaultExpr=function(){return this._noOp},n.TimeBase.prototype._defaultUnits="s",n.TimeBase.prototype._frequencyToUnits=function(e){return 1/e},n.TimeBase.prototype._beatsToUnits=function(e){return 60/n.Transport.bpm.value*e},n.TimeBase.prototype._secondsToUnits=function(e){return e},n.TimeBase.prototype._ticksToUnits=function(e){return e*(this._beatsToUnits(1)/n.Transport.PPQ)},n.TimeBase.prototype._timeSignature=function(){return n.Transport.timeSignature},n.TimeBase.prototype._pushExpr=function(e,t,r){return e instanceof n.TimeBase||(e=new this.constructor(e,r)),this._expr=this._binaryExpressions[t].method.bind(this,this._expr,e._expr),this},n.TimeBase.prototype.add=function(e,t){return this._pushExpr(e,"+",t)},n.TimeBase.prototype.sub=function(e,t){return this._pushExpr(e,"-",t)},n.TimeBase.prototype.mult=function(e,t){return this._pushExpr(e,"*",t)},n.TimeBase.prototype.div=function(e,t){return this._pushExpr(e,"/",t)},n.TimeBase.prototype.valueOf=function(){return this._expr()},n.TimeBase.prototype.dispose=function(){this._expr=null},n.TimeBase}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(a){"use strict";return a.Param=function(){var t=this.optionsObject(arguments,["param","units","convert"],a.Param.defaults);this._param=this.input=t.param,this.units=t.units,this.convert=t.convert,this.overridden=!1,this._lfo=null,this.isObject(t.lfo)?this.value=t.lfo:this.isUndef(t.value)||(this.value=t.value)},a.extend(a.Param),a.Param.defaults={units:a.Type.Default,convert:!0,param:void 0},Object.defineProperty(a.Param.prototype,"value",{get:function(){return this._toUnits(this._param.value)},set:function(t){if(this.isObject(t)){if(this.isUndef(a.LFO))throw new Error("Include 'Tone.LFO' to use an LFO as a Param value.");this._lfo&&this._lfo.dispose(),this._lfo=new a.LFO(t).start(),this._lfo.connect(this.input)}else{var e=this._fromUnits(t);this._param.cancelScheduledValues(0),this._param.value=e}}}),a.Param.prototype._fromUnits=function(t){if(!this.convert&&!this.isUndef(this.convert))return t;switch(this.units){case a.Type.Time:return this.toSeconds(t);case a.Type.Frequency:return this.toFrequency(t);case a.Type.Decibels:return this.dbToGain(t);case a.Type.NormalRange:return Math.min(Math.max(t,0),1);case a.Type.AudioRange:return Math.min(Math.max(t,-1),1);case a.Type.Positive:return Math.max(t,0);default:return t}},a.Param.prototype._toUnits=function(t){if(!this.convert&&!this.isUndef(this.convert))return t;switch(this.units){case a.Type.Decibels:return this.gainToDb(t);default:return t}},a.Param.prototype._minOutput=1e-5,a.Param.prototype.setValueAtTime=function(t,e){return t=this._fromUnits(t),(e=this.toSeconds(e))<=this.now()+this.blockTime?this._param.value=t:this._param.setValueAtTime(t,e),this},a.Param.prototype.setRampPoint=function(t){t=this.defaultArg(t,this.now());var e=this._param.value;return 0===e&&(e=this._minOutput),this._param.setValueAtTime(e,t),this},a.Param.prototype.linearRampToValueAtTime=function(t,e){return t=this._fromUnits(t),this._param.linearRampToValueAtTime(t,this.toSeconds(e)),this},a.Param.prototype.exponentialRampToValueAtTime=function(t,e){return t=this._fromUnits(t),t=Math.max(this._minOutput,t),this._param.exponentialRampToValueAtTime(t,this.toSeconds(e)),this},a.Param.prototype.exponentialRampToValue=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.exponentialRampToValueAtTime(t,i+this.toSeconds(e)),this},a.Param.prototype.linearRampToValue=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.linearRampToValueAtTime(t,i+this.toSeconds(e)),this},a.Param.prototype.setTargetAtTime=function(t,e,i){return t=this._fromUnits(t),t=Math.max(this._minOutput,t),i=Math.max(this._minOutput,i),this._param.setTargetAtTime(t,this.toSeconds(e),i),this},a.Param.prototype.setValueCurveAtTime=function(t,e,i){for(var a=0;a<t.length;a++)t[a]=this._fromUnits(t[a]);return this._param.setValueCurveAtTime(t,this.toSeconds(e),this.toSeconds(i)),this},a.Param.prototype.cancelScheduledValues=function(t){return this._param.cancelScheduledValues(this.toSeconds(t)),this},a.Param.prototype.rampTo=function(t,e,i){return e=this.defaultArg(e,0),this.units===a.Type.Frequency||this.units===a.Type.BPM||this.units===a.Type.Decibels?this.exponentialRampToValue(t,e,i):this.linearRampToValue(t,e,i),this},Object.defineProperty(a.Param.prototype,"lfo",{get:function(){return this._lfo}}),a.Param.prototype.dispose=function(){return a.prototype.dispose.call(this),this._param=null,this._lfo&&(this._lfo.dispose(),this._lfo=null),this},a.Param}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var Add = __webpack_require__(7);

  var Mult = __webpack_require__(3);

  var Scale = __webpack_require__(13);
  /**
   *  <p>Creates a signal that oscillates between -1.0 and 1.0.
   *  By default, the oscillation takes the form of a sinusoidal
   *  shape ('sine'). Additional types include 'triangle',
   *  'sawtooth' and 'square'. The frequency defaults to
   *  440 oscillations per second (440Hz, equal to the pitch of an
   *  'A' note).</p>
   *
   *  <p>Set the type of oscillation with setType(), or by instantiating a
   *  specific oscillator: <a href="/reference/#/p5.SinOsc">p5.SinOsc</a>, <a
   *  href="/reference/#/p5.TriOsc">p5.TriOsc</a>, <a
   *  href="/reference/#/p5.SqrOsc">p5.SqrOsc</a>, or <a
   *  href="/reference/#/p5.SawOsc">p5.SawOsc</a>.
   *  </p>
   *
   *  @class p5.Oscillator
   *  @constructor
   *  @param {Number} [freq] frequency defaults to 440Hz
   *  @param {String} [type] type of oscillator. Options:
   *                         'sine' (default), 'triangle',
   *                         'sawtooth', 'square'
   *  @example
   *  <div><code>
   *  let osc, playing, freq, amp;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playOscillator);
   *    osc = new p5.Oscillator('sine');
   *  }
   *
   *  function draw() {
   *    background(220)
   *    freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
   *    amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);
   *
   *    text('tap to play', 20, 20);
   *    text('freq: ' + freq, 20, 40);
   *    text('amp: ' + amp, 20, 60);
   *
   *    if (playing) {
   *      // smooth the transitions by 0.1 seconds
   *      osc.freq(freq, 0.1);
   *      osc.amp(amp, 0.1);
   *    }
   *  }
   *
   *  function playOscillator() {
   *    // starting an oscillator on a user gesture will enable audio
   *    // in browsers that have a strict autoplay policy.
   *    // See also: userStartAudio();
   *    osc.start();
   *    playing = true;
   *  }
   *
   *  function mouseReleased() {
   *    // ramp amplitude to 0 over 0.5 seconds
   *    osc.amp(0, 0.5);
   *    playing = false;
   *  }
   *  </code> </div>
   */


  p5.Oscillator = function (freq, type) {
    if (typeof freq === 'string') {
      var f = type;
      type = freq;
      freq = f;
    }

    if (typeof type === 'number') {
      var f = type;
      type = freq;
      freq = f;
    }

    this.started = false; 

    this.phaseAmount = undefined;
    this.oscillator = p5sound.audiocontext.createOscillator();
    this.f = freq || 440.0; 

    this.oscillator.type = type || 'sine';
    this.oscillator.frequency.setValueAtTime(this.f, p5sound.audiocontext.currentTime); 

    this.output = p5sound.audiocontext.createGain();
    this._freqMods = []; 

    this.output.gain.value = 0.5;
    this.output.gain.setValueAtTime(0.5, p5sound.audiocontext.currentTime);
    this.oscillator.connect(this.output); 

    this.panPosition = 0.0;
    this.connection = p5sound.input; 

    this.panner = new p5.Panner(this.output, this.connection, 1); 

    this.mathOps = [this.output]; 

    p5sound.soundArray.push(this);
  };
  /**
   *  Start an oscillator.
   *
   *  Starting an oscillator on a user gesture will enable audio in browsers
   *  that have a strict autoplay policy, including Chrome and most mobile
   *  devices. See also: `userStartAudio()`.
   *
   *  @method  start
   *  @for p5.Oscillator
   *  @param  {Number} [time] startTime in seconds from now.
   *  @param  {Number} [frequency] frequency in Hz.
   */


  p5.Oscillator.prototype.start = function (time, f) {
    if (this.started) {
      var now = p5sound.audiocontext.currentTime;
      this.stop(now);
    }

    if (!this.started) {
      var freq = f || this.f;
      var type = this.oscillator.type; 

      if (this.oscillator) {
        this.oscillator.disconnect();
        delete this.oscillator;
      } 


      this.oscillator = p5sound.audiocontext.createOscillator();
      this.oscillator.frequency.value = Math.abs(freq);
      this.oscillator.type = type; 

      this.oscillator.connect(this.output);
      time = time || 0;
      this.oscillator.start(time + p5sound.audiocontext.currentTime);
      this.freqNode = this.oscillator.frequency; 

      for (var i in this._freqMods) {
        if (typeof this._freqMods[i].connect !== 'undefined') {
          this._freqMods[i].connect(this.oscillator.frequency);
        }
      }

      this.started = true;
    }
  };
  /**
   *  Stop an oscillator. Accepts an optional parameter
   *  to determine how long (in seconds from now) until the
   *  oscillator stops.
   *
   *  @method  stop
   *  @for p5.Oscillator
   *  @param  {Number} secondsFromNow Time, in seconds from now.
   */


  p5.Oscillator.prototype.stop = function (time) {
    if (this.started) {
      var t = time || 0;
      var now = p5sound.audiocontext.currentTime;
      this.oscillator.stop(t + now);
      this.started = false;
    }
  };
  /**
   *  Set the amplitude between 0 and 1.0. Or, pass in an object
   *  such as an oscillator to modulate amplitude with an audio signal.
   *
   *  @method  amp
   *  @for p5.Oscillator
   *  @param  {Number|Object} vol between 0 and 1.0
   *                              or a modulating signal/oscillator
   *  @param {Number} [rampTime] create a fade that lasts rampTime
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   *  @return  {AudioParam} gain  If no value is provided,
   *                              returns the Web Audio API
   *                              AudioParam that controls
   *                              this oscillator's
   *                              gain/amplitude/volume)
   */


  p5.Oscillator.prototype.amp = function (vol, rampTime, tFromNow) {
    var self = this;

    if (typeof vol === 'number') {
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var now = p5sound.audiocontext.currentTime;
      this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
    } else if (vol) {
      vol.connect(self.output.gain);
    } else {
      return this.output.gain;
    }
  }; 


  p5.Oscillator.prototype.fade = p5.Oscillator.prototype.amp;

  p5.Oscillator.prototype.getAmp = function () {
    return this.output.gain.value;
  };
  /**
   *  Set frequency of an oscillator to a value. Or, pass in an object
   *  such as an oscillator to modulate the frequency with an audio signal.
   *
   *  @method  freq
   *  @for p5.Oscillator
   *  @param  {Number|Object} Frequency Frequency in Hz
   *                                        or modulating signal/oscillator
   *  @param  {Number} [rampTime] Ramp time (in seconds)
   *  @param  {Number} [timeFromNow] Schedule this event to happen
   *                                   at x seconds from now
   *  @return  {AudioParam} Frequency If no value is provided,
   *                                  returns the Web Audio API
   *                                  AudioParam that controls
   *                                  this oscillator's frequency
   *  @example
   *  <div><code>
   *  let osc;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playOscillator);
   *    osc = new p5.Oscillator(300);
   *    background(220);
   *    text('tap to play', 20, 20);
   *  }
   *
   *  function playOscillator() {
   *    osc.start();
   *    osc.amp(0.5);
   *    // start at 700Hz
   *    osc.freq(700);
   *    // ramp to 60Hz over 0.7 seconds
   *    osc.freq(60, 0.7);
   *    osc.amp(0, 0.1, 0.7);
   *  }
   *  </code></div>
   */


  p5.Oscillator.prototype.freq = function (val, rampTime, tFromNow) {
    if (typeof val === 'number' && !isNaN(val)) {
      this.f = val;
      var now = p5sound.audiocontext.currentTime;
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var t = now + tFromNow + rampTime; 

      if (rampTime === 0) {
        this.oscillator.frequency.setValueAtTime(val, tFromNow + now);
      } else {
        if (val > 0) {
          this.oscillator.frequency.exponentialRampToValueAtTime(val, tFromNow + rampTime + now);
        } else {
          this.oscillator.frequency.linearRampToValueAtTime(val, tFromNow + rampTime + now);
        }
      } 


      if (this.phaseAmount) {
        this.phase(this.phaseAmount);
      }
    } else if (val) {
      if (val.output) {
        val = val.output;
      }

      val.connect(this.oscillator.frequency); 

      this._freqMods.push(val);
    } else {
      return this.oscillator.frequency;
    }
  };

  p5.Oscillator.prototype.getFreq = function () {
    return this.oscillator.frequency.value;
  };
  /**
   *  Set type to 'sine', 'triangle', 'sawtooth' or 'square'.
   *
   *  @method  setType
   *  @for p5.Oscillator
   *  @param {String} type 'sine', 'triangle', 'sawtooth' or 'square'.
   */


  p5.Oscillator.prototype.setType = function (type) {
    this.oscillator.type = type;
  };

  p5.Oscillator.prototype.getType = function () {
    return this.oscillator.type;
  };
  /**
   *  Connect to a p5.sound / Web Audio object.
   *
   *  @method  connect
   *  @for p5.Oscillator
   *  @param  {Object} unit A p5.sound or Web Audio object
   */


  p5.Oscillator.prototype.connect = function (unit) {
    if (!unit) {
      this.panner.connect(p5sound.input);
    } else if (unit.hasOwnProperty('input')) {
      this.panner.connect(unit.input);
      this.connection = unit.input;
    } else {
      this.panner.connect(unit);
      this.connection = unit;
    }
  };
  /**
   *  Disconnect all outputs
   *
   *  @method  disconnect
   *  @for p5.Oscillator
   */


  p5.Oscillator.prototype.disconnect = function () {
    if (this.output) {
      this.output.disconnect();
    }

    if (this.panner) {
      this.panner.disconnect();

      if (this.output) {
        this.output.connect(this.panner);
      }
    }

    this.oscMods = [];
  };
  /**
   *  Pan between Left (-1) and Right (1)
   *
   *  @method  pan
   *  @for p5.Oscillator
   *  @param  {Number} panning Number between -1 and 1
   *  @param  {Number} timeFromNow schedule this event to happen
   *                                seconds from now
   */


  p5.Oscillator.prototype.pan = function (pval, tFromNow) {
    this.panPosition = pval;
    this.panner.pan(pval, tFromNow);
  };

  p5.Oscillator.prototype.getPan = function () {
    return this.panPosition;
  }; 


  p5.Oscillator.prototype.dispose = function () {
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);

    if (this.oscillator) {
      var now = p5sound.audiocontext.currentTime;
      this.stop(now);
      this.disconnect();
      this.panner = null;
      this.oscillator = null;
    } 


    if (this.osc2) {
      this.osc2.dispose();
    }
  };
  /**
   *  Set the phase of an oscillator between 0.0 and 1.0.
   *  In this implementation, phase is a delay time
   *  based on the oscillator's current frequency.
   *
   *  @method  phase
   *  @for p5.Oscillator
   *  @param  {Number} phase float between 0.0 and 1.0
   */


  p5.Oscillator.prototype.phase = function (p) {
    var delayAmt = p5.prototype.map(p, 0, 1.0, 0, 1 / this.f);
    var now = p5sound.audiocontext.currentTime;
    this.phaseAmount = p;

    if (!this.dNode) {
      this.dNode = p5sound.audiocontext.createDelay(); 

      this.oscillator.disconnect();
      this.oscillator.connect(this.dNode);
      this.dNode.connect(this.output);
    } 


    this.dNode.delayTime.setValueAtTime(delayAmt, now);
  }; 


  var sigChain = function sigChain(o, mathObj, thisChain, nextChain, type) {
    var chainSource = o.oscillator; 

    for (var i in o.mathOps) {
      if (o.mathOps[i] instanceof type) {
        chainSource.disconnect();
        o.mathOps[i].dispose();
        thisChain = i; 

        if (thisChain < o.mathOps.length - 2) {
          nextChain = o.mathOps[i + 1];
        }
      }
    }

    if (thisChain === o.mathOps.length - 1) {
      o.mathOps.push(nextChain);
    } 


    if (i > 0) {
      chainSource = o.mathOps[i - 1];
    }

    chainSource.disconnect();
    chainSource.connect(mathObj);
    mathObj.connect(nextChain);
    o.mathOps[thisChain] = mathObj;
    return o;
  };
  /**
   *  Add a value to the p5.Oscillator's output amplitude,
   *  and return the oscillator. Calling this method again
   *  will override the initial add() with a new value.
   *
   *  @method  add
   *  @for p5.Oscillator
   *  @param {Number} number Constant number to add
   *  @return {p5.Oscillator} Oscillator Returns this oscillator
   *                                     with scaled output
   *
   */


  p5.Oscillator.prototype.add = function (num) {
    var add = new Add(num);
    var thisChain = this.mathOps.length - 1;
    var nextChain = this.output;
    return sigChain(this, add, thisChain, nextChain, Add);
  };
  /**
   *  Multiply the p5.Oscillator's output amplitude
   *  by a fixed value (i.e. turn it up!). Calling this method
   *  again will override the initial mult() with a new value.
   *
   *  @method  mult
   *  @for p5.Oscillator
   *  @param {Number} number Constant number to multiply
   *  @return {p5.Oscillator} Oscillator Returns this oscillator
   *                                     with multiplied output
   */


  p5.Oscillator.prototype.mult = function (num) {
    var mult = new Mult(num);
    var thisChain = this.mathOps.length - 1;
    var nextChain = this.output;
    return sigChain(this, mult, thisChain, nextChain, Mult);
  };
  /**
   *  Scale this oscillator's amplitude values to a given
   *  range, and return the oscillator. Calling this method
   *  again will override the initial scale() with new values.
   *
   *  @method  scale
   *  @for p5.Oscillator
   *  @param  {Number} inMin  input range minumum
   *  @param  {Number} inMax  input range maximum
   *  @param  {Number} outMin input range minumum
   *  @param  {Number} outMax input range maximum
   *  @return {p5.Oscillator} Oscillator Returns this oscillator
   *                                     with scaled output
   */


  p5.Oscillator.prototype.scale = function (inMin, inMax, outMin, outMax) {
    var mapOutMin, mapOutMax;

    if (arguments.length === 4) {
      mapOutMin = p5.prototype.map(outMin, inMin, inMax, 0, 1) - 0.5;
      mapOutMax = p5.prototype.map(outMax, inMin, inMax, 0, 1) - 0.5;
    } else {
      mapOutMin = arguments[0];
      mapOutMax = arguments[1];
    }

    var scale = new Scale(mapOutMin, mapOutMax);
    var thisChain = this.mathOps.length - 1;
    var nextChain = this.output;
    return sigChain(this, scale, thisChain, nextChain, Scale); 
  }; 

  /**
   *  Constructor: <code>new p5.SinOsc()</code>.
   *  This creates a Sine Wave Oscillator and is
   *  equivalent to <code> new p5.Oscillator('sine')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('sine')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @class  p5.SinOsc
   *  @constructor
   *  @extends p5.Oscillator
   *  @param {Number} [freq] Set the frequency
   */


  p5.SinOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'sine');
  };

  p5.SinOsc.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Constructor: <code>new p5.TriOsc()</code>.
   *  This creates a Triangle Wave Oscillator and is
   *  equivalent to <code>new p5.Oscillator('triangle')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('triangle')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @class  p5.TriOsc
   *  @constructor
   *  @extends p5.Oscillator
   *  @param {Number} [freq] Set the frequency
   */

  p5.TriOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'triangle');
  };

  p5.TriOsc.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Constructor: <code>new p5.SawOsc()</code>.
   *  This creates a SawTooth Wave Oscillator and is
   *  equivalent to <code> new p5.Oscillator('sawtooth')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('sawtooth')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @class  p5.SawOsc
   *  @constructor
   *  @extends p5.Oscillator
   *  @param {Number} [freq] Set the frequency
   */

  p5.SawOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'sawtooth');
  };

  p5.SawOsc.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Constructor: <code>new p5.SqrOsc()</code>.
   *  This creates a Square Wave Oscillator and is
   *  equivalent to <code> new p5.Oscillator('square')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('square')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @class  p5.SqrOsc
   *  @constructor
   *  @extends p5.Oscillator
   *  @param {Number} [freq] Set the frequency
   */

  p5.SqrOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'square');
  };

  p5.SqrOsc.prototype = Object.create(p5.Oscillator.prototype);
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i){"use strict";return i.Timeline=function(){var e=this.optionsObject(arguments,["memory"],i.Timeline.defaults);this._timeline=[],this._toRemove=[],this._iterating=!1,this.memory=e.memory},i.extend(i.Timeline),i.Timeline.defaults={memory:1/0},Object.defineProperty(i.Timeline.prototype,"length",{get:function(){return this._timeline.length}}),i.Timeline.prototype.add=function(e){if(this.isUndef(e.time))throw new Error("Tone.Timeline: events must have a time attribute");if(this._timeline.length){var i=this._search(e.time);this._timeline.splice(i+1,0,e)}else this._timeline.push(e);if(this.length>this.memory){var t=this.length-this.memory;this._timeline.splice(0,t)}return this},i.Timeline.prototype.remove=function(e){if(this._iterating)this._toRemove.push(e);else{var i=this._timeline.indexOf(e);-1!==i&&this._timeline.splice(i,1)}return this},i.Timeline.prototype.get=function(e){var i=this._search(e);return-1!==i?this._timeline[i]:null},i.Timeline.prototype.peek=function(){return this._timeline[0]},i.Timeline.prototype.shift=function(){return this._timeline.shift()},i.Timeline.prototype.getAfter=function(e){var i=this._search(e);return i+1<this._timeline.length?this._timeline[i+1]:null},i.Timeline.prototype.getBefore=function(e){var i=this._timeline.length;if(0<i&&this._timeline[i-1].time<e)return this._timeline[i-1];var t=this._search(e);return 0<=t-1?this._timeline[t-1]:null},i.Timeline.prototype.cancel=function(e){if(1<this._timeline.length){var i=this._search(e);if(0<=i)if(this._timeline[i].time===e){for(var t=i;0<=t&&this._timeline[t].time===e;t--)i=t;this._timeline=this._timeline.slice(0,i)}else this._timeline=this._timeline.slice(0,i+1);else this._timeline=[]}else 1===this._timeline.length&&this._timeline[0].time>=e&&(this._timeline=[]);return this},i.Timeline.prototype.cancelBefore=function(e){if(this._timeline.length){var i=this._search(e);0<=i&&(this._timeline=this._timeline.slice(i+1))}return this},i.Timeline.prototype._search=function(e){var i=0,t=this._timeline.length,n=t;if(0<t&&this._timeline[t-1].time<=e)return t-1;for(;i<n;){var r=Math.floor(i+(n-i)/2),s=this._timeline[r],h=this._timeline[r+1];if(s.time===e){for(var l=r;l<this._timeline.length;l++){this._timeline[l].time===e&&(r=l)}return r}if(s.time<e&&h.time>e)return r;s.time>e?n=r:s.time<e&&(i=r+1)}return-1},i.Timeline.prototype._iterate=function(e,i,t){this._iterating=!0,i=this.defaultArg(i,0),t=this.defaultArg(t,this._timeline.length-1);for(var n=i;n<=t;n++)e(this._timeline[n]);if(this._iterating=!1,0<this._toRemove.length){for(var r=0;r<this._toRemove.length;r++){var s=this._timeline.indexOf(this._toRemove[r]);-1!==s&&this._timeline.splice(s,1)}this._toRemove=[]}},i.Timeline.prototype.forEach=function(e){return this._iterate(e),this},i.Timeline.prototype.forEachBefore=function(e,i){var t=this._search(e);return-1!==t&&this._iterate(i,0,t),this},i.Timeline.prototype.forEachAfter=function(e,i){var t=this._search(e);return this._iterate(i,t+1),this},i.Timeline.prototype.forEachFrom=function(e,i){for(var t=this._search(e);0<=t&&this._timeline[t].time>=e;)t--;return this._iterate(i,t+1),this},i.Timeline.prototype.forEachAtTime=function(i,t){var e=this._search(i);return-1!==e&&this._iterate(function(e){e.time===i&&t(e)},0,e),this},i.Timeline.prototype.dispose=function(){i.prototype.dispose.call(this),this._timeline=null,this._toRemove=null},i.Timeline}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(3),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t){"use strict";return t.Negate=function(){this._multiply=this.input=this.output=new t.Multiply(-1)},t.extend(t.Negate,t.SignalBase),t.Negate.prototype.dispose=function(){return t.prototype.dispose.call(this),this._multiply.dispose(),this._multiply=null,this},t.Negate}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(2),__webpack_require__(3),__webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e){"use strict";return e.GreaterThanZero=function(){this._thresh=this.output=new e.WaveShaper(function(e){return e<=0?0:1},127),this._scale=this.input=new e.Multiply(1e4),this._scale.connect(this._thresh)},e.extend(e.GreaterThanZero,e.SignalBase),e.GreaterThanZero.prototype.dispose=function(){return e.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._thresh.dispose(),this._thresh=null,this},e.GreaterThanZero}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(14),__webpack_require__(66),__webpack_require__(18),__webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o){"use strict";return o.Clock=function(){o.Emitter.call(this);var t=this.optionsObject(arguments,["callback","frequency"],o.Clock.defaults);this.callback=t.callback,this._nextTick=0,this._lastState=o.State.Stopped,this.frequency=new o.TimelineSignal(t.frequency,o.Type.Frequency),this._readOnly("frequency"),this.ticks=0,this._state=new o.TimelineState(o.State.Stopped),this._boundLoop=this._loop.bind(this),this.context.on("tick",this._boundLoop)},o.extend(o.Clock,o.Emitter),o.Clock.defaults={callback:o.noOp,frequency:1,lookAhead:"auto"},Object.defineProperty(o.Clock.prototype,"state",{get:function(){return this._state.getValueAtTime(this.now())}}),o.Clock.prototype.start=function(t,e){return t=this.toSeconds(t),this._state.getValueAtTime(t)!==o.State.Started&&this._state.add({state:o.State.Started,time:t,offset:e}),this},o.Clock.prototype.stop=function(t){return t=this.toSeconds(t),this._state.cancel(t),this._state.setStateAtTime(o.State.Stopped,t),this},o.Clock.prototype.pause=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)===o.State.Started&&this._state.setStateAtTime(o.State.Paused,t),this},o.Clock.prototype._loop=function(){for(var t=this.now()+this.context.lookAhead+this.context.updateInterval+2*this.context.lag;t>this._nextTick&&this._state;){var e=this._state.getValueAtTime(this._nextTick);if(e!==this._lastState){this._lastState=e;var i=this._state.get(this._nextTick);e===o.State.Started?(this._nextTick=i.time,this.isUndef(i.offset)||(this.ticks=i.offset),this.emit("start",i.time,this.ticks)):e===o.State.Stopped?(this.ticks=0,this.emit("stop",i.time)):e===o.State.Paused&&this.emit("pause",i.time)}var s=this._nextTick;this.frequency&&(this._nextTick+=1/this.frequency.getValueAtTime(this._nextTick),e===o.State.Started&&(this.callback(s),this.ticks++))}},o.Clock.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)},o.Clock.prototype.dispose=function(){o.Emitter.prototype.dispose.call(this),this.context.off("tick",this._boundLoop),this._writable("frequency"),this.frequency.dispose(),this.frequency=null,this._boundLoop=null,this._nextTick=1/0,this.callback=null,this._state.dispose(),this._state=null},o.Clock}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var AudioVoice = __webpack_require__(29);

  var noteToFreq = __webpack_require__(6).noteToFreq;

  var DEFAULT_SUSTAIN = 0.15;
  /**
    *  A MonoSynth is used as a single voice for sound synthesis.
    *  This is a class to be used in conjunction with the PolySynth
    *  class. Custom synthetisers should be built inheriting from
    *  this class.
    *
    *  @class p5.MonoSynth
    *  @constructor
    *  @example
    *  <div><code>
    *  let monoSynth;
    *
    *  function setup() {
    *    let cnv = createCanvas(100, 100);
    *    cnv.mousePressed(playSynth);
    *    background(220);
    *    textAlign(CENTER);
    *    text('tap to play', width/2, height/2);
    *
    *    monoSynth = new p5.MonoSynth();
    *  }
    *
    *  function playSynth() {
    *    userStartAudio();
    *
    *    let note = random(['Fb4', 'G4']);
    *    // note velocity (volume, from 0 to 1)
    *    let velocity = random();
    *    // time from now (in seconds)
    *    let time = 0;
    *    // note duration (in seconds)
    *    let dur = 1/6;
    *
    *    monoSynth.play(note, velocity, time, dur);
    *  }
    *  </code></div>
    **/

  p5.MonoSynth = function () {
    AudioVoice.call(this);
    this.oscillator = new p5.Oscillator();
    this.env = new p5.Envelope();
    this.env.setRange(1, 0);
    this.env.setExp(true); 

    this.setADSR(0.02, 0.25, 0.05, 0.35); 

    this.oscillator.disconnect();
    this.oscillator.connect(this.output);
    this.env.disconnect();
    this.env.setInput(this.output.gain); 

    this.oscillator.output.gain.value = 1.0;
    this.oscillator.start();
    this.connect();
    p5sound.soundArray.push(this);
  };

  p5.MonoSynth.prototype = Object.create(p5.AudioVoice.prototype);
  /**
    *  Play tells the MonoSynth to start playing a note. This method schedules
    *  the calling of .triggerAttack and .triggerRelease.
    *
    *  @method play
    *  @for p5.MonoSynth
    *  @param {String | Number} note the note you want to play, specified as a
    *                                 frequency in Hertz (Number) or as a midi
    *                                 value in Note/Octave format ("C4", "Eb3"...etc")
    *                                 See <a href = "https://github.com/Tonejs/Tone.js/wiki/Instruments">
    *                                 Tone</a>. Defaults to 440 hz.
    *  @param  {Number} [velocity] velocity of the note to play (ranging from 0 to 1)
    *  @param  {Number} [secondsFromNow]  time from now (in seconds) at which to play
    *  @param  {Number} [sustainTime] time to sustain before releasing the envelope. Defaults to 0.15 seconds.
    *  @example
    *  <div><code>
    *  let monoSynth;
    *
    *  function setup() {
    *    let cnv = createCanvas(100, 100);
    *    cnv.mousePressed(playSynth);
    *    background(220);
    *    textAlign(CENTER);
    *    text('tap to play', width/2, height/2);
    *
    *    monoSynth = new p5.MonoSynth();
    *  }
    *
    *  function playSynth() {
    *    userStartAudio();
    *
    *    let note = random(['Fb4', 'G4']);
    *    // note velocity (volume, from 0 to 1)
    *    let velocity = random();
    *    // time from now (in seconds)
    *    let time = 0;
    *    // note duration (in seconds)
    *    let dur = 1/6;
    *
    *    monoSynth.play(note, velocity, time, dur);
    *  }
    *  </code></div>
    *
    */

  p5.MonoSynth.prototype.play = function (note, velocity, secondsFromNow, susTime) {
    this.triggerAttack(note, velocity, ~~secondsFromNow);
    this.triggerRelease(~~secondsFromNow + (susTime || DEFAULT_SUSTAIN));
  };
  /**
     *  Trigger the Attack, and Decay portion of the Envelope.
     *  Similar to holding down a key on a piano, but it will
     *  hold the sustain level until you let go.
     *
     *  @param {String | Number} note the note you want to play, specified as a
     *                                 frequency in Hertz (Number) or as a midi
     *                                 value in Note/Octave format ("C4", "Eb3"...etc")
     *                                 See <a href = "https://github.com/Tonejs/Tone.js/wiki/Instruments">
     *                                 Tone</a>. Defaults to 440 hz
     *  @param  {Number} [velocity] velocity of the note to play (ranging from 0 to 1)
     *  @param  {Number} [secondsFromNow]  time from now (in seconds) at which to play
     *  @method  triggerAttack
     *  @for p5.MonoSynth
     *  @example
     *  <div><code>
     *  let monoSynth;
     *
     *  function setup() {
     *    let cnv = createCanvas(100, 100);
     *    cnv.mousePressed(triggerAttack);
     *    background(220);
     *    text('tap here for attack, let go to release', 5, 20, width - 20);
     *    monoSynth = new p5.MonoSynth();
     *  }
     *
     *  function triggerAttack() {
     *    userStartAudio();
     *
     *    monoSynth.triggerAttack("E3");
     *  }
     *
     *  function mouseReleased() {
     *    monoSynth.triggerRelease();
     *  }
     *  </code></div>
     */


  p5.MonoSynth.prototype.triggerAttack = function (note, velocity, secondsFromNow) {
    var secondsFromNow = ~~secondsFromNow;
    var freq = noteToFreq(note);
    var vel = velocity || 0.1;
    this.oscillator.freq(freq, 0, secondsFromNow);
    this.env.ramp(this.output.gain, secondsFromNow, vel);
  };
  /**
     *  Trigger the release of the Envelope. This is similar to releasing
     *  the key on a piano and letting the sound fade according to the
     *  release level and release time.
     *
     *  @param  {Number} secondsFromNow time to trigger the release
     *  @method  triggerRelease
     *  @for p5.MonoSynth
     *  @example
     *  <div><code>
     *  let monoSynth;
     *
     *  function setup() {
     *    let cnv = createCanvas(100, 100);
     *    cnv.mousePressed(triggerAttack);
     *    background(220);
     *    text('tap here for attack, let go to release', 5, 20, width - 20);
     *    monoSynth = new p5.MonoSynth();
     *  }
     *
     *  function triggerAttack() {
     *    userStartAudio();
     *
     *    monoSynth.triggerAttack("E3");
     *  }
     *
     *  function mouseReleased() {
     *    monoSynth.triggerRelease();
     *  }
     *  </code></div>
     */


  p5.MonoSynth.prototype.triggerRelease = function (secondsFromNow) {
    var secondsFromNow = secondsFromNow || 0;
    this.env.ramp(this.output.gain, secondsFromNow, 0);
  };
  /**
     *  Set values like a traditional
     *  <a href="https://en.wikipedia.org/wiki/Synthesizer#/media/File:ADSR_parameter.svg">
     *  ADSR envelope
     *  </a>.
     *
     *  @method  setADSR
     *  @for p5.MonoSynth
     *  @param {Number} attackTime    Time (in seconds before envelope
     *                                reaches Attack Level
     *  @param {Number} [decayTime]    Time (in seconds) before envelope
     *                                reaches Decay/Sustain Level
     *  @param {Number} [susRatio]    Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,
     *                                where 1.0 = attackLevel, 0.0 = releaseLevel.
     *                                The susRatio determines the decayLevel and the level at which the
     *                                sustain portion of the envelope will sustain.
     *                                For example, if attackLevel is 0.4, releaseLevel is 0,
     *                                and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is
     *                                increased to 1.0 (using <code>setRange</code>),
     *                                then decayLevel would increase proportionally, to become 0.5.
     *  @param {Number} [releaseTime]   Time in seconds from now (defaults to 0)
     */


  p5.MonoSynth.prototype.setADSR = function (attack, decay, sustain, release) {
    this.env.setADSR(attack, decay, sustain, release);
  };
  /**
   * Getters and Setters
   * @property {Number} attack
   * @for p5.MonoSynth
   */

  /**
   * @property {Number} decay
   * @for p5.MonoSynth
   */

  /**
   * @property {Number} sustain
   * @for p5.MonoSynth
   */

  /**
   * @property {Number} release
   * @for p5.MonoSynth
   */


  Object.defineProperties(p5.MonoSynth.prototype, {
    'attack': {
      get: function get() {
        return this.env.aTime;
      },
      set: function set(attack) {
        this.env.setADSR(attack, this.env.dTime, this.env.sPercent, this.env.rTime);
      }
    },
    'decay': {
      get: function get() {
        return this.env.dTime;
      },
      set: function set(decay) {
        this.env.setADSR(this.env.aTime, decay, this.env.sPercent, this.env.rTime);
      }
    },
    'sustain': {
      get: function get() {
        return this.env.sPercent;
      },
      set: function set(sustain) {
        this.env.setADSR(this.env.aTime, this.env.dTime, sustain, this.env.rTime);
      }
    },
    'release': {
      get: function get() {
        return this.env.rTime;
      },
      set: function set(release) {
        this.env.setADSR(this.env.aTime, this.env.dTime, this.env.sPercent, release);
      }
    }
  });
  /**
   * MonoSynth amp
   * @method  amp
   * @for p5.MonoSynth
   * @param  {Number} vol      desired volume
   * @param  {Number} [rampTime] Time to reach new volume
   * @return {Number}          new volume value
   */

  p5.MonoSynth.prototype.amp = function (vol, rampTime) {
    var t = rampTime || 0;

    if (typeof vol !== 'undefined') {
      this.oscillator.amp(vol, t);
    }

    return this.oscillator.amp().value;
  };
  /**
   *  Connect to a p5.sound / Web Audio object.
   *
   *  @method  connect
   *  @for p5.MonoSynth
   *  @param  {Object} unit A p5.sound or Web Audio object
   */


  p5.MonoSynth.prototype.connect = function (unit) {
    var u = unit || p5sound.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
   *  Disconnect all outputs
   *
   *  @method  disconnect
   *  @for p5.MonoSynth
   */


  p5.MonoSynth.prototype.disconnect = function () {
    if (this.output) {
      this.output.disconnect();
    }
  };
  /**
   *  Get rid of the MonoSynth and free up its resources / memory.
   *
   *  @method  dispose
   *  @for p5.MonoSynth
   */


  p5.MonoSynth.prototype.dispose = function () {
    AudioVoice.prototype.dispose.apply(this);

    if (this.env) {
      this.env.dispose();
    }

    if (this.oscillator) {
      this.oscillator.dispose();
    }
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var p5sound = __webpack_require__(1);
  /**
   * Base class for monophonic synthesizers. Any extensions of this class
   * should follow the API and implement the methods below in order to
   * remain compatible with p5.PolySynth();
   *
   * @class p5.AudioVoice
   * @constructor
   */


  p5.AudioVoice = function () {
    this.ac = p5sound.audiocontext;
    this.output = this.ac.createGain();
    this.connect();
    p5sound.soundArray.push(this);
  };

  p5.AudioVoice.prototype.play = function (note, velocity, secondsFromNow, sustime) {};

  p5.AudioVoice.prototype.triggerAttack = function (note, velocity, secondsFromNow) {};

  p5.AudioVoice.prototype.triggerRelease = function (secondsFromNow) {};

  p5.AudioVoice.prototype.amp = function (vol, rampTime) {};
  /**
   * Connect to p5 objects or Web Audio Nodes
   * @method  connect
   * @for p5.AudioVoice
   * @param {Object} unit
   */


  p5.AudioVoice.prototype.connect = function (unit) {
    var u = unit || p5sound.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
   * Disconnect from soundOut
   * @method  disconnect
   * @for p5.AudioVoice
   */


  p5.AudioVoice.prototype.disconnect = function () {
    this.output.disconnect();
  };

  p5.AudioVoice.prototype.dispose = function () {
    if (this.output) {
      this.output.disconnect();
      delete this.output;
    }
  };

  return p5.AudioVoice;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var TimelineSignal = __webpack_require__(14);

  var noteToFreq = __webpack_require__(6).noteToFreq;
  /**
    *  An AudioVoice is used as a single voice for sound synthesis.
    *  The PolySynth class holds an array of AudioVoice, and deals
    *  with voices allocations, with setting notes to be played, and
    *  parameters to be set.
    *
    *  @class p5.PolySynth
    *  @constructor
    *
    *  @param {Number} [synthVoice]   A monophonic synth voice inheriting
    *                                 the AudioVoice class. Defaults to p5.MonoSynth
    *  @param {Number} [maxVoices] Number of voices, defaults to 8;
    *  @example
    *  <div><code>
    *  let polySynth;
    *
    *  function setup() {
    *    let cnv = createCanvas(100, 100);
    *    cnv.mousePressed(playSynth);
    *    background(220);
    *    text('click to play', 20, 20);
    *
    *    polySynth = new p5.PolySynth();
    *  }
    *
    *  function playSynth() {
    *    userStartAudio();
    *
    *    // note duration (in seconds)
    *    let dur = 1.5;
    *
    *    // time from now (in seconds)
    *    let time = 0;
    *
    *    // velocity (volume, from 0 to 1)
    *    let vel = 0.1;
    *
    *    // notes can overlap with each other
    *    polySynth.play('G2', vel, 0, dur);
    *    polySynth.play('C3', vel, time += 1/3, dur);
    *    polySynth.play('G3', vel, time += 1/3, dur);
    *  }
    *  </code></div>
    **/


  p5.PolySynth = function (audioVoice, maxVoices) {
    this.audiovoices = [];
    /**
     * An object that holds information about which notes have been played and
     * which notes are currently being played. New notes are added as keys
     * on the fly. While a note has been attacked, but not released, the value of the
     * key is the audiovoice which is generating that note. When notes are released,
     * the value of the key becomes undefined.
     * @property notes
     */

    this.notes = {}; 

    this._newest = 0;
    this._oldest = 0;
    /**
     * A PolySynth must have at least 1 voice, defaults to 8
     * @property polyvalue
     */

    this.maxVoices = maxVoices || 8;
    /**
     * Monosynth that generates the sound for each note that is triggered. The
     * p5.PolySynth defaults to using the p5.MonoSynth as its voice.
     * @property AudioVoice
     */

    this.AudioVoice = audioVoice === undefined ? p5.MonoSynth : audioVoice;
    /**
     * This value must only change as a note is attacked or released. Due to delay
     * and sustain times, Tone.TimelineSignal is required to schedule the change in value.
    * @private
     * @property {Tone.TimelineSignal} _voicesInUse
     */

    this._voicesInUse = new TimelineSignal(0);
    this.output = p5sound.audiocontext.createGain();
    this.connect(); 

    this._allocateVoices();

    p5sound.soundArray.push(this);
  };
  /**
   * Construct the appropriate number of audiovoices
   * @private
   * @for p5.PolySynth
   * @method  _allocateVoices
   */


  p5.PolySynth.prototype._allocateVoices = function () {
    for (var i = 0; i < this.maxVoices; i++) {
      this.audiovoices.push(new this.AudioVoice());
      this.audiovoices[i].disconnect();
      this.audiovoices[i].connect(this.output);
    }
  };
  /**
   *  Play a note by triggering noteAttack and noteRelease with sustain time
   *
   *  @method  play
   *  @for p5.PolySynth
   *  @param  {Number} [note] midi note to play (ranging from 0 to 127 - 60 being a middle C)
   *  @param  {Number} [velocity] velocity of the note to play (ranging from 0 to 1)
   *  @param  {Number} [secondsFromNow]  time from now (in seconds) at which to play
   *  @param  {Number} [sustainTime] time to sustain before releasing the envelope
   *  @example
   *  <div><code>
   *  let polySynth;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playSynth);
   *    background(220);
   *    text('click to play', 20, 20);
   *
   *    polySynth = new p5.PolySynth();
   *  }
   *
   *  function playSynth() {
   *    userStartAudio();
   *
   *    // note duration (in seconds)
   *    let dur = 1.5;
   *
   *    // time from now (in seconds)
   *    let time = 0;
   *
   *    // velocity (volume, from 0 to 1)
   *    let vel = 0.1;
   *
   *    // notes can overlap with each other
   *    polySynth.play('G2', vel, 0, dur);
   *    polySynth.play('C3', vel, time += 1/3, dur);
   *    polySynth.play('G3', vel, time += 1/3, dur);
   *  }
   *  </code></div>
   */


  p5.PolySynth.prototype.play = function (note, velocity, secondsFromNow, susTime) {
    var susTime = susTime || 1;
    this.noteAttack(note, velocity, secondsFromNow);
    this.noteRelease(note, secondsFromNow + susTime);
  };
  /**
   *  noteADSR sets the envelope for a specific note that has just been triggered.
   *  Using this method modifies the envelope of whichever audiovoice is being used
   *  to play the desired note. The envelope should be reset before noteRelease is called
   *  in order to prevent the modified envelope from being used on other notes.
   *
   *  @method  noteADSR
   *  @for p5.PolySynth
   *  @param {Number} [note]        Midi note on which ADSR should be set.
   *  @param {Number} [attackTime]  Time (in seconds before envelope
   *                                reaches Attack Level
   *  @param {Number} [decayTime]   Time (in seconds) before envelope
   *                                reaches Decay/Sustain Level
   *  @param {Number} [susRatio]    Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,
   *                                where 1.0 = attackLevel, 0.0 = releaseLevel.
   *                                The susRatio determines the decayLevel and the level at which the
   *                                sustain portion of the envelope will sustain.
   *                                For example, if attackLevel is 0.4, releaseLevel is 0,
   *                                and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is
   *                                increased to 1.0 (using <code>setRange</code>),
   *                                then decayLevel would increase proportionally, to become 0.5.
   *  @param {Number} [releaseTime]   Time in seconds from now (defaults to 0)
   **/


  p5.PolySynth.prototype.noteADSR = function (note, a, d, s, r, timeFromNow) {
    var now = p5sound.audiocontext.currentTime;
    var timeFromNow = timeFromNow || 0;
    var t = now + timeFromNow;
    this.audiovoices[this.notes[note].getValueAtTime(t)].setADSR(a, d, s, r);
  };
  /**
   * Set the PolySynths global envelope. This method modifies the envelopes of each
   * monosynth so that all notes are played with this envelope.
   *
   *  @method  setADSR
   *  @for p5.PolySynth
   *  @param {Number} [attackTime]  Time (in seconds before envelope
   *                                reaches Attack Level
   *  @param {Number} [decayTime]   Time (in seconds) before envelope
   *                                reaches Decay/Sustain Level
   *  @param {Number} [susRatio]    Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,
   *                                where 1.0 = attackLevel, 0.0 = releaseLevel.
   *                                The susRatio determines the decayLevel and the level at which the
   *                                sustain portion of the envelope will sustain.
   *                                For example, if attackLevel is 0.4, releaseLevel is 0,
   *                                and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is
   *                                increased to 1.0 (using <code>setRange</code>),
   *                                then decayLevel would increase proportionally, to become 0.5.
   *  @param {Number} [releaseTime]   Time in seconds from now (defaults to 0)
   **/


  p5.PolySynth.prototype.setADSR = function (a, d, s, r) {
    this.audiovoices.forEach(function (voice) {
      voice.setADSR(a, d, s, r);
    });
  };
  /**
   *  Trigger the Attack, and Decay portion of a MonoSynth.
   *  Similar to holding down a key on a piano, but it will
   *  hold the sustain level until you let go.
   *
   *  @method  noteAttack
   *  @for p5.PolySynth
   *  @param  {Number} [note]           midi note on which attack should be triggered.
   *  @param  {Number} [velocity]       velocity of the note to play (ranging from 0 to 1)/
   *  @param  {Number} [secondsFromNow] time from now (in seconds)
   *  @example
   *  <div><code>
   *  let polySynth = new p5.PolySynth();
   *  let pitches = ['G', 'D', 'G', 'C'];
   *  let octaves = [2, 3, 4];
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playChord);
   *    background(220);
   *    text('tap to play', 20, 20);
   *  }
   *
   *  function playChord() {
   *    userStartAudio();
   *
   *    // play a chord: multiple notes at the same time
   *    for (let i = 0; i < 4; i++) {
   *      let note = random(pitches) + random(octaves);
   *      polySynth.noteAttack(note, 0.1);
   *    }
   *  }
   *
   *  function mouseReleased() {
   *    // release all voices
   *    polySynth.noteRelease();
   *  }
   *  </code></div>
   */


  p5.PolySynth.prototype.noteAttack = function (_note, _velocity, secondsFromNow) {
    var secondsFromNow = ~~secondsFromNow; 

    var acTime = p5sound.audiocontext.currentTime + secondsFromNow; 

    var note = noteToFreq(_note);
    var velocity = _velocity || 0.1;
    var currentVoice; 

    if (this.notes[note] && this.notes[note].getValueAtTime(acTime) !== null) {
      this.noteRelease(note, 0);
    } 


    if (this._voicesInUse.getValueAtTime(acTime) < this.maxVoices) {
      currentVoice = Math.max(~~this._voicesInUse.getValueAtTime(acTime), 0);
    } 
    else {
        currentVoice = this._oldest;
        var oldestNote = p5.prototype.freqToMidi(this.audiovoices[this._oldest].oscillator.freq().value);
        this.noteRelease(oldestNote);
        this._oldest = (this._oldest + 1) % (this.maxVoices - 1);
      } 


    this.notes[note] = new TimelineSignal();
    this.notes[note].setValueAtTime(currentVoice, acTime); 

    var previousVal = this._voicesInUse._searchBefore(acTime) === null ? 0 : this._voicesInUse._searchBefore(acTime).value;

    this._voicesInUse.setValueAtTime(previousVal + 1, acTime); 


    this._updateAfter(acTime, 1);

    this._newest = currentVoice; 

    if (typeof velocity === 'number') {
      var maxRange = 1 / this._voicesInUse.getValueAtTime(acTime) * 2;
      velocity = velocity > maxRange ? maxRange : velocity;
    }

    this.audiovoices[currentVoice].triggerAttack(note, velocity, secondsFromNow);
  };
  /**
   * Private method to ensure accurate values of this._voicesInUse
   * Any time a new value is scheduled, it is necessary to increment all subsequent
   * scheduledValues after attack, and decrement all subsequent
   * scheduledValues after release
   *
   * @private
   * @for p5.PolySynth
   * @param  {[type]} time  [description]
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */


  p5.PolySynth.prototype._updateAfter = function (time, value) {
    if (this._voicesInUse._searchAfter(time) === null) {
      return;
    } else {
      this._voicesInUse._searchAfter(time).value += value;

      var nextTime = this._voicesInUse._searchAfter(time).time;

      this._updateAfter(nextTime, value);
    }
  };
  /**
   *  Trigger the Release of an AudioVoice note. This is similar to releasing
   *  the key on a piano and letting the sound fade according to the
   *  release level and release time.
   *
   *  @method  noteRelease
   *  @for p5.PolySynth
   *  @param  {Number} [note]           midi note on which attack should be triggered.
   *                                    If no value is provided, all notes will be released.
   *  @param  {Number} [secondsFromNow] time to trigger the release
   *  @example
   *  <div><code>
   *  let polySynth = new p5.PolySynth();
   *  let pitches = ['G', 'D', 'G', 'C'];
   *  let octaves = [2, 3, 4];
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playChord);
   *    background(220);
   *    text('tap to play', 20, 20);
   *  }
   *
   *  function playChord() {
   *    userStartAudio();
   *
   *    // play a chord: multiple notes at the same time
   *    for (let i = 0; i < 4; i++) {
   *      let note = random(pitches) + random(octaves);
   *      polySynth.noteAttack(note, 0.1);
   *    }
   *  }
   *
   *  function mouseReleased() {
   *    // release all voices
   *    polySynth.noteRelease();
   *  }
   *  </code></div>
   *
   */


  p5.PolySynth.prototype.noteRelease = function (_note, secondsFromNow) {
    var now = p5sound.audiocontext.currentTime;
    var tFromNow = secondsFromNow || 0;
    var t = now + tFromNow; 

    if (!_note) {
      this.audiovoices.forEach(function (voice) {
        voice.triggerRelease(tFromNow);
      });

      this._voicesInUse.setValueAtTime(0, t);

      for (var n in this.notes) {
        this.notes[n].dispose();
        delete this.notes[n];
      }

      return;
    } 


    var note = noteToFreq(_note);

    if (!this.notes[note] || this.notes[note].getValueAtTime(t) === null) {
      console.warn('Cannot release a note that is not already playing');
    } else {
      var previousVal = Math.max(~~this._voicesInUse.getValueAtTime(t).value, 1);

      this._voicesInUse.setValueAtTime(previousVal - 1, t); 


      if (previousVal > 0) {
        this._updateAfter(t, -1);
      }

      this.audiovoices[this.notes[note].getValueAtTime(t)].triggerRelease(tFromNow);
      this.notes[note].dispose();
      delete this.notes[note];
      this._newest = this._newest === 0 ? 0 : (this._newest - 1) % (this.maxVoices - 1);
    }
  };
  /**
    *  Connect to a p5.sound / Web Audio object.
    *
    *  @method  connect
    *  @for p5.PolySynth
    *  @param  {Object} unit A p5.sound or Web Audio object
    */


  p5.PolySynth.prototype.connect = function (unit) {
    var u = unit || p5sound.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
  *  Disconnect all outputs
  *
  *  @method  disconnect
  *  @for p5.PolySynth
  */


  p5.PolySynth.prototype.disconnect = function () {
    if (this.output) {
      this.output.disconnect();
    }
  };
  /**
    *  Get rid of the MonoSynth and free up its resources / memory.
    *
    *  @method  dispose
    *  @for p5.PolySynth
    */


  p5.PolySynth.prototype.dispose = function () {
    this.audiovoices.forEach(function (voice) {
      voice.dispose();
    });

    if (this.output) {
      this.output.disconnect();
      delete this.output;
    }
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  __webpack_require__(32);

  __webpack_require__(33);

  __webpack_require__(17);

  var p5SOUND = __webpack_require__(1);

  __webpack_require__(6);

  __webpack_require__(11);

  __webpack_require__(36);

  __webpack_require__(40);

  __webpack_require__(41);

  __webpack_require__(42);

  __webpack_require__(43);

  __webpack_require__(44);

  __webpack_require__(23);

  __webpack_require__(47);

  __webpack_require__(48);

  __webpack_require__(49);

  __webpack_require__(50);

  __webpack_require__(15);

  __webpack_require__(59);

  __webpack_require__(61);

  __webpack_require__(62);

  __webpack_require__(63);

  __webpack_require__(64);

  __webpack_require__(65);

  __webpack_require__(67);

  __webpack_require__(68);

  __webpack_require__(69);

  __webpack_require__(70);

  __webpack_require__(71);

  __webpack_require__(72);

  __webpack_require__(28);

  __webpack_require__(30);

  __webpack_require__(73);

  __webpack_require__(29);

  __webpack_require__(28);

  __webpack_require__(30);

  return p5SOUND;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports) {

!function(){var l,s=[];function p(e){var o=this,n={},i=-1;this.parameters.forEach(function(e,t){var r=s[++i]||(s[i]=new Float32Array(o.bufferSize));r.fill(e.value),n[t]=r}),this.processor.realm.exec("self.sampleRate=sampleRate="+this.context.sampleRate+";self.currentTime=currentTime="+this.context.currentTime);var t=a(e.inputBuffer),r=a(e.outputBuffer);this.instance.process([t],[r],n)}function a(e){for(var t=[],r=0;r<e.numberOfChannels;r++)t[r]=e.getChannelData(r);return t}function f(e){return e.$$processors||(e.$$processors={})}function e(e){this.$$context=e}"function"!=typeof AudioWorkletNode&&(self.AudioWorkletNode=function(e,t,r){var o=f(e)[t],n=e.createScriptProcessor(void 0,2,r&&r.outputChannelCount?r.outputChannelCount[0]:2);if(n.parameters=new Map,o.properties)for(var i=0;i<o.properties.length;i++){var s=o.properties[i],a=e.createGain().gain;a.value=s.defaultValue,n.parameters.set(s.name,a)}var u=new MessageChannel;l=u.port2;var c=new o.Processor(r||{});return l=null,n.port=u.port1,n.processor=o,n.instance=c,n.onaudioprocess=p,n},Object.defineProperty((self.AudioContext||self.webkitAudioContext).prototype,"audioWorklet",{get:function(){return this.$$audioWorklet||(this.$$audioWorklet=new self.AudioWorklet(this))}}),self.AudioWorklet=(e.prototype.addModule=function(e,t){var n=this;return fetch(e).then(function(e){if(!e.ok)throw Error(e.status);return e.text()}).then(function(e){var r={sampleRate:0,currentTime:0,AudioWorkletProcessor:function(){this.port=l},registerProcessor:function(e,t){f(n.$$context)[e]={realm:o,context:r,Processor:t,properties:t.parameterDescriptors||[]}}},o=new function(e,t){var r=document.createElement("iframe");r.style.cssText="position:absolute;left:0;top:-999px;width:1px;height:1px;",t.appendChild(r);var o=r.contentWindow,n=o.document,i="var window,$hook";for(var s in o)s in e||"eval"===s||(i+=",",i+=s);for(var a in e)i+=",",i+=a,i+="=self.",i+=a;var u=n.createElement("script");u.appendChild(n.createTextNode('function $hook(self,console) {"use strict";\n        '+i+";return function() {return eval(arguments[0])}}")),n.body.appendChild(u),this.exec=o.$hook(e,console)}(r.self=r,document.documentElement);return o.exec((t&&t.transpile||String)(e)),null})},e))}();

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * This module has shims
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  (function () {
    function fixSetTarget(param) {
      if (!param) 
        return;
      if (!param.setTargetAtTime) param.setTargetAtTime = param.setTargetValueAtTime;
    }

    if (window.hasOwnProperty('webkitAudioContext') && !window.hasOwnProperty('AudioContext')) {
      window.AudioContext = window.webkitAudioContext;
      if (typeof AudioContext.prototype.createGain !== 'function') AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
      if (typeof AudioContext.prototype.createDelay !== 'function') AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode;
      if (typeof AudioContext.prototype.createScriptProcessor !== 'function') AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode;
      if (typeof AudioContext.prototype.createPeriodicWave !== 'function') AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;
      AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain;

      AudioContext.prototype.createGain = function () {
        var node = this.internal_createGain();
        fixSetTarget(node.gain);
        return node;
      };

      AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay;

      AudioContext.prototype.createDelay = function (maxDelayTime) {
        var node = maxDelayTime ? this.internal_createDelay(maxDelayTime) : this.internal_createDelay();
        fixSetTarget(node.delayTime);
        return node;
      };

      AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource;

      AudioContext.prototype.createBufferSource = function () {
        var node = this.internal_createBufferSource();

        if (!node.start) {
          node.start = function (when, offset, duration) {
            if (offset || duration) this.noteGrainOn(when || 0, offset, duration);else this.noteOn(when || 0);
          };
        } else {
          node.internal_start = node.start;

          node.start = function (when, offset, duration) {
            if (typeof duration !== 'undefined') node.internal_start(when || 0, offset, duration);else node.internal_start(when || 0, offset || 0);
          };
        }

        if (!node.stop) {
          node.stop = function (when) {
            this.noteOff(when || 0);
          };
        } else {
          node.internal_stop = node.stop;

          node.stop = function (when) {
            node.internal_stop(when || 0);
          };
        }

        fixSetTarget(node.playbackRate);
        return node;
      };

      AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor;

      AudioContext.prototype.createDynamicsCompressor = function () {
        var node = this.internal_createDynamicsCompressor();
        fixSetTarget(node.threshold);
        fixSetTarget(node.knee);
        fixSetTarget(node.ratio);
        fixSetTarget(node.reduction);
        fixSetTarget(node.attack);
        fixSetTarget(node.release);
        return node;
      };

      AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter;

      AudioContext.prototype.createBiquadFilter = function () {
        var node = this.internal_createBiquadFilter();
        fixSetTarget(node.frequency);
        fixSetTarget(node.detune);
        fixSetTarget(node.Q);
        fixSetTarget(node.gain);
        return node;
      };

      if (typeof AudioContext.prototype.createOscillator !== 'function') {
        AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator;

        AudioContext.prototype.createOscillator = function () {
          var node = this.internal_createOscillator();

          if (!node.start) {
            node.start = function (when) {
              this.noteOn(when || 0);
            };
          } else {
            node.internal_start = node.start;

            node.start = function (when) {
              node.internal_start(when || 0);
            };
          }

          if (!node.stop) {
            node.stop = function (when) {
              this.noteOff(when || 0);
            };
          } else {
            node.internal_stop = node.stop;

            node.stop = function (when) {
              node.internal_stop(when || 0);
            };
          }

          if (!node.setPeriodicWave) node.setPeriodicWave = node.setWaveTable;
          fixSetTarget(node.frequency);
          fixSetTarget(node.detune);
          return node;
        };
      }
    }

    if (window.hasOwnProperty('webkitOfflineAudioContext') && !window.hasOwnProperty('OfflineAudioContext')) {
      window.OfflineAudioContext = window.webkitOfflineAudioContext;
    }
  })(window); 


  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  /**
   * Determine which filetypes are supported (inspired by buzz.js)
   * The audio element (el) will only be used to test browser support for various audio formats
   */

  var el = document.createElement('audio');

  p5.prototype.isSupported = function () {
    return !!el.canPlayType;
  };

  var isOGGSupported = function isOGGSupported() {
    return !!el.canPlayType && el.canPlayType('audio/ogg; codecs="vorbis"');
  };

  var isMP3Supported = function isMP3Supported() {
    return !!el.canPlayType && el.canPlayType('audio/mpeg;');
  };

  var isWAVSupported = function isWAVSupported() {
    return !!el.canPlayType && el.canPlayType('audio/wav; codecs="1"');
  };

  var isAACSupported = function isAACSupported() {
    return !!el.canPlayType && (el.canPlayType('audio/x-m4a;') || el.canPlayType('audio/aac;'));
  };

  var isAIFSupported = function isAIFSupported() {
    return !!el.canPlayType && el.canPlayType('audio/x-aiff;');
  };

  p5.prototype.isFileSupported = function (extension) {
    switch (extension.toLowerCase()) {
      case 'mp3':
        return isMP3Supported();

      case 'wav':
        return isWAVSupported();

      case 'ogg':
        return isOGGSupported();

      case 'aac':
      case 'm4a':
      case 'mp4':
        return isAACSupported();

      case 'aif':
      case 'aiff':
        return isAIFSupported();

      default:
        return false;
    }
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports) {

var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(t){"object"==typeof window&&(g=window)}module.exports=g;

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){var r=function(e,t){this._dragged=!1,this._element=e,this._bindedMove=this._moved.bind(this),this._bindedEnd=this._ended.bind(this,t),e.addEventListener("touchstart",this._bindedEnd),e.addEventListener("touchmove",this._bindedMove),e.addEventListener("touchend",this._bindedEnd),e.addEventListener("mouseup",this._bindedEnd)};function o(e){return"running"===e.state}return r.prototype._moved=function(e){this._dragged=!0},r.prototype._ended=function(e){this._dragged||function(e){var t=e.createBuffer(1,1,e.sampleRate),n=e.createBufferSource();n.buffer=t,n.connect(e.destination),n.start(0),e.resume&&e.resume()}(e),this._dragged=!1},r.prototype.dispose=function(){this._element.removeEventListener("touchstart",this._bindedEnd),this._element.removeEventListener("touchmove",this._bindedMove),this._element.removeEventListener("touchend",this._bindedEnd),this._element.removeEventListener("mouseup",this._bindedEnd),this._bindedMove=null,this._bindedEnd=null,this._element=null},function(t,e,n){var i=new Promise(function(e){!function(t,n){o(t)?n():function e(){o(t)?n():(requestAnimationFrame(e),t.resume&&t.resume())}()}(t,e)}),d=[];return function e(t,n,i){if(Array.isArray(t)||NodeList&&t instanceof NodeList)for(var d=0;d<t.length;d++)e(t[d],n,i);else if("string"==typeof t)e(document.querySelectorAll(t),n,i);else if(t.jquery&&"function"==typeof t.toArray)e(t.toArray(),n,i);else if(Element&&t instanceof Element){var o=new r(t,i);n.push(o)}}(e=e||document.body,d,t),i.then(function(){for(var e=0;e<d.length;e++)d[e].dispose();d=null,n&&n()}),i}});

 }),
 (function(module, exports, __webpack_require__) {

var p5sound = __webpack_require__(1);

var moduleSources = [__webpack_require__(37)["default"], __webpack_require__(38)["default"], __webpack_require__(39)["default"]];
var ac = p5sound.audiocontext;
var initializedAudioWorklets = false;

function loadAudioWorkletModules() {
  return Promise.all(moduleSources.map(function (moduleSrc) {
    var blob = new Blob([moduleSrc], {
      type: 'application/javascript'
    });
    var objectURL = URL.createObjectURL(blob);
    return ac.audioWorklet.addModule(objectURL);
  }));
}

p5.prototype.registerMethod('init', function () {
  if (initializedAudioWorklets) return; 

  if (!this.preload && !window.preload) {
    this.preload = function () {};
  } 


  this._incrementPreload();

  var onWorkletModulesLoad = function () {
    initializedAudioWorklets = true;

    this._decrementPreload();
  }.bind(this);

  loadAudioWorkletModules().then(onWorkletModulesLoad);
});

 }),
 (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_exports__["default"] = ("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import dependencies via preval.require so that they're available as values at compile time\nvar processorNames = {\n  \"recorderProcessor\": \"recorder-processor\",\n  \"soundFileProcessor\": \"sound-file-processor\",\n  \"amplitudeProcessor\": \"amplitude-processor\"\n};\nvar RingBuffer = {\n  \"default\":\n  /*#__PURE__*/\n  function () {\n    /**\n     * @constructor\n     * @param  {number} length Buffer length in frames.\n     * @param  {number} channelCount Buffer channel count.\n     */\n    function RingBuffer(length, channelCount) {\n      _classCallCheck(this, RingBuffer);\n\n      this._readIndex = 0;\n      this._writeIndex = 0;\n      this._framesAvailable = 0;\n      this._channelCount = channelCount;\n      this._length = length;\n      this._channelData = [];\n\n      for (var i = 0; i < this._channelCount; ++i) {\n        this._channelData[i] = new Float32Array(length);\n      }\n    }\n    /**\n     * Getter for Available frames in buffer.\n     *\n     * @return {number} Available frames in buffer.\n     */\n\n\n    _createClass(RingBuffer, [{\n      key: \"push\",\n\n      /**\n       * Push a sequence of Float32Arrays to buffer.\n       *\n       * @param  {array} arraySequence A sequence of Float32Arrays.\n       */\n      value: function push(arraySequence) {\n        // The channel count of arraySequence and the length of each channel must\n        // match with this buffer obejct.\n        // Transfer data from the |arraySequence| storage to the internal buffer.\n        var sourceLength = arraySequence[0].length;\n\n        for (var i = 0; i < sourceLength; ++i) {\n          var writeIndex = (this._writeIndex + i) % this._length;\n\n          for (var channel = 0; channel < this._channelCount; ++channel) {\n            this._channelData[channel][writeIndex] = arraySequence[channel][i];\n          }\n        }\n\n        this._writeIndex += sourceLength;\n\n        if (this._writeIndex >= this._length) {\n          this._writeIndex = 0;\n        } // For excessive frames, the buffer will be overwritten.\n\n\n        this._framesAvailable += sourceLength;\n\n        if (this._framesAvailable > this._length) {\n          this._framesAvailable = this._length;\n        }\n      }\n      /**\n       * Pull data out of buffer and fill a given sequence of Float32Arrays.\n       *\n       * @param  {array} arraySequence An array of Float32Arrays.\n       */\n\n    }, {\n      key: \"pull\",\n      value: function pull(arraySequence) {\n        // The channel count of arraySequence and the length of each channel must\n        // match with this buffer obejct.\n        // If the FIFO is completely empty, do nothing.\n        if (this._framesAvailable === 0) {\n          return;\n        }\n\n        var destinationLength = arraySequence[0].length; // Transfer data from the internal buffer to the |arraySequence| storage.\n\n        for (var i = 0; i < destinationLength; ++i) {\n          var readIndex = (this._readIndex + i) % this._length;\n\n          for (var channel = 0; channel < this._channelCount; ++channel) {\n            arraySequence[channel][i] = this._channelData[channel][readIndex];\n          }\n        }\n\n        this._readIndex += destinationLength;\n\n        if (this._readIndex >= this._length) {\n          this._readIndex = 0;\n        }\n\n        this._framesAvailable -= destinationLength;\n\n        if (this._framesAvailable < 0) {\n          this._framesAvailable = 0;\n        }\n      }\n    }, {\n      key: \"framesAvailable\",\n      get: function get() {\n        return this._framesAvailable;\n      }\n    }]);\n\n    return RingBuffer;\n  }()\n}[\"default\"];\n\nvar RecorderProcessor =\n/*#__PURE__*/\nfunction (_AudioWorkletProcesso) {\n  _inherits(RecorderProcessor, _AudioWorkletProcesso);\n\n  function RecorderProcessor(options) {\n    var _this;\n\n    _classCallCheck(this, RecorderProcessor);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(RecorderProcessor).call(this));\n    var processorOptions = options.processorOptions || {};\n    _this.numOutputChannels = options.outputChannelCount || 2;\n    _this.numInputChannels = processorOptions.numInputChannels || 2;\n    _this.bufferSize = processorOptions.bufferSize || 1024;\n    _this.recording = false;\n\n    _this.clear();\n\n    _this.port.onmessage = function (event) {\n      var data = event.data;\n\n      if (data.name === 'start') {\n        _this.record(data.duration);\n      } else if (data.name === 'stop') {\n        _this.stop();\n      }\n    };\n\n    return _this;\n  }\n\n  _createClass(RecorderProcessor, [{\n    key: \"process\",\n    value: function process(inputs) {\n      if (!this.recording) {\n        return true;\n      } else if (this.sampleLimit && this.recordedSamples >= this.sampleLimit) {\n        this.stop();\n        return true;\n      }\n\n      var input = inputs[0];\n      this.inputRingBuffer.push(input);\n\n      if (this.inputRingBuffer.framesAvailable >= this.bufferSize) {\n        this.inputRingBuffer.pull(this.inputRingBufferArraySequence);\n\n        for (var channel = 0; channel < this.numOutputChannels; ++channel) {\n          var inputChannelCopy = this.inputRingBufferArraySequence[channel].slice();\n\n          if (channel === 0) {\n            this.leftBuffers.push(inputChannelCopy);\n\n            if (this.numInputChannels === 1) {\n              this.rightBuffers.push(inputChannelCopy);\n            }\n          } else if (channel === 1 && this.numInputChannels > 1) {\n            this.rightBuffers.push(inputChannelCopy);\n          }\n        }\n\n        this.recordedSamples += this.bufferSize;\n      }\n\n      return true;\n    }\n  }, {\n    key: \"record\",\n    value: function record(duration) {\n      if (duration) {\n        this.sampleLimit = Math.round(duration * sampleRate);\n      }\n\n      this.recording = true;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.recording = false;\n      var buffers = this.getBuffers();\n      var leftBuffer = buffers[0].buffer;\n      var rightBuffer = buffers[1].buffer;\n      this.port.postMessage({\n        name: 'buffers',\n        leftBuffer: leftBuffer,\n        rightBuffer: rightBuffer\n      }, [leftBuffer, rightBuffer]);\n      this.clear();\n    }\n  }, {\n    key: \"getBuffers\",\n    value: function getBuffers() {\n      var buffers = [];\n      buffers.push(this.mergeBuffers(this.leftBuffers));\n      buffers.push(this.mergeBuffers(this.rightBuffers));\n      return buffers;\n    }\n  }, {\n    key: \"mergeBuffers\",\n    value: function mergeBuffers(channelBuffer) {\n      var result = new Float32Array(this.recordedSamples);\n      var offset = 0;\n      var lng = channelBuffer.length;\n\n      for (var i = 0; i < lng; i++) {\n        var buffer = channelBuffer[i];\n        result.set(buffer, offset);\n        offset += buffer.length;\n      }\n\n      return result;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      var _this2 = this;\n\n      this.leftBuffers = [];\n      this.rightBuffers = [];\n      this.inputRingBuffer = new RingBuffer(this.bufferSize, this.numInputChannels);\n      this.inputRingBufferArraySequence = new Array(this.numInputChannels).fill(null).map(function () {\n        return new Float32Array(_this2.bufferSize);\n      });\n      this.recordedSamples = 0;\n      this.sampleLimit = null;\n    }\n  }]);\n\n  return RecorderProcessor;\n}(_wrapNativeSuper(AudioWorkletProcessor));\n\nregisterProcessor(processorNames.recorderProcessor, RecorderProcessor);");

 }),
 (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_exports__["default"] = ("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import dependencies via preval.require so that they're available as values at compile time\nvar processorNames = {\n  \"recorderProcessor\": \"recorder-processor\",\n  \"soundFileProcessor\": \"sound-file-processor\",\n  \"amplitudeProcessor\": \"amplitude-processor\"\n};\nvar RingBuffer = {\n  \"default\":\n  /*#__PURE__*/\n  function () {\n    /**\n     * @constructor\n     * @param  {number} length Buffer length in frames.\n     * @param  {number} channelCount Buffer channel count.\n     */\n    function RingBuffer(length, channelCount) {\n      _classCallCheck(this, RingBuffer);\n\n      this._readIndex = 0;\n      this._writeIndex = 0;\n      this._framesAvailable = 0;\n      this._channelCount = channelCount;\n      this._length = length;\n      this._channelData = [];\n\n      for (var i = 0; i < this._channelCount; ++i) {\n        this._channelData[i] = new Float32Array(length);\n      }\n    }\n    /**\n     * Getter for Available frames in buffer.\n     *\n     * @return {number} Available frames in buffer.\n     */\n\n\n    _createClass(RingBuffer, [{\n      key: \"push\",\n\n      /**\n       * Push a sequence of Float32Arrays to buffer.\n       *\n       * @param  {array} arraySequence A sequence of Float32Arrays.\n       */\n      value: function push(arraySequence) {\n        // The channel count of arraySequence and the length of each channel must\n        // match with this buffer obejct.\n        // Transfer data from the |arraySequence| storage to the internal buffer.\n        var sourceLength = arraySequence[0].length;\n\n        for (var i = 0; i < sourceLength; ++i) {\n          var writeIndex = (this._writeIndex + i) % this._length;\n\n          for (var channel = 0; channel < this._channelCount; ++channel) {\n            this._channelData[channel][writeIndex] = arraySequence[channel][i];\n          }\n        }\n\n        this._writeIndex += sourceLength;\n\n        if (this._writeIndex >= this._length) {\n          this._writeIndex = 0;\n        } // For excessive frames, the buffer will be overwritten.\n\n\n        this._framesAvailable += sourceLength;\n\n        if (this._framesAvailable > this._length) {\n          this._framesAvailable = this._length;\n        }\n      }\n      /**\n       * Pull data out of buffer and fill a given sequence of Float32Arrays.\n       *\n       * @param  {array} arraySequence An array of Float32Arrays.\n       */\n\n    }, {\n      key: \"pull\",\n      value: function pull(arraySequence) {\n        // The channel count of arraySequence and the length of each channel must\n        // match with this buffer obejct.\n        // If the FIFO is completely empty, do nothing.\n        if (this._framesAvailable === 0) {\n          return;\n        }\n\n        var destinationLength = arraySequence[0].length; // Transfer data from the internal buffer to the |arraySequence| storage.\n\n        for (var i = 0; i < destinationLength; ++i) {\n          var readIndex = (this._readIndex + i) % this._length;\n\n          for (var channel = 0; channel < this._channelCount; ++channel) {\n            arraySequence[channel][i] = this._channelData[channel][readIndex];\n          }\n        }\n\n        this._readIndex += destinationLength;\n\n        if (this._readIndex >= this._length) {\n          this._readIndex = 0;\n        }\n\n        this._framesAvailable -= destinationLength;\n\n        if (this._framesAvailable < 0) {\n          this._framesAvailable = 0;\n        }\n      }\n    }, {\n      key: \"framesAvailable\",\n      get: function get() {\n        return this._framesAvailable;\n      }\n    }]);\n\n    return RingBuffer;\n  }()\n}[\"default\"];\n\nvar SoundFileProcessor =\n/*#__PURE__*/\nfunction (_AudioWorkletProcesso) {\n  _inherits(SoundFileProcessor, _AudioWorkletProcesso);\n\n  function SoundFileProcessor(options) {\n    var _this;\n\n    _classCallCheck(this, SoundFileProcessor);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SoundFileProcessor).call(this));\n    var processorOptions = options.processorOptions || {};\n    _this.bufferSize = processorOptions.bufferSize || 256;\n    _this.inputRingBuffer = new RingBuffer(_this.bufferSize, 1);\n    _this.inputRingBufferArraySequence = [new Float32Array(_this.bufferSize)];\n    return _this;\n  }\n\n  _createClass(SoundFileProcessor, [{\n    key: \"process\",\n    value: function process(inputs) {\n      var input = inputs[0]; // we only care about the first input channel, because that contains the position data\n\n      this.inputRingBuffer.push([input[0]]);\n\n      if (this.inputRingBuffer.framesAvailable >= this.bufferSize) {\n        this.inputRingBuffer.pull(this.inputRingBufferArraySequence);\n        var inputChannel = this.inputRingBufferArraySequence[0];\n        var position = inputChannel[inputChannel.length - 1] || 0;\n        this.port.postMessage({\n          name: 'position',\n          position: position\n        });\n      }\n\n      return true;\n    }\n  }]);\n\n  return SoundFileProcessor;\n}(_wrapNativeSuper(AudioWorkletProcessor));\n\nregisterProcessor(processorNames.soundFileProcessor, SoundFileProcessor);");

 }),
 (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_exports__["default"] = ("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import dependencies via preval.require so that they're available as values at compile time\nvar processorNames = {\n  \"recorderProcessor\": \"recorder-processor\",\n  \"soundFileProcessor\": \"sound-file-processor\",\n  \"amplitudeProcessor\": \"amplitude-processor\"\n};\nvar RingBuffer = {\n  \"default\":\n  /*#__PURE__*/\n  function () {\n    /**\n     * @constructor\n     * @param  {number} length Buffer length in frames.\n     * @param  {number} channelCount Buffer channel count.\n     */\n    function RingBuffer(length, channelCount) {\n      _classCallCheck(this, RingBuffer);\n\n      this._readIndex = 0;\n      this._writeIndex = 0;\n      this._framesAvailable = 0;\n      this._channelCount = channelCount;\n      this._length = length;\n      this._channelData = [];\n\n      for (var i = 0; i < this._channelCount; ++i) {\n        this._channelData[i] = new Float32Array(length);\n      }\n    }\n    /**\n     * Getter for Available frames in buffer.\n     *\n     * @return {number} Available frames in buffer.\n     */\n\n\n    _createClass(RingBuffer, [{\n      key: \"push\",\n\n      /**\n       * Push a sequence of Float32Arrays to buffer.\n       *\n       * @param  {array} arraySequence A sequence of Float32Arrays.\n       */\n      value: function push(arraySequence) {\n        // The channel count of arraySequence and the length of each channel must\n        // match with this buffer obejct.\n        // Transfer data from the |arraySequence| storage to the internal buffer.\n        var sourceLength = arraySequence[0].length;\n\n        for (var i = 0; i < sourceLength; ++i) {\n          var writeIndex = (this._writeIndex + i) % this._length;\n\n          for (var channel = 0; channel < this._channelCount; ++channel) {\n            this._channelData[channel][writeIndex] = arraySequence[channel][i];\n          }\n        }\n\n        this._writeIndex += sourceLength;\n\n        if (this._writeIndex >= this._length) {\n          this._writeIndex = 0;\n        } // For excessive frames, the buffer will be overwritten.\n\n\n        this._framesAvailable += sourceLength;\n\n        if (this._framesAvailable > this._length) {\n          this._framesAvailable = this._length;\n        }\n      }\n      /**\n       * Pull data out of buffer and fill a given sequence of Float32Arrays.\n       *\n       * @param  {array} arraySequence An array of Float32Arrays.\n       */\n\n    }, {\n      key: \"pull\",\n      value: function pull(arraySequence) {\n        // The channel count of arraySequence and the length of each channel must\n        // match with this buffer obejct.\n        // If the FIFO is completely empty, do nothing.\n        if (this._framesAvailable === 0) {\n          return;\n        }\n\n        var destinationLength = arraySequence[0].length; // Transfer data from the internal buffer to the |arraySequence| storage.\n\n        for (var i = 0; i < destinationLength; ++i) {\n          var readIndex = (this._readIndex + i) % this._length;\n\n          for (var channel = 0; channel < this._channelCount; ++channel) {\n            arraySequence[channel][i] = this._channelData[channel][readIndex];\n          }\n        }\n\n        this._readIndex += destinationLength;\n\n        if (this._readIndex >= this._length) {\n          this._readIndex = 0;\n        }\n\n        this._framesAvailable -= destinationLength;\n\n        if (this._framesAvailable < 0) {\n          this._framesAvailable = 0;\n        }\n      }\n    }, {\n      key: \"framesAvailable\",\n      get: function get() {\n        return this._framesAvailable;\n      }\n    }]);\n\n    return RingBuffer;\n  }()\n}[\"default\"];\n\nvar AmplitudeProcessor =\n/*#__PURE__*/\nfunction (_AudioWorkletProcesso) {\n  _inherits(AmplitudeProcessor, _AudioWorkletProcesso);\n\n  function AmplitudeProcessor(options) {\n    var _this;\n\n    _classCallCheck(this, AmplitudeProcessor);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(AmplitudeProcessor).call(this));\n    var processorOptions = options.processorOptions || {};\n    _this.numOutputChannels = options.outputChannelCount || 1;\n    _this.numInputChannels = processorOptions.numInputChannels || 2;\n    _this.normalize = processorOptions.normalize || false;\n    _this.smoothing = processorOptions.smoothing || 0;\n    _this.bufferSize = processorOptions.bufferSize || 2048;\n    _this.inputRingBuffer = new RingBuffer(_this.bufferSize, _this.numInputChannels);\n    _this.outputRingBuffer = new RingBuffer(_this.bufferSize, _this.numOutputChannels);\n    _this.inputRingBufferArraySequence = new Array(_this.numInputChannels).fill(null).map(function () {\n      return new Float32Array(_this.bufferSize);\n    });\n    _this.stereoVol = [0, 0];\n    _this.stereoVolNorm = [0, 0];\n    _this.volMax = 0.001;\n\n    _this.port.onmessage = function (event) {\n      var data = event.data;\n\n      if (data.name === 'toggleNormalize') {\n        _this.normalize = data.normalize;\n      } else if (data.name === 'smoothing') {\n        _this.smoothing = Math.max(0, Math.min(1, data.smoothing));\n      }\n    };\n\n    return _this;\n  } // TO DO make this stereo / dependent on # of audio channels\n\n\n  _createClass(AmplitudeProcessor, [{\n    key: \"process\",\n    value: function process(inputs, outputs) {\n      var input = inputs[0];\n      var output = outputs[0];\n      var smoothing = this.smoothing;\n      this.inputRingBuffer.push(input);\n\n      if (this.inputRingBuffer.framesAvailable >= this.bufferSize) {\n        this.inputRingBuffer.pull(this.inputRingBufferArraySequence);\n\n        for (var channel = 0; channel < this.numInputChannels; ++channel) {\n          var inputBuffer = this.inputRingBufferArraySequence[channel];\n          var bufLength = inputBuffer.length;\n          var sum = 0;\n\n          for (var i = 0; i < bufLength; i++) {\n            var x = inputBuffer[i];\n\n            if (this.normalize) {\n              sum += Math.max(Math.min(x / this.volMax, 1), -1) * Math.max(Math.min(x / this.volMax, 1), -1);\n            } else {\n              sum += x * x;\n            }\n          } // ... then take the square root of the sum.\n\n\n          var rms = Math.sqrt(sum / bufLength);\n          this.stereoVol[channel] = Math.max(rms, this.stereoVol[channel] * smoothing);\n          this.volMax = Math.max(this.stereoVol[channel], this.volMax);\n        } // calculate stero normalized volume and add volume from all channels together\n\n\n        var volSum = 0;\n\n        for (var index = 0; index < this.stereoVol.length; index++) {\n          this.stereoVolNorm[index] = Math.max(Math.min(this.stereoVol[index] / this.volMax, 1), 0);\n          volSum += this.stereoVol[index];\n        } // volume is average of channels\n\n\n        var volume = volSum / this.stereoVol.length; // normalized value\n\n        var volNorm = Math.max(Math.min(volume / this.volMax, 1), 0);\n        this.port.postMessage({\n          name: 'amplitude',\n          volume: volume,\n          volNorm: volNorm,\n          stereoVol: this.stereoVol,\n          stereoVolNorm: this.stereoVolNorm\n        }); // pass input through to output\n\n        this.outputRingBuffer.push(this.inputRingBufferArraySequence);\n      } // pull 128 frames out of the ring buffer\n      // if the ring buffer does not have enough frames, the output will be silent\n\n\n      this.outputRingBuffer.pull(output);\n      return true;\n    }\n  }]);\n\n  return AmplitudeProcessor;\n}(_wrapNativeSuper(AudioWorkletProcessor));\n\nregisterProcessor(processorNames.amplitudeProcessor, AmplitudeProcessor);");

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var ac = p5sound.audiocontext; 

  if (typeof ac.createStereoPanner !== 'undefined') {
    p5.Panner = function (input, output) {
      this.stereoPanner = this.input = ac.createStereoPanner();
      input.connect(this.stereoPanner);
      this.stereoPanner.connect(output);
    };

    p5.Panner.prototype.pan = function (val, tFromNow) {
      var time = tFromNow || 0;
      var t = ac.currentTime + time;
      this.stereoPanner.pan.linearRampToValueAtTime(val, t);
    }; 


    p5.Panner.prototype.inputChannels = function () {};

    p5.Panner.prototype.connect = function (obj) {
      this.stereoPanner.connect(obj);
    };

    p5.Panner.prototype.disconnect = function () {
      if (this.stereoPanner) {
        this.stereoPanner.disconnect();
      }
    };
  } else {
    p5.Panner = function (input, output, numInputChannels) {
      this.input = ac.createGain();
      input.connect(this.input);
      this.left = ac.createGain();
      this.right = ac.createGain();
      this.left.channelInterpretation = 'discrete';
      this.right.channelInterpretation = 'discrete'; 

      if (numInputChannels > 1) {
        this.splitter = ac.createChannelSplitter(2);
        this.input.connect(this.splitter);
        this.splitter.connect(this.left, 1);
        this.splitter.connect(this.right, 0);
      } else {
        this.input.connect(this.left);
        this.input.connect(this.right);
      }

      this.output = ac.createChannelMerger(2);
      this.left.connect(this.output, 0, 1);
      this.right.connect(this.output, 0, 0);
      this.output.connect(output);
    }; 


    p5.Panner.prototype.pan = function (val, tFromNow) {
      var time = tFromNow || 0;
      var t = ac.currentTime + time;
      var v = (val + 1) / 2;
      var rightVal = Math.cos(v * Math.PI / 2);
      var leftVal = Math.sin(v * Math.PI / 2);
      this.left.gain.linearRampToValueAtTime(leftVal, t);
      this.right.gain.linearRampToValueAtTime(rightVal, t);
    };

    p5.Panner.prototype.inputChannels = function (numChannels) {
      if (numChannels === 1) {
        this.input.disconnect();
        this.input.connect(this.left);
        this.input.connect(this.right);
      } else if (numChannels === 2) {
        if (_typeof(this.splitter === 'undefined')) {
          this.splitter = ac.createChannelSplitter(2);
        }

        this.input.disconnect();
        this.input.connect(this.splitter);
        this.splitter.connect(this.left, 1);
        this.splitter.connect(this.right, 0);
      }
    };

    p5.Panner.prototype.connect = function (obj) {
      this.output.connect(obj);
    };

    p5.Panner.prototype.disconnect = function () {
      if (this.output) {
        this.output.disconnect();
      }
    };
  }
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var CustomError = __webpack_require__(11);

  var p5sound = __webpack_require__(1);

  var ac = p5sound.audiocontext;

  var _require = __webpack_require__(6),
      midiToFreq = _require.midiToFreq,
      convertToWav = _require.convertToWav,
      safeBufferSize = _require.safeBufferSize;

  var processorNames = __webpack_require__(10);
  /**
   *  <p>SoundFile object with a path to a file.</p>
   *
   *  <p>The p5.SoundFile may not be available immediately because
   *  it loads the file information asynchronously.</p>
   *
   *  <p>To do something with the sound as soon as it loads
   *  pass the name of a function as the second parameter.</p>
   *
   *  <p>Only one file path is required. However, audio file formats
   *  (i.e. mp3, ogg, wav and m4a/aac) are not supported by all
   *  web browsers. If you want to ensure compatability, instead of a single
   *  file path, you may include an Array of filepaths, and the browser will
   *  choose a format that works.</p>
   *
   *  @class p5.SoundFile
   *  @constructor
   *  @param {String|Array} path   path to a sound file (String). Optionally,
   *                               you may include multiple file formats in
   *                               an array. Alternately, accepts an object
   *                               from the HTML5 File API, or a p5.File.
   *  @param {Function} [successCallback]   Name of a function to call once file loads
   *  @param {Function} [errorCallback]   Name of a function to call if file fails to
   *                                      load. This function will receive an error or
   *                                     XMLHttpRequest object with information
   *                                     about what went wrong.
   *  @param {Function} [whileLoadingCallback]   Name of a function to call while file
   *                                             is loading. That function will
   *                                             receive progress of the request to
   *                                             load the sound file
   *                                             (between 0 and 1) as its first
   *                                             parameter. This progress
   *                                             does not account for the additional
   *                                             time needed to decode the audio data.
   *
   *  @example
   *  <div><code>
   *  let mySound;
   *  function preload() {
   *    soundFormats('mp3', 'ogg');
   *    mySound = loadSound('assets/doorbell');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    background(220);
   *    text('tap here to play', 10, 20);
   *  }
   *
   *  function canvasPressed() {
   *    // playing a sound file on a user gesture
   *    // is equivalent to `userStartAudio()`
   *    mySound.play();
   *  }
   * </code></div>
   */


  p5.SoundFile = function (paths, onload, onerror, whileLoading) {
    if (typeof paths !== 'undefined') {
      if (typeof paths === 'string' || typeof paths[0] === 'string') {
        var path = p5.prototype._checkFileFormats(paths);

        this.url = path;
      } else if (_typeof(paths) === 'object') {
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
          throw 'Unable to load file because the File API is not supported';
        }
      } 


      if (paths.file) {
        paths = paths.file;
      }

      this.file = paths;
    } 


    this._onended = function () {};

    this._looping = false;
    this._playing = false;
    this._paused = false;
    this._pauseTime = 0; 

    this._cues = [];
    this._cueIDCounter = 0; 

    this._lastPos = 0;
    this._counterNode = null;
    this._workletNode = null; 

    this.bufferSourceNodes = []; 

    this.bufferSourceNode = null;
    this.buffer = null;
    this.playbackRate = 1;
    this.input = p5sound.audiocontext.createGain();
    this.output = p5sound.audiocontext.createGain();
    this.reversed = false; 

    this.startTime = 0;
    this.endTime = null;
    this.pauseTime = 0; 

    this.mode = 'sustain'; 

    this.startMillis = null; 

    this.panPosition = 0.0;
    this.panner = new p5.Panner(this.output, p5sound.input, 2); 

    if (this.url || this.file) {
      this.load(onload, onerror);
    } 


    p5sound.soundArray.push(this);

    if (typeof whileLoading === 'function') {
      this._whileLoading = whileLoading;
    } else {
      this._whileLoading = function () {};
    }

    this._clearOnEnd = _clearOnEnd.bind(this);
  }; 


  p5.prototype.registerPreloadMethod('loadSound', p5.prototype);
  /**
   *  loadSound() returns a new p5.SoundFile from a specified
   *  path. If called during preload(), the p5.SoundFile will be ready
   *  to play in time for setup() and draw(). If called outside of
   *  preload, the p5.SoundFile will not be ready immediately, so
   *  loadSound accepts a callback as the second parameter. Using a
   *  <a href="https://github.com/processing/p5.js/wiki/Local-server">
   *  local server</a> is recommended when loading external files.
   *
   *  @method loadSound
   *  @for p5
   *  @param  {String|Array}   path     Path to the sound file, or an array with
   *                                    paths to soundfiles in multiple formats
   *                                    i.e. ['sound.ogg', 'sound.mp3'].
   *                                    Alternately, accepts an object: either
   *                                    from the HTML5 File API, or a p5.File.
   *  @param {Function} [successCallback]   Name of a function to call once file loads
   *  @param {Function} [errorCallback]   Name of a function to call if there is
   *                                      an error loading the file.
   *  @param {Function} [whileLoading] Name of a function to call while file is loading.
   *                                 This function will receive the percentage loaded
   *                                 so far, from 0.0 to 1.0.
   *  @return {SoundFile}            Returns a p5.SoundFile
   *  @example
   *  <div><code>
   *  let mySound;
   *  function preload() {
   *    soundFormats('mp3', 'ogg');
   *    mySound = loadSound('assets/doorbell');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    background(220);
   *    text('tap here to play', 10, 20);
   *  }
   *
   *  function canvasPressed() {
   *    // playing a sound file on a user gesture
   *    // is equivalent to `userStartAudio()`
   *    mySound.play();
   *  }
   *  </code></div>
   */

  p5.prototype.loadSound = function (path, callback, onerror, whileLoading) {
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
      window.alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }

    var self = this;
    var s = new p5.SoundFile(path, function () {
      if (typeof callback === 'function') {
        callback.apply(self, arguments);
      }

      if (typeof self._decrementPreload === 'function') {
        self._decrementPreload();
      }
    }, onerror, whileLoading);
    return s;
  };
  /**
   * This is a helper function that the p5.SoundFile calls to load
   * itself. Accepts a callback (the name of another function)
   * as an optional parameter.
   *
   * @private
   * @for p5.SoundFile
   * @param {Function} [successCallback]   Name of a function to call once file loads
   * @param {Function} [errorCallback]   Name of a function to call if there is an error
   */


  p5.SoundFile.prototype.load = function (callback, errorCallback) {
    var self = this;
    var errorTrace = new Error().stack;

    if (this.url !== undefined && this.url !== '') {
      var request = new XMLHttpRequest();
      request.addEventListener('progress', function (evt) {
        self._updateProgress(evt);
      }, false);
      request.open('GET', this.url, true);
      request.responseType = 'arraybuffer';

      request.onload = function () {
        if (request.status === 200) {
          if (!self.panner) return;
          ac.decodeAudioData(request.response, 
          function (buff) {
            if (!self.panner) return;
            self.buffer = buff;
            self.panner.inputChannels(buff.numberOfChannels);

            if (callback) {
              callback(self);
            }
          }, 
          function () {
            if (!self.panner) return;
            var err = new CustomError('decodeAudioData', errorTrace, self.url);
            var msg = 'AudioContext error at decodeAudioData for ' + self.url;

            if (errorCallback) {
              err.msg = msg;
              errorCallback(err);
            } else {
              console.error(msg + '\n The error stack trace includes: \n' + err.stack);
            }
          });
        } 
        else {
            if (!self.panner) return;
            var err = new CustomError('loadSound', errorTrace, self.url);
            var msg = 'Unable to load ' + self.url + '. The request status was: ' + request.status + ' (' + request.statusText + ')';

            if (errorCallback) {
              err.message = msg;
              errorCallback(err);
            } else {
              console.error(msg + '\n The error stack trace includes: \n' + err.stack);
            }
          }
      }; 


      request.onerror = function () {
        var err = new CustomError('loadSound', errorTrace, self.url);
        var msg = 'There was no response from the server at ' + self.url + '. Check the url and internet connectivity.';

        if (errorCallback) {
          err.message = msg;
          errorCallback(err);
        } else {
          console.error(msg + '\n The error stack trace includes: \n' + err.stack);
        }
      };

      request.send();
    } else if (this.file !== undefined) {
      var reader = new FileReader();

      reader.onload = function () {
        if (!self.panner) return;
        ac.decodeAudioData(reader.result, function (buff) {
          if (!self.panner) return;
          self.buffer = buff;
          self.panner.inputChannels(buff.numberOfChannels);

          if (callback) {
            callback(self);
          }
        });
      };

      reader.onerror = function (e) {
        if (!self.panner) return;

        if (onerror) {
          onerror(e);
        }
      };

      reader.readAsArrayBuffer(this.file);
    }
  }; 


  p5.SoundFile.prototype._updateProgress = function (evt) {
    if (evt.lengthComputable) {
      var percentComplete = evt.loaded / evt.total * 0.99;

      this._whileLoading(percentComplete, evt); 

    } else {
      this._whileLoading('size unknown');
    }
  };
  /**
   *  Returns true if the sound file finished loading successfully.
   *
   *  @method  isLoaded
   *  @for p5.SoundFile
   *  @return {Boolean}
   */


  p5.SoundFile.prototype.isLoaded = function () {
    if (this.buffer) {
      return true;
    } else {
      return false;
    }
  };
  /**
   * Play the p5.SoundFile
   *
   * @method play
   * @for p5.SoundFile
   * @param {Number} [startTime]            (optional) schedule playback to start (in seconds from now).
   * @param {Number} [rate]             (optional) playback rate
   * @param {Number} [amp]              (optional) amplitude (volume)
   *                                     of playback
   * @param {Number} [cueStart]        (optional) cue start time in seconds
   * @param {Number} [duration]          (optional) duration of playback in seconds
   */


  p5.SoundFile.prototype.play = function (startTime, rate, amp, _cueStart, duration) {
    if (!this.output) {
      console.warn('SoundFile.play() called after dispose');
      return;
    }

    var now = p5sound.audiocontext.currentTime;
    var cueStart, cueEnd;
    var time = startTime || 0;

    if (time < 0) {
      time = 0;
    }

    time = time + now;

    if (typeof rate !== 'undefined') {
      this.rate(rate);
    }

    if (typeof amp !== 'undefined') {
      this.setVolume(amp);
    } 


    if (this.buffer) {
      this._pauseTime = 0; 

      if (this.mode === 'restart' && this.buffer && this.bufferSourceNode) {
        this.bufferSourceNode.stop(time);

        this._counterNode.stop(time);
      } 


      if (this.mode === 'untildone' && this.isPlaying()) {
        return;
      } 


      this.bufferSourceNode = this._initSourceNode(); 

      delete this._counterNode;
      this._counterNode = this._initCounterNode();

      if (_cueStart) {
        if (_cueStart >= 0 && _cueStart < this.buffer.duration) {
          cueStart = _cueStart;
        } else {
          throw 'start time out of range';
        }
      } else {
        cueStart = 0;
      }

      if (duration) {
        duration = duration <= this.buffer.duration - cueStart ? duration : this.buffer.duration;
      } 


      if (this._paused) {
        this.bufferSourceNode.start(time, this.pauseTime, duration);

        this._counterNode.start(time, this.pauseTime, duration);
      } else {
        this.bufferSourceNode.start(time, cueStart, duration);

        this._counterNode.start(time, cueStart, duration);
      }

      this._playing = true;
      this._paused = false; 

      this.bufferSourceNodes.push(this.bufferSourceNode);
      this.bufferSourceNode._arrayIndex = this.bufferSourceNodes.length - 1;
      this.bufferSourceNode.addEventListener('ended', this._clearOnEnd);
    } 
    else {
        throw 'not ready to play file, buffer has yet to load. Try preload()';
      } 


    this.bufferSourceNode.loop = this._looping;
    this._counterNode.loop = this._looping;

    if (this._looping === true) {
      cueEnd = duration ? duration : cueStart - 0.000000000000001;
      this.bufferSourceNode.loopStart = cueStart;
      this.bufferSourceNode.loopEnd = cueEnd;
      this._counterNode.loopStart = cueStart;
      this._counterNode.loopEnd = cueEnd;
    }
  };
  /**
   *  p5.SoundFile has two play modes: <code>restart</code> and
   *  <code>sustain</code>. Play Mode determines what happens to a
   *  p5.SoundFile if it is triggered while in the middle of playback.
   *  In sustain mode, playback will continue simultaneous to the
   *  new playback. In restart mode, play() will stop playback
   *  and start over. With untilDone, a sound will play only if it's
   *  not already playing. Sustain is the default mode.
   *
   *  @method  playMode
   *  @for p5.SoundFile
   *  @param  {String} str 'restart' or 'sustain' or 'untilDone'
   *  @example
   *  <div><code>
   *  let mySound;
   *  function preload(){
   *    mySound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    noFill();
   *    rect(0, height/2, width - 1, height/2 - 1);
   *    rect(0, 0, width - 1, height/2);
   *    textAlign(CENTER, CENTER);
   *    fill(20);
   *    text('restart', width/2, 