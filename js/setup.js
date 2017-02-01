"use strict"

var setupOpen = document.querySelector('.setup-open');
var setupOverlay = document.querySelector('.overlay');
setupOpen.addEventListener('click', function () {
  setupOverlay.classList.remove('invisible');
});
var setupClose = document.querySelector('.setup-close');
setupClose.addEventListener('click', function () {
  setupOverlay.classList.add('invisible');
});
var wizard = document.querySelector('#wizard');
var wizardFrench = document.querySelector('#wizard-coat');
var wizardFrenchColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
wizard.addEventListener('click', function () {
  wizardFrench.style.fill = wizardFrenchColors[Math.floor(Math.random() * wizardFrenchColors.length)];
});
var wizardEyes = document.querySelector('#wizard-eyes');
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizardEyesColors[Math.floor(Math.random() * wizardEyesColors.length)];
});
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var setupColorsFireballWrap = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.background = setupColorsFireballWrap[Math.floor(Math.random() * setupColorsFireballWrap.length)];
});


