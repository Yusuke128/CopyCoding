// Appコンポーネントの定義(関数コンポーネント)
function App() {
  // tweet(ツイート入力欄の文字列)という状態を定義
  // setTweetはtweetの値を更新する関数
  const [tweet, setTweet] = React.useState("");

  // JSXを返して画面に表示される部分を構成
  return (
    <div>
      {/* タイトル */}
      <h1>シンプルなX(旧Twitter)風アプリ</h1>

      {/* ツイート入力欄 */}
      <input
        type="text" //テキスト入力フィールド
        value={tweet} //入力欄の値はtweet(状態)を連動
        onChange={(e) => setTweet(e.target.value)}
        //入力が変化するたびにsetTweetを使って状態を更新
        placeholder="いまどうしてる?" //薄い表示のヒント文
      />
    </div>
  );
}

//Reactの描画先(root)を取得し、Appコンポーネントを表示する
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
