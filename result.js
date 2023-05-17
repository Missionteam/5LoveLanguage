

function getQueryParams(url) {
    const queryParams = {};
    url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        queryParams[key] = value;
    });
    return queryParams;
}

const queryParams = getQueryParams(window.location.href);
const result = document.getElementById('result');
const resultText = document.getElementById('resultText');
const diagnosis = queryParams.diagnosis;

if (diagnosis) {
    if (diagnosis === 'a') {
        result.textContent += '「肯定的な言葉」';
        resultText.innerHTML += '「肯定的な言葉」のあなたは、<br><br>・誉められる<br>・感謝される<br>・励まされる<br><br>など、自分を認めてもらう言葉を<br>かけられた時、最も愛情を感じます。';
    } else if (diagnosis === 'b') {
        result.textContent += '「２人の時間の質」';
        resultText.innerHTML += '「2人の時間の質」のあなたは、自分のために時間を割いてもらうこと、たとえば、<br><br>・真摯に話を聞いてもらうこと<br>・体験分かち合えること<br><br>でもっとも愛情を感じます。';
    } else if (diagnosis === 'c') {
        result.textContent += '「贈り物」';
        resultText.innerHTML += '「贈り物」のあなたは<br>自分を心に留めてくれている<br>と目に見えてわかる、<br><br>・プレゼントしてもらうこと<br><br>で最も愛情を感じます。';
    } else if (diagnosis === 'd') {
        result.textContent += '「サービス行為」';
        resultText.innerHTML += '「サービス行為」のあなたは、<br>自分がやってほしいと願うことを<br>してもらうことで<br>もっとも愛情を感じます。<br><br>何かしてほしいことはないか、<br>こまめに聞いてほしいと思っています。';
    } else if (diagnosis === 'e') {
        result.textContent += '「スキンシップ」';
        resultText.innerHTML += '「スキンシップ」のあなたは、<br>体に触れることで<br>もっとも愛情を感じます。<br><br>体に触れられないと、どんなに<br>優しくされても愛されていない<br>と感じてしまうため、積極的な<br>スキンシップが欲しいと思っています。';
    } else {
        "診断に失敗しました。"
    }
} else {
    result.textContent = '診断結果が見つかりませんでした。';
}

const a_sharedBtn = document.getElementById("a_share");
const b_sharedBtn = document.getElementById("b_share");

// Aさんが共有ボタンを押したとき
if (diagnosis) {
    if (a_sharedBtn) {
        a_sharedBtn.addEventListener('click', () => {
            window.location.href = 'https://line.me/R/share?text=http://wp008561.wpx.jp/a_shared.html?diagnosis=' + diagnosis;
        }
        )
    }
    if (b_sharedBtn) {
        b_sharedBtn.addEventListener('click', () => {
            window.location.href = 'https://line.me/R/share?text=http://wp008561.wpx.jp/ab_shared.html?diagnosis=' + diagnosis;
        }
        )
    }
}