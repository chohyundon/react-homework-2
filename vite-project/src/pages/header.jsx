//arrow function은 {}을 사용해서 함수를 만들면 return 문을 작성해야 하지만 ()로 변환하면 return을 생략할 수 있다!!

const Header = ({ title }) => (
  <header
    style={{
      display: "flex",
    }}
  >
    <div
      style={{
        display: "flex",
        gap: "10.25rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        type="button"
        style={{
          background: "none",
          padding: "1.25rem",
          fontSize: "30px",
          border: "none",
          cursor: "pointer",
        }}
      >
        x
      </button>
      <h1 style={{ fontSize: "24px" }}>{"🎧 " + title}</h1>
    </div>
  </header>
);

export default Header;
