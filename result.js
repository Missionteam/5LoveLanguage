

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
        resultText.innerHTML +='「肯定的な言葉」のあなたは、<br><br>・誉められる<br>・感謝される<br>・励まされる<br>など、<br><br>自分を認めてもらう言葉を<br>かけられた時、もっとも愛情を感じます。';
    }else if(queryParams.diagnosis === 'b'){
        result.textContent += '「２人の時間の質」';
        resultText.innerHTML += '「2人の時間の質」のあなたは、自分のために時間を割いてもらうこと、たとえば、<br><br>・真摯に話を聞いてもらうこと<br>・体験分かち合えること<br><br>でもっとも愛情を感じます。';
    }else if(queryParams.diagnosis === 'c'){
        result.textContent += '「贈り物」';
        resultText.innerHTML += '「贈り物」のあなたは<br>自分を心に留めてくれている<br>と目に見えてわかる、<br><br>プレゼントしてもらうこと<br><br>で最も愛情を感じます。';
    }else if(queryParams.diagnosis === 'd'){
        result.textContent += '「サービス行為」';
        resultText.innerHTML += '「サービス行為」のあなたは、<br>自分がやってほしいと願うことを<br>してもらうことで<br>もっとも愛情を感じます。<br><br>何かしてほしいことはないか、<br>これに聞いてほしいと思っています。';
    }else if(queryParams.diagnosis === 'e'){
        result.textContent += '「スキンシップ」';
        resultText.innerHTML += '「スキンシップ」のあなたは、<br>当店体に触れることで<br>もっとも愛情を感じます。<br><br>体に触れられないと、どんなに<br>優しくされても愛されていない<br>と感じてしまうため、積極的な<br>スキンシップが欲しいと思っています。';
    }else {
        "診断に失敗しました。"
    }
  } else {
    result.textContent = '診断結果が見つかりませんでした。';
  }