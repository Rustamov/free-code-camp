"use strict";
const textInput = document.querySelector('#text-input');
const checkButton = document.querySelector('#check-btn');
const resultNode = document.querySelector('#result .user-input');

const isPalindrome = (text) => {
  const lowerCaseStr = text.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

  return lowerCaseStr === [...lowerCaseStr].reverse().join('');
};

const showResult = (isPalindrome, text) => {  
  resultNode.innerHTML =  `<strong>${text}</strong> is ${isPalindrome ? '' : 'not '}a palindrome.`;
}

checkButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (textInput.value === '') {
    alert('Please input a value');
    return;
  }

  showResult(isPalindrome(textInput.value), textInput.value);
  textInput.value === '';
})

