// 質問データ（シンプル版：最大2問）
const questions = [
    {
        id: 1,
        question: 'お子さんの年齢は？',
        options: [
            { text: '0歳（離乳食期：5〜11ヶ月）', value: '0' },
            { text: '1歳〜1歳半（離乳食完了期）', value: '1-1.5' },
            { text: '1歳半〜3歳（幼児食期）', value: '1.5-3' },
            { text: '3歳〜6歳', value: '3-6' }
        ]
    },
    {
        id: 2,
        question: '理想の食事作りは？',
        options: [
            { text: '大人と子どものご飯を同時に作りたい', value: 'together' },
            { text: '子どもの分だけ週末にまとめてつくって冷凍したい', value: 'freezing' },
            { text: '毎日の献立を考えなくてよくなりたい', value: 'menu' }
        ]
    }
];

let currentQuestionIndex = 0;
let answers = {};
let questionHistory = []; // 質問履歴を保存

// ページ読み込み時に最初の質問を表示
document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
});

// 質問を表示
function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionTitle = document.getElementById('questionTitle');
    const optionsContainer = document.getElementById('optionsContainer');
    const backBtn = document.getElementById('backBtn');

    // 質問タイトルを設定
    questionTitle.textContent = question.question;

    // 選択肢をクリア
    optionsContainer.innerHTML = '';

    // 100ms遅延してボタンを生成（画面遷移をスムーズに）
    setTimeout(() => {
        // 選択肢を生成
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.text;
            
            // クリック時の処理
            button.onclick = () => selectOption(question.id, option.value);
            
            // タッチイベントも追加（スマホ対応）
            button.addEventListener('touchend', (e) => {
                e.preventDefault();
                selectOption(question.id, option.value);
            });
            
            optionsContainer.appendChild(button);
        });

        // プログレスバーを更新
        updateProgress();

        // 戻るボタンの表示/非表示
        if (questionHistory.length > 0) {
            backBtn.style.display = 'block';
        } else {
            backBtn.style.display = 'none';
        }
    }, 100);
}

// 選択肢を選んだ時の処理
function selectOption(questionId, value) {
    // 回答を保存
    answers[`q${questionId}`] = value;
    
    // 現在の質問インデックスを履歴に保存
    questionHistory.push(currentQuestionIndex);

    // 次の質問へ
    if (questionId === 1) {
        // Q1の回答に応じて分岐
        if (value === '0') {
            // 0歳 → 診断完了
            goToResult();
        } else if (value === '1-1.5') {
            // 1歳〜1歳半 → 診断完了
            goToResult();
        } else if (value === '1.5-3') {
            // 1歳半〜3歳 → Q2へ
            currentQuestionIndex = 1;
            showQuestion();
        } else if (value === '3-6') {
            // 3歳〜6歳 → 診断完了
            goToResult();
        }
    } else if (questionId === 2) {
        // Q2まで回答 → 診断完了
        goToResult();
    }
}

// プログレスバーを更新
function updateProgress() {
    const currentQuestion = document.getElementById('currentQuestion');
    const totalQuestions = document.getElementById('totalQuestions');
    const progressFill = document.getElementById('progressFill');
    
    // 1歳半〜3歳の場合は2問、それ以外は1問
    const total = (answers.q1 === '1.5-3') ? 2 : 1;
    const progress = ((currentQuestionIndex + 1) / total) * 100;
    
    currentQuestion.textContent = currentQuestionIndex + 1;
    totalQuestions.textContent = total;
    progressFill.style.width = progress + '%';
}

// 前の質問に戻る
function goBack() {
    if (questionHistory.length > 0) {
        // 履歴から前の質問インデックスを取得
        currentQuestionIndex = questionHistory.pop();
        
        // 前の質問の回答を削除
        delete answers[`q${questions[currentQuestionIndex].id}`];
        
        // 質問を再表示
        showQuestion();
    }
}

// 診断結果ページへ移動
function goToResult() {
    // 回答をlocalStorageに保存
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
    
    // 結果ページへ遷移
    window.location.href = 'result.html';
}
