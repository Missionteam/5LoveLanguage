

function getQueryParams(url) {
    const queryParams = {};
    url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
      queryParams[key] = value;
    });
    return queryParams;
  }

  const queryParams = getQueryParams(window.location.href);
  const result = document.getElementById('result');
  const resultText = document.getElementById('resultText');

  if (queryParams.diagnosis) {
    if(queryParams.diagnosis === 'a'){
        result.textContent += '「肯定的な言葉」';
        resultText.innerHTML +='「肯定的な言葉」と診断されたパートナーさんが求めているのは、自分を認めてもらうこと😌<br><br>行動で表してるつもりって？<br>いいえ、言葉にして伝えることが大切です💌<br>普段は言えない「好き」の気持ち、これを機会に伝える練習始めませんか？';
    }else if(queryParams.diagnosis === 'b'){
        result.textContent += '「２人の時間の質」';
        resultText.innerHTML += '「2人の時間の質」と診断されたパートナーさんが求めているのは、<br>「自分」に集中してもらうこと👀<br><br>すぐにスマホを触ったり、自分の話ばかりしたりしていませんか？<br>「パートナーとの時間を大切に過ごす」という意識を持つことが大切です💌';
    }else if(queryParams.diagnosis === 'c'){
        result.textContent += '「贈り物」';
        resultText.innerHTML += '「贈り物」と診断されたパートナーさんが求めているのは、視覚的に愛情を確認できる「贈り物」🎁<br><br>とは言っても、高価なものである必要はありません。「自分のことを考えてくれている」という気持ちが嬉しいのです💌<br><br>記念日しかして来なかったという方も、<br>これを機に日常プレゼント始めてみませんか？';
    }else if(queryParams.diagnosis === 'd'){
        result.textContent += '「サービス行為」';
        resultText.innerHTML += '「サービス行為」と診断されたパートナーさんが求めているのは、「自分がして欲しいこと」をしてもらうこと🧚‍♀️<br><br>贈り物の文脈では、サプライズも嬉しいけれど、自分が欲しいものをもらいたいと思っているかも？👀<br><br>何かして欲しいことはないか、こまめに聞いてあげることがポイントです💡';
    }else if(queryParams.diagnosis === 'e'){
        result.textContent += '「スキンシップ」';
        resultText.innerHTML += '「スキンシップ」と診断されたパートナーさんが求めているのは、「体に触れてもらう」こと🫂<br><br>・愛情は言葉でたくさん表現している<br>・行動で示している<br><br>という方は要注意👀どんなに優しくされても、触ってもらえないことには満足しきれないのです...';
    }else {
      result.textContent += "診断に失敗しました。"
    }
  } else {
    result.textContent = '診断結果が見つかりませんでした。';
  }

  const makeHapinessBtn = document.getElementById('makeHappiness');
  makeHapinessBtn.addEventListener('click', () => {
    if(queryParams.diagnosis === 'a'){
      window.location.href = 'https://lovers-happiness-word.studio.site/';
  }else if(queryParams.diagnosis === 'b'){
    window.location.href = 'https://lovers-happiness-time.studio.site/';
  }else if(queryParams.diagnosis === 'c'){
    window.location.href = 'https://lovers-happiness-present.studio.site/';
  }else if(queryParams.diagnosis === 'd'){
    window.location.href = 'https://lovers-happiness-service.studio.site/';
  }else if(queryParams.diagnosis === 'e'){
    window.location.href = 'https://lovers-happiness-skinsip.studio.site/';
  }else {
    window.location.href = 'https://404.studio.site/'
  }
  });