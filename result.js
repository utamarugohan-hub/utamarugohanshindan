// Google Apps Script のウェブアプリURL
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw7QNBsN7SHiUaWYeGGAwLF6FP3XAYC_st0kgYHDXSzgTHTK9YBkaqMlVWYTD8DVYE0RQ/exec';

// 診断結果データ
const results = {
    'freezing-baby': {
        type: 'フリージング離乳食・幼児食タイプ',
        image: 'images/kantanfreezing.jpg',
        feature: '1週間分まとめて作って冷凍保存、たべる時は温めるだけで離乳食が完成！買い物・調理・献立をそのままマネして離乳食をできる限り悩まず進めたいタイプです。',
        reason: '買い物リストから下準備・調理までまるっとマネするだけで、1週間分のフリージング離乳食（後期まで）完了期と幼児食は単品レシピが完成！毎食の献立も載っているので、その通りにあげればOK。あげるときはチンするだけで簡単です。
',
        bookFeatures: [
            '1週間分のフリージング離乳食',
            '離乳食完了期・幼児食の単品レシピ集',
            '買い物リスト・下準備・調理の流れを掲載',
            '毎食の献立付き',
            '対象年齢：0歳〜6歳（特に11ヶ月までがメイン）'
        ],
        recommended: [
            'はじめての離乳食のかた',
            '週末にまとめて作り置きしたい',
            'ごはんをあげる時は温めるだけで楽したい',
            '献立を考えるのが苦手',
            '自分で1から考えるのが不安・苦手なかた'
        ],
        bookTitle: 'うたまるごはんのかんたんフリージング離乳食・幼児食',
        links: [
            { text: '楽天市場はこちら', url: 'https://a.r10.to/hPOKvX', target: '楽天市場' },
            { text: 'Amazonはこちら', url: 'https://www.amazon.co.jp/dp/4058017767', target: 'Amazon' }
        ]
    },
    'freezing-complete': {
        type: '完了期フリージングタイプ',
        image: 'images/1weekFreezing.png',
        feature: '離乳食完了期の赤ちゃんにぴったり！1週間分のフリージングで子どものごはんを楽に、迷わず進めたいタイプです。',
        reason: '1冊目のうたまるごはんのかんたんフリージング離乳食・幼児食の続編として、離乳食完了期（1歳～1歳半）に特化した1週間フリージングレシピ。買い物・下準備・調理・献立をまるっとマネするだけ。あげるときはチンするだけで毎食の献立が完成！',
        bookFeatures: [
            '離乳食完了期（1歳〜1歳半）専用',
            '週末にまとめて作り置きしたい',
            'ごはんをあげる時は温めるだけで楽したい',
            '献立を考えるのが苦手',
            '自分で1から考えるのが不安・苦手なかた'
        ],
        recommended: [
            'はじめての離乳食のかた',
            '週末にまとめて作り置きしたい',
            '平日は温めるだけで楽したい'
        ],
        bookTitle: 'うたまるごはんの完了期1週間フリージング',
        links: [
            { text: '購入サイトはこちら', url: 'https://utamarugohan.base.shop', target: '購入サイト' }
        ]
    },
    'freezing-toddler': {
        type: '幼児食フリージングタイプ',
        image: 'images/2weekFreezing.png',
        feature: '幼児食期の子どもの分だけフリージングで作り置き！大人の食事は別で作りたいタイプです。',
        reason: '2週間分の夜ごはん（メイン・副菜・スープ）のフリージングレシピ。朝・夜など1日2食使ってもOK（その場合は1週間分）。食べるときはチンするだけで簡単です。',
        bookFeatures: [
            '幼児食の2週間フリージング',
            '買い物・調理・献立をそのままマネするだけで、メイン・副菜・スープが作れる',
            '1日2食使うことも可能。（その場合は1週間分になる。）',
            '食べるときはチンするだけ'
        ],
        recommended: [
            '幼児食の献立に悩んでいる',
            '子ども分だけフリージングしたい',
            '帰宅後子どもにすぐにごはんをあげたい',
            '大人は簡単なもので済ませたい&ゆっくり作りたい',
            'まとめて作り置きしたい',
            'お弁当にもおすすめ'
        ],
        bookTitle: 'うたまるごはんの幼児食2週間フリージング',
        links: [
            { text: '購入サイトはこちら', url: 'https://utamarugohan.base.shop/categories/6926213', target: '購入サイト' }
        ]
    },
    'toriwake': {
        type: 'とりわけ親子ごはんタイプ',
        image: 'images/oyakogohan.jpg',
        feature: '大人と子どもの食事を同じメニューから取り分けて、同時に作りたいタイプです。',
        reason: '大人と同じメニューを取り分けられる幼児食レシピが200レシピ以上掲載！単品レシピ集なので、毎日好きなメニューを選べます。',
        bookFeatures: [
            '大人と同じメニューを取り分け可能',
            '200レシピ以上掲載',
            '単品レシピ集',
            '対象年齢：1歳半〜3歳',
            '大人2食+子ども2食分のレシピ、あまったらストックできるように保存方法も記載',
            '献立例も掲載'
        ],
        recommended: [
            'フリージングからステップアップしたい',
            '大人と子どもの食事を一緒に作りたい',
            'たくさんのレシピから選びたい',
            '毎日違うメニューを楽しみたい',
            '子どもはうす味で、大人はしっかり味で満足できるごはんを作りたい'
        ],
        bookTitle: 'うたまるごはんのかんたん親子ごはん',
        links: [
            { text: '楽天市場はこちら', url: 'https://a.r10.to/hg0cQl', target: '楽天市場' },
            { text: 'Amazonはこちら', url: 'https://www.amazon.co.jp/dp/4058020245', target: 'Amazon' }
        ]
    },
    'kondate': {
        type: 'まるごと親子献立タイプ',
        image: 'images/oyakokondate.jpg',
        feature: '毎日の献立を考えるのが大変。買い物から調理まで、全部まるっとマネしたいタイプです。',
        reason: '平日5日間の献立を丸ごとマネできる！買い物・下準備・調理・献立の流れをそのまま再現できます。大人と子どもが一緒に食べられるメニューで、時短・簡単に作れます。',
        bookFeatures: [
            'まるっとマネする平日5日間の献立',
            '買い物リスト・下準備・調理の流れ付き',
            '大人と子どもが一緒に食べられる',
            '時短・簡単メニュー',
            '対象年齢：1歳半〜6歳（1歳半〜3歳は調味料を少し減らす）'
        ],
        recommended: [
            '毎日献立を考えるのが大変',
            'いつも同じようなメニューでマンネリしている',
            '帰宅後30分でごはんを作りたい',
            '大人と子どもが一緒に食べたい',
            '買い物は週に1回まとめ買いしたい',
            '冷蔵庫の食材をよくいたませてしまう',
            '子どもに栄養たっぷりのごはんをあげたい'
        ],
        bookTitle: 'うたまるごはんの平日らくちん親子献立',
        links: [
            { text: '楽天市場はこちら', url: 'https://a.r10.to/hgwpK5', target: '楽天市場' },
            { text: 'Amazonはこちら', url: 'https://amzn.asia/d/89ZKtH2', target: 'Amazon' }
        ]
    }
};

