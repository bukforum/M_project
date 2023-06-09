import styled from "styled-components";

const Cont = styled.div`
margin-top: 50px;
background-color: #adcbe3 ;
height: auto;
border-radius: 5%;
a{ font-weight: bold; color: lightpurple;  padding-left: 430px; padding-left: 0;
    display: flex; justify-content: center; font-size: 20px;} 
`;

const Aaa = () => {
    return (
        <div>
          <Cont>
            <hr />
          <h2>국내 원정</h2>
          <hr />
          <div>
             <h3>한라산 트래킹</h3>
             <a href="https://www.youtube.com/watch?v=bIyJmbZ80pE&t=132s;">한라산</a>
          </div>
          <hr />
           <div>
              <h3>지리산 10차 종주</h3>
              <p>70대 10명이 3일에 걸쳐 구례에서 성삼재, 천왕봉, 대원사까지 종주</p>
              <a href="https://www.youtube.com/watch?v=GUPHTqtcsjQ;">지리산 day1</a>
              <a href="https://www.youtube.com/watch?v=sz12Wa-ayEE; ">지리산 day2</a>
              <a href="https://www.youtube.com/watch?v=trPoZUKdv7U&t=570s;">지리산 day3</a>
           </div>
           <hr />
           <div>
              <h3>북한산</h3>
              <a href="https://www.youtube.com/watch?v=eiTpQwK1ARI&t=2s; ">보토 고개</a>
             
              <a href="https://www.youtube.com/watch?v=KFcP62u5FzQ;">북한산 남쪽 능선</a>
           </div>
           <hr />
           <div>
              <h3>북악산</h3>
              <a href="https://www.youtube.com/watch?v=YhzoDevdr88;">북악 과 삼청동</a>
            </div>
           &nbsp; &nbsp; &nbsp; &nbsp;
          </Cont>
            
        </div>
    )
}
export default Aaa;