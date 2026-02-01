// 質問データ
const questions = [
    {
        id: 1,
        question: "お子さんの年齢は？",
        options: [
            { text: "0歳（離乳食初期〜中期：5〜8ヶ月）", value: "0-early" },
            { text: "0歳（離乳食後期：9〜11ヶ月）", value: "0-late" },
            { text: "1歳〜1歳半（離乳食完了期）", value: "1-1.5" },
            { text: "1歳半〜3歳（幼児食期）", value: "1.5-3" },
            { text: "3歳〜6歳", value: "3-6" }
        ]
    },
    {
        id: 2,
        question: "離乳食・幼児食はどの段階？",
        options: [
            { text: "離乳食初期〜中期（ペースト〜みじん切り）", value: "early" },
            { text: "離乳食後期（5mm角〜1cm角）", value: "late" },
            { text: "離乳食完了期（1cm角〜一口大）", value: "complete" },
            { text: "幼児食（大人とほぼ同じ）", value: "toddler" },
            { text: "大人と同じ食事", value: "adult" }
        ]
    },
    {
        id: 3,
        question: "今一番悩んでいることは？",
        options: [
            { text: "離乳食を毎日作るのが大変", value: "daily-hard" },
            { text: "献立が思いつかない", value: "no-idea" },
            { text: "大人と子どもの食事を別々に作るのが面倒", value: "separate-hard" },
            { text: "栄養バランスが心配", value: "nutrition" }
        ]
    },
    {
        id: 4,
        question: "料理をするのはいつが多い？",
        options: [
            { text: "週末にまとめて作り置き", value: "weekend" },
            { text: "毎日少しずつ作る", value: "daily" },
            { text: "その日の気分で決める", value: "flexible" }
        ]
    },
    {
        id: 5,
        question: "フリージング（冷凍保存）は好き？",
        options: [
            { text: "よく使う・好き", value: "love" },
            { text: "たまに使う", value: "sometimes" },
            { text: "あまり使わない・苦手", value: "not-like" }
        ]
    },
    {
        id: 6,
        question: "大人の食事と子どもの食事、どうしたい？",
        options: [
            { text: "同じメニューで一緒に食べたい", value: "together" },
            { text: "子どもだけ別に作りたい", value: "separate" },
            { text: "どちらでもいい", value: "flexible" }
        ]
    },
    {
        id: 7,
        question: "献立を考えるとき、どうしてる？",
        options: [
            { text: "毎日献立を考えるのが苦手", value: "not-good" },
            { text: "自分でアレンジしたい", value: "arrange" },
            { text: "まるっとマネしたい", value: "copy" }
        ]
    },
    {
        id: 8,
        question: "レシピ本に求めるものは？",
        options: [
            { text: "1週間分の献立がまるっと載っている", value: "weekly-menu" },
            { text: "たくさんのレシピから選びたい", value: "many-recipes" },
            { text: "簡単で時短できるもの", value: "easy" },
            { text: "栄養バランスが整っているもの", value: "nutrition" }
        ]
    }
];

// 回答を保存する配列
let answers = [];
let currentQuestionIndex = 0;

// ページ読み込み時に最初の質問を表示
window.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestionIndex);
    updateProgress();
    updateBackButton();
});

// 質問を表示する関数
function showQuestion(index) {
    const question = questions[index];
    document.getElementById('questionTitle').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    // 少し遅延してボタンを作成（アニメーション完了後）
    setTimeout(() => {
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.text;
            button.addEventListener('click', () => selectOption(option.value));
            // タッチデバイス用のイベントハンドラ
            button.addEventListener('touchend', (e) => {
                e.preventDefault();
                selectOption(option.value);
            });
            optionsContainer.appendChild(button);
        });
    }, 100);
    
    updateBackButton();
}

// 選択肢を選んだときの処理
function selectOption(value) {
    // 回答を保存
    answers[currentQuestionIndex] = value;
    
    // 次の質問へ
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
        updateProgress();
    } else {
        // 全ての質問が終わったら結果画面へ
        saveAnswersAndRedirect();
    }
}

// 前の質問に戻る
function goBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        updateProgress();
    }
}

// 戻るボタンの表示/非表示を更新
function updateBackButton() {
    const backBtn = document.getElementById('backBtn');
    if (currentQuestionIndex > 0) {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }
}

// プログレスバーを更新
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
}

// 回答を保存して結果画面へ遷移
function saveAnswersAndRedirect() {
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
    window.location.href = 'result.html';
}
