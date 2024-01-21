# 2주차 과제 

### 프로젝트 했던 것을 수정하는 것은 힘들다고 판단되어 새롭게 처음부터 만들었습니다... 

- 페이지 경로는 /src/pages 에 있는 3가지의 파일입니다.
- 헤더, 메인, 푸터로 컴포넌트를 나눠서 진행했습니다. 
- 간단하게 만든것을 소개해보자면 파일을 업로드 하는 것을 구현해보고자 했습니다. 사진 아이콘을 누르고 파일을 넣으면 파일의 사진이 나오도록만 우선 구현했습니다

-   ![스크린샷 2024-01-21 20 49 02](https://github.com/chohyundon/react-homework-2/assets/113508075/dec19fa3-d353-4fbd-8195-542dc628652a)


- 파일 업로드 코드

```
const [uploadImgUrl, setUploadImgUrl] = useState("");

  const getImage = (e) => {
    const { files } = e.target;
    const selectImage = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectImage);
    reader.onloadend = () => {
      setUploadImgUrl(reader.result);
    };
  };
```
### 구글링을 통해 찾아봐서 useState라는 리액트 훅으로 상태를 관리하는 방법이 있어서 사용해봤습니다.

### 또 한 props라는 값을 전달?하는 방법을 통해서 값을 전달해서 사용하는 방법도 구현해봤습니다 

```
  <Main picture="사진" />
  const Main = ({ picture }) => {
  <p>{picture}</p>
}
```

### 이번 조그마한 파일 업로드를 만들면서 useState라는 리액트 훅에 대해서와 props가 뭔지는 정확히 모르지만 이런 방법들로 코드를 컴포넌트 단위로 만들어서 사용하는 리액트의 장점을 알게 되었습니다 !!!
