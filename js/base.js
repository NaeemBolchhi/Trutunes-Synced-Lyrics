/* ==========================
:: JS Name: Discobels Base
:: Author: NaeemBolchhi
:: License: GPL-3.0 License
:: Landing Page: https://naeembolchhi.github.io/
:: Telegram Profile: https://t.me/NaeemBolchhi
========================== */

// Hide loading screen after 1.3 seconds.
function fadeOut(i) {
document.getElementById(i).style.opacity = 1;
var x; var y; var z;
  function xyz() {
    y = document.getElementById(i).style.opacity;
    z = y - 0.002;
    document.getElementById(i).style.opacity = z;
  }
  setTimeout(function(){
    for (x = 0; x < 500; x++) {
      setTimeout(xyz, x);
    }
  },1000);
  setTimeout(function(){
    document.getElementById(i).style.display = "none";
  },1500);
}
fadeOut('top');

// Go home.
function goHome() {
  window.location = window.location.origin;
}

// Add blocks.
function addBlocks(n) {
  var blockSec, blockObj;
  blockSec = document.getElementById('blocks');
  blockObj = document.createElement('a');
  blockObj.id = userconfig[1].blocks[n].id;
  blockObj.className = 'col-d4 col-m6';
  blockObj.href = '/?id=' + userconfig[1].blocks[n].id;
  blockObj.setAttribute('onclick',"lyricsHover('" + userconfig[1].blocks[n].id + "'); return false;");
  if (userconfig[1].blocks[n].newTab === "YES") {blockObj.target = '_blank';}
  blockObj.innerHTML = '<div class="block flex"><h1 class="block-icon flex flex-center"><img src="' + userconfig[1].blocks[n].webp + '" src_hd="' + userconfig[1].blocks[n].webpHD + '" alt="' + userconfig[1].blocks[n].song + '" /></h1><h2 class="block-txt"><p class="song"><song>' + userconfig[1].blocks[n].song + '</song></p><p class="info"><album>' + userconfig[1].blocks[n].album + '</album><br /><artist>' + userconfig[1].blocks[n].artist + '</artist></p></h2></div>';
  var wait = n*50+1;
  setTimeout(function(){
    blockSec.appendChild(blockObj);
  }, wait);
}
(function() {
  var blockLength = userconfig[1].blocks.length;
  for (i = 0; i < blockLength; i++) {
    addBlocks(i);
  }
})();

// Prepare lyrics window.
async function lyricsHover(id) {
  let url = userconfig[0].filePrefix + id + '.lrc';
  let response = await fetch(url);
  let gotLyrics = await response.text();

  document.getElementById('lyricsText').innerHTML = gotLyrics;

  var source = document.getElementById(id);
  var lyrics = document.getElementById('lyrics');
  var blocks = document.getElementById('blocks');
  var header = document.getElementsByTagName('header')[0];

  lyrics.getElementsByClassName('btn-second')[0].href = '/lrc/' + id + '.lrc';
  lyrics.getElementsByClassName('btn-second')[0].download = source.getElementsByTagName('song')[0].innerHTML + '.lrc';
  lyrics.getElementsByTagName('img')[0].src = source.getElementsByTagName('img')[0].getAttribute('src_hd');
  lyrics.getElementsByTagName('img')[0].alt = source.getElementsByTagName('img')[0].alt;
  lyrics.getElementsByTagName('song')[0].innerHTML = source.getElementsByTagName('song')[0].innerHTML;
  lyrics.getElementsByTagName('song')[1].innerHTML = source.getElementsByTagName('song')[0].innerHTML;
  lyrics.getElementsByTagName('album')[0].innerHTML = source.getElementsByTagName('album')[0].innerHTML;
  lyrics.getElementsByTagName('album')[1].innerHTML = source.getElementsByTagName('album')[0].innerHTML;
  lyrics.getElementsByTagName('artist')[0].innerHTML = source.getElementsByTagName('artist')[0].innerHTML;
  lyrics.getElementsByTagName('artist')[1].innerHTML = source.getElementsByTagName('artist')[0].innerHTML;

  lyrics.classList.add('visible');
  setTimeout(function(){ blocks.classList.add('hidden');
  header.classList.remove('header-shadow');
  header.classList.add('header-border'); }, 210)
}

// Hide lyrics window, or whatever hovering window is active.
function hideHover(element) {
  var hoverBoard = document.getElementById(element);
  var header = document.getElementsByTagName('header')[0];
  var blocks = document.getElementById('blocks');

  header.classList.remove('header-border');
  header.classList.add('header-shadow');
  blocks.classList.remove('hidden');
  hoverBoard.classList.remove('visible');
}

// Select text on click.
function selectText(element) {
  document.getElementById(element).select();
}

// Copy text on click.
function copyText(element) {
  document.getElementById(element).select();
  var lyrics = document.getElementById(element).innerHTML;
  navigator.clipboard.writeText(lyrics).then(function() {
    document.getElementsByClassName('btn-first')[0].innerHTML = "Success! Copy Again?";
  }, function() {
    document.getElementsByClassName('btn-first')[0].innerHTML = "Failed! Try Again?";
  });
}