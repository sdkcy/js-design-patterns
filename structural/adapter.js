/**
 * JSDesignPatterns
 * adapter.js
 * Created by Sıdıka ÇAY on 2019-05-08
 */

"use strict";

/* use to could be run incompatible class together*/
const MediaPlayer = function () {
};
MediaPlayer.prototype.play = function (audioType, fileName) {
    console.log("Media Player plays with ", audioType +" format "+" and file name is " + fileName);
};

const AdvancedMediaPlayer = function () {
};
AdvancedMediaPlayer.prototype.playVlc = function (fileName) {
};
AdvancedMediaPlayer.prototype.playMp4 = function (fileName) {
};


const VlcPlayer = function () {
    AdvancedMediaPlayer.call(this);
};
VlcPlayer.prototype= Object.create(AdvancedMediaPlayer.prototype);
VlcPlayer.prototype.constructor = VlcPlayer;
VlcPlayer.prototype.playVlc = function (fileName) {
    console.log("Playing vlc file... Name: "+ fileName);
};

const Mp4Player = function () {
    AdvancedMediaPlayer.call(this);
};
Mp4Player.prototype= Object.create(AdvancedMediaPlayer.prototype);
Mp4Player.prototype.constructor = Mp4Player;
Mp4Player.prototype.playMp4 = function (fileName) {
    console.log("Playing mp4 file... Name: "+ fileName);
};

const MediaAdapter = function (audioType) {
    MediaPlayer.call(this);
    this.mediaPlayer = null;
    if (audioType === "vlc") {
        this.mediaPlayer = new VlcPlayer();
    }else if(audioType==="mp4"){
        this.mediaPlayer = new Mp4Player();
    }
};

MediaAdapter.prototype = Object.create(MediaPlayer.prototype);
MediaAdapter.prototype.constructor = MediaAdapter;

MediaAdapter.prototype.play = function (audioType, fileName) {
    if (audioType === "vlc") {
        this.mediaPlayer.playVlc(fileName);
    }else if(audioType==="mp4"){
        this.mediaPlayer.playMp4(fileName);
    }
};

const AudioPlayer = function () {
    MediaPlayer.call(this);
    this.adapter = null;
};
AudioPlayer.prototype = Object.create(MediaPlayer.prototype);
AudioPlayer.prototype.constructor = AudioPlayer;

AudioPlayer.prototype.play = function (audioType, fileName) {
    if(audioType === "mp3"){
        console.log("Playing Mp3 file... Name:", fileName);
    }else if(audioType === "vlc" || audioType === "mp4"){
        this.adapter = new MediaAdapter(audioType);
        this.adapter.play(audioType, fileName)
    }else{
        console.log("Invalid Media");
    }
};

const audioPlayer = new AudioPlayer();

audioPlayer.play("mp3", "sdk.mp3");
audioPlayer.play("mp4", "sdk.mp4");
audioPlayer.play("vlc", "sdk.vlc");
audioPlayer.play("avi", "sdk.avi");
