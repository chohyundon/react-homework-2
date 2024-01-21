import Header from "./pages/header";
import Main from "./pages/main";
import Footer from "./pages/footer";

//리액트에서 컴포넌트는 항상 대문자로 시작을 해야한다 !!!!
function App() {
  return (
    <div className="App">
      <Header title="기기거래" />
      <Main picture="사진" />
      <Footer title="푸터입니다" />
    </div>
  );
}

export default App;
