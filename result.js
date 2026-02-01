// 診断結果データ
const results = {
    'freezing-baby': {
        type: 'フリージング離乳食タイプ',
        image: 'images/kantanfreezing.jpg',
        feature: '週末にまとめて作って冷凍保存、平日は温めるだけで離乳食が完成！忙しいママ・パパにぴったりのタイプです。',
        reason: '買い物リストから下準備・調理までまるっとマネするだけで、1週間分のフリージング離乳食が完成！毎食の献立も載っているので、その通りにあげればOK。あげるときはチンするだけで簡単です。',
        bookFeatures: [
            '1週間分のフリージング離乳食レシピ',
            '買い物リスト・下準備・調理の流れを掲載',
            '毎食の献立付き',
            '対象年齢：0歳〜6歳（特に11ヶ月までがメイン）'
        ],
        recommended: [
            '週末にまとめて作り置きしたい',
            '平日は温めるだけで楽したい',
            '献立を考えるのが苦手'
        ],
        bookTitle: 'うたまるごはんのかんたんフリージング離乳食・幼児食',
        links: [
            { text: '楽天市場はこちら', url: 'https://a.r10.to/hPOKvX' },
            { text: 'Amazonはこちら', url: 'https://www.amazon.co.jp/dp/4058017767' }
        ]
    },
    'freezing-complete': {
        type: '完了期フリージングタイプ',
        image: 'images/1weekFreezing.png',
        feature: '離乳食完了期の赤ちゃんにぴったり！1週間分のフリージングで平日を楽にしたいタイプです。',
        reason: '1冊目の続編として、離乳食完了期（1歳〜1歳半）に特化した1週間フリージングレシピ。買い物・下準備・調理をまるっとマネするだけで、毎食の献立が完成！あげるときはチンするだけです。',
        bookFeatures: [
            '離乳食完了期（1歳〜1歳半）専用',
            '1週間分のフリージングメニュー',
            '毎食の献立付き',
            'あげるときはチンするだけ'
        ],
        recommended: [
            '離乳食完了期の赤ちゃんがいる',
            '週末にまとめて作り置きしたい',
            '平日は温めるだけで楽したい'
        ],
        bookTitle: 'うたまるごはんの完了期1週間フリージング',
        links: [
            { text: '購入サイトはこちら', url: 'https://utamarugohan.base.shop' }
        ]
    },
    'freezing-toddler': {
        type: '幼児食フリージングタイプ',
        image: 'images/2weekFreezing.png',
        feature: '幼児食期の子どもの分だけフリージングで作り置き！大人の食事は別で作りたいタイプです。',
        reason: '2週間分の夜ごはん（メイン・副菜・スープ）のフリージングレシピ。朝・夜など1日2食使ってもOK（その場合は1週間分）。食べるときはチンするだけで簡単です。',
        bookFeatures: [
            '幼児食の2週間フリージング',
            'メイン・副菜・スープのセット',
            '1日2食使えば1週間分にもなる',
            '食べるときはチンするだけ'
        ],
        recommended: [
            '子ども分だけフリージングしたい',
            '大人の食事は別で作りたい',
            '2週間分まとめて作り置きしたい'
        ],
        bookTitle: 'うたまるごはんの幼児食2週間フリージング',
        links: [
            { text: '購入サイトはこちら', url: 'https://utamarugohan.base.shop/categories/6926213' }
        ]
    },
    'toriwake': {
        type: 'とりわけレシピタイプ',
        image: 'images/oyakogohan.jpg',
        feature: '大人と子どもの食事を同じメニューから取り分けて、同時に作りたいタイプです。',
        reason: '大人と同じメニューを取り分けられる幼児食レシピが200レシピ以上掲載！単品レシピ集なので、毎日好きなメニューを選べます。',
        bookFeatures: [
            '大人と同じメニューを取り分け可能',
            '200レシピ以上掲載',
            '単品レシピ集',
            '対象年齢：1歳半〜3歳'
        ],
        recommended: [
            '大人と子どもの食事を一緒に作りたい',
            'たくさんのレシピから選びたい',
            '毎日違うメニューを楽しみたい'
        ],
        bookTitle: 'うたまるごはんのかんたん親子ごはん',
        links: [
            { text: '楽天市場はこちら', url: 'https://a.r10.to/hg0cQl' },
            { text: 'Amazonはこちら', url: 'https://www.amazon.co.jp/dp/4058020245' }
        ]
    },
    'kondate': {
        type: '献立丸ごとタイプ',
        image: 'images/oyakokondate.jpg',
        feature: '毎日の献立を考えるのが苦手。買い物リストから調理まで、全部まるっとマネしたいタイプです。',
        reason: '平日5日間の献立を丸ごとマネできる！買い物リスト・下準備・調理・献立の流れをそのまま再現できます。大人と子どもが一緒に食べられるメニューで、時短・簡単に作れます。',
        bookFeatures: [
            '平日5日間の献立',
            '買い物リスト・下準備・調理の流れ付き',
            '大人と子どもが一緒に食べられる',
            '時短・簡単メニュー',
            '対象年齢：1歳半〜6歳（1歳半〜3歳は調味料を少し減らす）'
        ],
        recommended: [
            '献立を考えるのが苦手',
            '買い物リストから調理まで全部マネしたい',
            '大人と子どもが一緒に食べたい'
        ],
        bookTitle: 'うたまるごはんの平日らくちん親子献立',
        links: [
            { text: '楽天市場はこちら', url: 'https://a.r10.to/hgwpK5' },
            { text: 'Amazonはこちら', url: 'https://amzn.asia/d/89ZKtH2' }
        ]
    }
};

