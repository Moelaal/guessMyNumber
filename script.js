'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.highscore').textContent = 20;

document.querySelector('.guess').textContent = 23;

console.log(document.querySelector('.guess').value);
*/

/*
let randomz = function () {
  return Math.floor(Math.random() * 20) + 1;
};
console.log(randomz());
let score = 20;
let highScore = 0;
const msg = function (massage) {
  document.querySelector('.message').textContent = massage;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNum = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    msg('🕷 Please enter a number');
  } else if (guess !== randomz()) {
    if (score > 1) {
      msg(guess > randomz() ? 'Too high' : 'Too low');
      score--;
      displayScore(score);
    } else {
      msg('You lost the game');
      displayScore(1);
    }
  } else if (guess === randomz()) {
    msg('🎊 congrats you correct');
    document.body.style.backgroundColor = 'dodgerblue';
    document.querySelector('.number').style.width = '35rem';
    displayNum(randomz());
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  msg('Start guessing...');
  randomz();
  displayScore(20);
  displayNum('?');
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').textContent = '';
});
*/
/*
let randomzz = Math.floor(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const msg = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNum = function (number) {
  document.querySelector('.number').textContent = number;
};

let displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    msg('Please enter a number');
  } else if (guess === randomzz) {
    msg('corret answer!');
    displayNum(randomzz);
    document.body.style.backgroundColor = 'dodgerblue';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== randomzz) {
    if (score > 1) {
      msg(guess > randomzz ? 'Too high' : 'Too low');
      score--;
      displayScore(score);
    } else {
      msg('you lost the game ');
      displayScore(1);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  msg('Start guessing...');
  displayNum('?');
  displayScore('20');
  randomzz = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
*/
let randomzz = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

let msg = function (message) {
  document.querySelector('.message').textContent = message;
};

let number = function (num) {
  document.querySelector('.number').textContent = num;
};

let score2 = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    msg('Please enter a number');
  } else if (guess !== randomzz) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      guess > randomzz ? msg('Too high') : msg('Too low');
    } else {
      msg('you lost the game');
      score2(1);
    }
  } else if (guess === randomzz) {
    msg('Correct answer congrats');
    document.body.style.backgroundColor = 'dodgerblue';
    document.querySelector('.number').style.width = '30rem';
    number(guess);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomzz = Math.floor(Math.random() * 20) + 1;
  msg('Start gussing a number');
  score2(20);
  document.querySelector('.guess').value = '';
  number('?');
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
