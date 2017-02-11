'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupOverlay = document.querySelector('.overlay');
var setupClose = document.querySelector('.setup-close');
var ESCAPE_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;
// открываем окно
setupOpen.addEventListener('click', function () {
  setupOverlay.classList.remove('invisible');
});
// добавляем кейкод на клавишу enter
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    setupOverlay.classList.remove('invisible');
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESCAPE_KEY_CODE) { // если окно открыто, то при нажатии на esc окно закрывается
        setupOverlay.classList.add('invisible');
      }
    });
  }
});
// закрываем окно
setupClose.addEventListener('click', function () {
  setupOverlay.classList.add('invisible');
});
// добавляем кейкод на клавишу escape
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    setupOverlay.classList.add('invisible');
  }
});
// маг
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
