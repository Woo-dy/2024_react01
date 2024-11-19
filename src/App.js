import './App.css';
import CourseListCard from './components/step04/CourseListCard';
import PackingList from './components/step05/PackingList';
import TextList from './components/step06/TextList';
import TextList2 from './components/step06/TextList2';
import TextList3 from './components/step06/TextList3';
import Event01 from './components/step07/Event01';
import Event02 from './components/step07/Event02';


function App() {
  const items = [
    {
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      image: './img/green_cat.png',
      isFavorite: true
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      image: './img/green_dog.jpg',
      isFavorite: false
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      image: './img/orange_heart.png',
      isFavorite: true
    }
  ];

  // 조건부 렌더링 : if, &&, 삼항연산( 조건식? 참:거짓 )
  // 예시 : 로그인 페이지에 사용
  const ischk = false;
  return (
    <div className='App'>
      {ischk ? <h2>Hello, react</h2> : <CourseListCard items={items} />  }
      <hr />
      <PackingList />
      <hr />
      {/* key 값이 없어서 오류 발생 */}
      <h1 className='listItems'>key 값이 없어서 오류 발생</h1>
      <TextList />
      <hr />
      {/* key 값이 있으므로 오류 없음 */}
      <h1 className='listItems'>key 값이 있으므로 오류 없음</h1>
      <TextList2 />
      <hr />
      <h1 className='listItems'>특정 값만 출력</h1>
      <TextList3 />
      <hr />
      <h1 className='listItems'>이벤트 핸들러 Btn1</h1>
      <Event01 />
      <hr />
      <h1 className='listItems'>이벤트 핸들러 Btn2</h1>
      <Event02 />
    </div>
  );
}

export default App;