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

  if (maxScore === scores.a) {
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
  window.location.href = 'result.html?diagnosis=' + diagnosis;
  // result.textContent = '診断結果: '+ diagnosis;

});