// グローバル変数
let currentResultType = '';
let currentBookTitle = '';
let hasClickedLink = false;

// ページ読み込み時に診断結果を表示
document.addEventListener('DOMContentLoaded', () => {
    // localStorageから回答を取得
    const answersJson = localStorage.getItem('quizAnswers');
    if (!answersJson) {
        alert('診断データが見つかりません。最初からやり直してください。');
        window.location.href = 'index.html';
        return;
    }

    const answers = JSON.parse(answersJson);
    
    // 診断結果を決定
    const resultType = determineResult(answers);
    
    // 診断結果を表示
    displayResult(resultType);
    
    // クリック計測（診断完了時）
    trackDiagnosis(resultType);
});

// 診断結果を決定（シンプル版）
function determineResult(answers) {
    const age = answers.q1;
    const style = answers.q2;

    // 【0歳】フリージング離乳食・幼児食タイプ
    if (age === '0') {
        return 'freezing-baby';
    }

    // 【1歳〜1歳半】完了期フリージングタイプ
    if (age === '1-1.5') {
        return 'freezing-complete';
    }

    // 【1歳半〜3歳】スタイルで判定
    if (age === '1.5-3') {
        if (style === 'together') {
            // 大人と子どものご飯を同時に調理したい
            return 'toriwake';
        } else if (style === 'freezing') {
            // 週末にまとめてつくって冷凍したい
            return 'freezing-toddler';
        } else if (style === 'menu') {
            // 毎日の献立を見たい
            return 'kondate';
        }
    }

    // 【3歳〜6歳】まるごと親子献立タイプ
    if (age === '3-6') {
        return 'kondate';
    }

    // デフォルト
    return 'kondate';
}

