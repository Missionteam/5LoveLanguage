
function getQueryParams(url) {
  const queryParams = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      queryParams[key] = value;
  });
  return queryParams;
}

const queryParams = getQueryParams(window.location.href);
const questions = document.querySelectorAll('.question');
const resultButton = document.getElementById('resultButton');
const result = document.getElementById('result');

const scores = { a: 0, b: 0, c: 0, d:0 , e:0 };

questions.forEach((question) => {
  const buttons = question.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const prevSelected = question.querySelector('.selected');
      if (prevSelected) {
        prevSelected.classList.remove('selected');
        scores[prevSelected.dataset.choice]--;
      }

      button.classList.add('selected');
      scores[button.dataset.choice]++;
    });
  });
});

resultButton.addEventListener('click', () => {
  const maxScore = Math.max(scores.a, scores.b, scores.c,scores.d,scores.e);
  let diagnosis = '';

if(scores.a +scores.b +scores.c +scores.d +scores.e<10){
  diagnosis='none';
}
  else if (maxScore === scores.a) {
    diagnosis = 'a';
  } else if (maxScore === scores.b) {
    diagnosis = 'b';
  }else if (maxScore === scores.c) {
    diagnosis = 'c';
  }else if (maxScore === scores.d) {
    diagnosis = 'd';
  }else if (maxScore === scores.e) {
    diagnosis = 'e';
  }  else {
    diagnosis = '診断に失敗しました';
  }
  if(diagnosis ==='none'){
    
  }else{
  if(queryParams.user === 'b'){
    window.location.href = 'b_result.html?diagnosis=' + diagnosis;
  }else{
  window.location.href = 'a_result.html?diagnosis=' + diagnosis;
  }}
});