// ページ読み込み時に診断結果を表示
window.addEventListener('DOMContentLoaded', () => {
    const answers = JSON.parse(localStorage.getItem('quizAnswers'));
    const resultType = determineResult(answers);
    displayResult(resultType);
    trackDiagnosis(resultType);
});

// 診断結果を判定する関数
function determineResult(answers) {
    const age = answers[0]; // Q1: 年齢
    const stage = answers[1]; // Q2: 段階
    const worry = answers[2]; // Q3: 悩み
    const cookTime = answers[3]; // Q4: 料理する時間
    const freezing = answers[4]; // Q5: フリージング
    const mealStyle = answers[5]; // Q6: 食事スタイル
    const menuStyle = answers[6]; // Q7: 献立スタイル
    const bookNeed = answers[7]; // Q8: レシピ本に求めるもの

    // 0歳（離乳食初期〜後期）→ フリージング離乳食タイプ
    if (age === '0-early' || age === '0-late' || stage === 'early' || stage === 'late') {
        return 'freezing-baby';
    }

    // 1歳〜1歳半（離乳食完了期）→ 完了期フリージングタイプ
    if (age === '1-1.5' || stage === 'complete') {
        return 'freezing-complete';
    }

    // 3歳〜6歳 → 献立丸ごとタイプ
    if (age === '3-6' || stage === 'adult') {
        return 'kondate';
    }

    // 1歳半〜3歳の場合、詳細判定
    if (age === '1.5-3' || stage === 'toddler') {
        // とりわけしたい → とりわけレシピタイプ
        if (mealStyle === 'together' || worry === 'separate-hard') {
            return 'toriwake';
        }

        // フリージング好き → 幼児食フリージングタイプ
        if (freezing === 'love' && mealStyle === 'separate') {
            return 'freezing-toddler';
        }

        // 献立重視 → 献立丸ごとタイプ
        if (menuStyle === 'copy' || menuStyle === 'not-good' || bookNeed === 'weekly-menu') {
            return 'kondate';
        }

        // たくさんのレシピから選びたい → とりわけレシピタイプ
        if (bookNeed === 'many-recipes' || menuStyle === 'arrange') {
            return 'toriwake';
        }

        // デフォルト → 献立丸ごとタイプ
        return 'kondate';
    }

    // デフォルト
    return 'kondate';
}

// 診断結果を表示する関数
function displayResult(resultType) {
    const result = results[resultType];

    document.getElementById('resultType').textContent = result.type;
    document.getElementById('bookImage').src = result.image;
    document.getElementById('bookImage').alt = result.bookTitle;
    document.getElementById('resultFeature').textContent = result.feature;
    document.getElementById('resultReason').textContent = result.reason;

    // 本の特徴
    const bookFeaturesContainer = document.getElementById('resultBookFeatures');
    bookFeaturesContainer.innerHTML = '';
    result.bookFeatures.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        bookFeaturesContainer.appendChild(li);
    });

    // こんな人におすすめ
    const recommendedContainer = document.getElementById('resultRecommended');
    recommendedContainer.innerHTML = '';
    result.recommended.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recommendedContainer.appendChild(li);
    });

    document.getElementById('bookTitle').textContent = result.bookTitle;

    // 購入リンク
    const linksContainer = document.getElementById('purchaseLinks');
    linksContainer.innerHTML = '';
    result.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = 'purchase-link';
        a.textContent = link.text;
        a.target = '_blank';
        a.addEventListener('click', () => trackClick(resultType, link.text));
        linksContainer.appendChild(a);
    });
}

// もう一度診断するボタン
function retryQuiz() {
    localStorage.removeItem('quizAnswers');
    window.location.href = 'index.html';
}

// 診断完了時の記録（クリック無し）
function trackDiagnosis(resultType) {
    // TODO: Google Apps Script との連携
    console.log('診断完了:', resultType, 'クリック無し');
}

// 購入リンククリック時の記録
function trackClick(resultType, linkText) {
    // TODO: Google Apps Script との連携
    console.log('クリック:', resultType, linkText);
}
