![header](https://capsule-render.vercel.app/api?type=Venom&color=auto&height=300&section=header&text=Guest%20Book&fontSize=90)



주제 : React를 활용한 방명록 만들기

# 📝 방명록 📖

## 메인 화면

<img src="스크린샷 2023-12-15 오후 1.47.45.png" width="800" height="500"/>

---

## 구현 모습

<img src="스크린샷 2023-12-15 오후 1.47.18.png" width="500" height="500"/> <img src="스크린샷 2023-12-15 오후 1.46.32.png" width="500" height="500"/> 

# 1.프로젝트 및 팀(팀원) 소개 👨‍💻 
### 👧임성실
### 👦박지호
### 👦김민선

---
# 선정한 이유
 ## 이번에 배웠던 'React 기반 todos'를 다시 한 번 처음 부터 구현 해보자 선택하게됨

# 2. 협업 방식 🧑‍🤝‍🧑
- 주제 선정 및 요구 사항 정리
- component 구성
- 기능 구현
- 리팩토링
- 최종 구현 점검

---
  
# 3. 기능 시연 ⚒️
요구사항

## modal
- '+' 모형의 이미지 버튼을 클릭하면 modal 창 생성
- modal창에 값을 입력하고 메모추가 눌리면 추가됨
- modal창 닫기 하면 저장 안 하고 닫힘
- 기존 방명록을 클릭시 기록 내용 보기 및 수정이 가능
- 삭제 버튼하면 방명록 삭제

## 방명록
- 방명록 기록 시간 남음
- 방명록에 별표를 클릭하면 최상단으로 이동
- 방명록에 마우스를 가져다 놓으면 반응함
  
---

# 4. 주된 도메인 용어 및 Component 구성 👨‍🏫
| 도메인 | 설명 | 
| --------- | ---------- |
| returnFavClass | ☑️ |
| returnStar | ☑️ |
| starClick | ☑️ |



| Component | 설명 |
| --------- | ---------- |
| MemoHeader | ☑️ |
| MemoBody | ☑️ |
| MemoItem | ☑️ |
| MemoForm | ☑️ |
| Modal | ☑️ |
| Defaultlayout | ☑️ |
---


# 5. 핵심 기능 설명 및 구현 방법 👨‍🏫

## ⭐별표 눌릴시 방명록 최상단 이동
```javascript
  const starClick = (uid) => {
    const newMemo = plusmemo.map(memo => {
      if (memo.uid === uid) {
        memo.favorite = !memo.favorite;
      }
      return memo;
    })
    newMemo.sort((a, b) => {
      if (a.favorite && b.favorite) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
      }
      if (a.favorite && !b.favorite) return -1;
      if (!a.favorite && b.favorite) return 1
      if (!a.favorite && !b.favorite) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
      }
      return 0;
    })
    setMemo(newMemo);
  }
```

## ⏱️ 방명록 추가시 시간
```javascript
   function getTimeStamp() {
    const date = new Date();
    console.log(date);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hour = ('0' + date.getHours()).slice(-2);
    const min = ('0' + date.getMinutes()).slice(-2);
    const sec = ('0' + date.getSeconds()).slice(-2);
    const dateString = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
  
    return dateString;
  }
  
  

const MeomoBody = () => {
  const [plusmemo, setMemo] = useState(memos);
  const addMemoHandler = ({ getUid, id, title, summary }) => {
    console.log(getUid);
    const newMemo = {
      uid: getUid ? getUid : uid,
      id,
      title,
      summary,
      updateTime: getTimeStamp(),
      favorite: false,
    };
```

## ✔️ 나머지 구현 기능은 Todos와 비슷함

## 🔴 CSS => SASS

```SASS
 .content {
      // border-top: 1px solid #bebebe;
      margin: 40px 0px;
      padding: 15 px;
  
      p {
        padding: 8px;
        font-size: 12pt;
        color: #999;
      }
    }
```

---
 

# 6. 어려웠던 부분 👏
### 1.css 라이브러리인 SASS 설치 에러 <br />
 - SASS는 node 버전에 상당히 의존적이라고 합니다. 그렇다보니 설치 에러가 자주나는 편인데, node버전과 거기에 호환하는 SASS를 잘 봐서 다운하면 해결이 된다.

### 2.즐겨찾기 구현
- sort 함수를 사용해 구현했으나, 확장성있게 하지 못해서 아쉽다. 


### 3.props
- props 넘겨 줄때, 함수와 변수가 같이 넘어가줘야 했지만, 변수를 빼먹는 바람에 함수가 제대로 작동하지 못하는 문제가 있었다. 이는 코드를 리팩토링하면서 해결할 수 있었다.
  
# 7. 팀원 회고(느낀점)😂
> 임성실 :  React 수업을 할 때 useState를 사용하여 상위 컴포넌트에서 하위 컴포넌트로 props를 계속 내려가며 전달하는 흐름이 헷갈렸는데, 이번 프로젝트에 사용해보며 해당 개념을 확실히 이해하게 되어서 의미있는 프로젝트였습니다. 프로젝트 시작 전에 계획했던 useReducer와 Context API 적용, Firebase 활용 등은 하지 못하여 아쉬움이 남는데 주말에 추가로 공부하며 적용해볼 생각입니다.<br /> <br />
  박지호 : 처음으로 맨 땅에 헤딩을 한 프로젝트였습니다. 물론 다른 팀과 합칠 수 있는 기회는 있었지만, 결국에는 스스로 일어나야한다는 생각에 팀을 합치지 않고 진행했습니다. 어려움이 많았지만 이 과정에서 느꼈던 감정과 극복하면서 개발자로서의 자세를 좀 더  배   울 수 있었습니다. 아직 익숙하지 않은 api 요청 으로 api요청해서 원하는 것을 못 넣긴 했지만 또 하려는 과정에서 많은 것들을 배워갑니다. 하루하루 지식이 추가 되면 언젠간 자유 자재로 할 수 있는 개발자가 될 수 있을 것이라 믿습니다. 우리 팀 고생했습니다!  <br /> <br />
  김민선 : 시간이 많이 부족해서 다하지 못해 아쉽다. 




