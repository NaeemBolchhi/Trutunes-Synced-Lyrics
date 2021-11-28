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

// Add blocks.
function addBlocks(n) {
  var blockSec, blockObj;
  blockSec = document.getElementById('blocks');
  blockObj = document.createElement('a');
  blockObj.id = userconfig[1].blocks[n].id;
  blockObj.className = 'col-d4 col-m6';
  blockObj.href = userconfig[1].blocks[n].link;
  if (userconfig[1].blocks[1].newTab === "YES") {blockObj.target = '_blank';}
  blockObj.innerHTML = '<div class="block flex"><h1 class="block-icon flex flex-center"><img src="' + userconfig[1].blocks[n].webp + '" alt="' + userconfig[1].blocks[n].song + '" /></h1><h2 class="block-txt"><p class="song"><song>' + userconfig[1].blocks[n].song + '</song></p><p class="info"><album>' + userconfig[1].blocks[n].album + '</album><br /><artist>' + userconfig[1].blocks[n].artist + '</artist></p></h2></div>';
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

// Select text on click.
function selectText(element) {
  document.getElementById(element).select();
}