// 診断結果を表示
function displayResult(resultType) {
    const result = results[resultType];
    
    // グローバル変数に保存
    currentResultType = result.type;
    currentBookTitle = result.bookTitle;
    
    // 各要素に値を設定
    document.getElementById('resultType').textContent = result.type;
    document.getElementById('bookImage').src = result.image;
    document.getElementById('resultFeature').textContent = result.feature;
    document.getElementById('resultReason').textContent = result.reason;
    document.getElementById('bookTitle').textContent = result.bookTitle;
    
    // 本の特徴をリスト表示
    const bookFeaturesUl = document.getElementById('resultBookFeatures');
    bookFeaturesUl.innerHTML = '';
    result.bookFeatures.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        bookFeaturesUl.appendChild(li);
    });
    
    // おすすめポイントをリスト表示
    const recommendedUl = document.getElementById('resultRecommended');
    recommendedUl.innerHTML = '';
    result.recommended.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recommendedUl.appendChild(li);
    });
    
    // 購入リンクを表示
const purchaseLinksDiv = document.getElementById('purchaseLinks');
purchaseLinksDiv.innerHTML = '';

// 楽天・Amazon で販売している本の場合、書店情報を追加
if (result.links.some(link => link.target === '楽天市場' || link.target === 'Amazon')) {
    const bookstoreNote = document.createElement('p');
    bookstoreNote.textContent = '全国の書店さんでも販売中！';
    bookstoreNote.style.textAlign = 'center';
    bookstoreNote.style.fontSize = '14px';
    bookstoreNote.style.color = '#7e3b28';
    bookstoreNote.style.marginBottom = '15px';
    bookstoreNote.style.fontWeight = '500';
    purchaseLinksDiv.appendChild(bookstoreNote);
}

result.links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.textContent = link.text;
    a.className = 'purchase-link';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    
    // クリック時にトラッキング
    a.addEventListener('click', () => {
        hasClickedLink = true;
        trackClick(link.target);
    });
    
    purchaseLinksDiv.appendChild(a);
});
    
    // フッターのオンラインショップリンクもトラッキング
    const footerShopLink = document.getElementById('footerShopLink');
    if (footerShopLink) {
        footerShopLink.addEventListener('click', () => {
            hasClickedLink = true;
            trackClick('フッターオンラインショップ');
        });
    }
}

// 診断完了時のトラッキング
function trackDiagnosis(resultType) {
    // まず「クリック無し」で記録
    const data = createTrackingData('クリック無し');
    
    // Google Apps Script に送信
    fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).catch(error => {
        console.error('診断記録エラー:', error);
    });
}

// 購入リンククリック時のトラッキング
function trackClick(target) {
    const data = createTrackingData(target);
    
    // navigator.sendBeacon で送信（ページ離脱時も確実に送信）
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    navigator.sendBeacon(GOOGLE_APPS_SCRIPT_URL, blob);
}

// トラッキングデータを作成
function createTrackingData(clickTarget) {
    // デバイス判定
    const userAgent = navigator.userAgent.toLowerCase();
    let device = 'PC';
    if (userAgent.indexOf('iphone') !== -1 || userAgent.indexOf('android') !== -1) {
        device = 'スマホ';
    } else if (userAgent.indexOf('ipad') !== -1 || userAgent.indexOf('tablet') !== -1) {
        device = 'タブレット';
    }
    
    return {
        timestamp: new Date().toLocaleString('ja-JP'),
        resultType: currentResultType,
        bookTitle: currentBookTitle,
        clickTarget: clickTarget,
        device: device,
        region: '取得中',
        ipAddress: '取得中'
    };
}

// ページ離脱時にクリックしていない場合も記録
window.addEventListener('beforeunload', () => {
    if (!hasClickedLink) {
        const data = createTrackingData('クリック無し');
        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        navigator.sendBeacon(GOOGLE_APPS_SCRIPT_URL, blob);
    }
});

// もう一度診断する
function retryQuiz() {
    localStorage.removeItem('quizAnswers');
    window.location.href = 'index.html';
}
