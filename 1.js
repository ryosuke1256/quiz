//window.alert ver

//パーツ
const quiz = [
  {
    question: "実質金利とは？",
    choices: [
      "名目金利＋物価上昇率",
      "名目金利ー物価上昇率",
      "平均賃金×物価上昇率",
      "平均賃金÷物価上昇率",
    ],
    correct: "名目金利ー物価上昇率",
  },
  {
    question: "ドルはどこの国の通貨ですか？",
    choices: ["日本", "ドイツ", "オーストラリア", "アメリカ"],
    correct: "アメリカ",
  },
  {
    question: "100万円が翌年120万円になりました。年平均利回りは？",
    choices: ["10%", "110%", "20%", "120%"],
    correct: "20%",
  },
  {
    question: "PERについて正しくない記述はどれ？",
    choices: [
      "1株あたりの純資産を示している",
      "株価/EPSで求められる",
      "一般的にPERが高いほど成長性が高い",
      "時価総額/純利益で求められる",
    ],
    correct: "1株あたりの純資産を示している",
  },
]; //配列quiz

const b = document.getElementById("button");
const Bn = document.getElementsByName("button"); //リストで返す

let quizCount = 0;
let scoreCount = 0;
let c = 0; //count
let d = 0;

//popup部分
const popup = document.getElementById("js-popup");
const text = document.getElementById("text");

//最初の質問文と問題文の表示
while (c < Bn.length) {
  const a = document.getElementById("question");
  a.textContent = quiz[quizCount].question;
  Bn[c].textContent = quiz[quizCount].choices[c];
  c++;
}
//console.log(quiz.length);

//ボタンを押した時の処理→次の問題へ
b.addEventListener("click", (e) => {
  //console.log(e);

  if (e.target.textContent === quiz[quizCount].correct) {
    scoreCount++;
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
  nextquestion();
});

//次の問題へ
const nextquestion = () => {
  quizCount++;
  d = 0;
  if (quizCount < quiz.length) {
    console.log(quizCount);
    const a = document.getElementById("question");
    a.textContent = quiz[quizCount].question;

    while (d < Bn.length) {
      Bn[d].textContent = quiz[quizCount].choices[d];
      d++;
    }
  } else {
    popupText();
  }
};
/*
//スコアの表示
const score = () => {
    document.write("正答率" + ((scoreCount / quiz.length) * 100) + "%");
};
*/

//HTMLのクラスを切り替えてるだけ！！
//大事なのはHTMLCSS！！
//ボタンなしバージョン

function popupText() {
  popup.classList.toggle("is-show"); //popup.is-showクラスに切り替わる!
  text.innerHTML = "正答率" + (scoreCount / quiz.length) * 100 + "%";
  //ブラックアウトとpopup画面が出てくる！
  //toggle 二つの状態を切り替える
  //Element.classList　読み取り専用プロパティ
}
