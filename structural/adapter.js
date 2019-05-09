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
};
VlcPlayer.prototype= Object.create(AdvancedMediaPlayer.prototype);
VlcPlayer.prototype.playVlc = function (fileName) {
    console.log("Playing vlc file. Name: "+ fileName);
};

const Mp4Player = function () {
};
Mp4Player.prototype= Object.create(AdvancedMediaPlayer.prototype);
Mp4Player.prototype.playMp4 = function (fileName) {
    console.log("Playing mp4 file. Name: "+ fileName);
};

const MediaAdapter = function (audioType) {
    this.mediaPlayer = null;
    if (audioType === "vlc") {
        this.mediaPlayer = new VlcPlayer();
    }else if(audioType==="mp4"){
        this.mediaPlayer = new Mp4Player();
    }
};

MediaAdapter.prototype = Object.create(MediaPlayer.prototype);

MediaPlayer.prototype.play = function (audioType, fileName) {
    if (audioType === "vlc") {
        this.mediaPlayer.playVlc(fileName);
    }else if(audioType==="mp4"){
        this.mediaPlayer.playMp4(fileName);
    }
};

const AudioPlayer = function () {
    this.adapter = null;
};
AudioPlayer.prototype = Object.create(MediaPlayer.prototype);

AudioPlayer.prototype.play = function (audioType, fileName) {
    if(audioType === "mp3"){
        console.log("Playing Mp3 file. File Name:", fileName);
    }else if(audioType === "vlc" || audioType === "mp4"){
        this.adapter = new MediaAdapter(audioType);
        this.adapter.play(audioType, fileName)
    }else{
        console.log("Invalid Media");
    }
};

const audioPlayer = new AudioPlayer();

audioPlayer.play("mp3", "beyond the horizon.mp3");
audioPlayer.play("mp4", "alone.mp4");
audioPlayer.play("vlc", "far far away.vlc");
audioPlayer.play("avi", "mind me.avi");
