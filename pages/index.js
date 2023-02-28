import MyApplet from '../components/MyApplet.js';

function MyPage() {
  const jnlpFile = 'tipsod.jnlp';

  return (
    <div>
      <h1>JNLP 4D ORBIT VIEWER</h1>
      <MyApplet jnlpFile={jnlpFile} />
    </div>
  );
}

export default MyPage;
