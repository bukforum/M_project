import styled from "styled-components";

const Cont = styled.div`
margin-top: 50px;
background-color: #adcbe3 ;
height: auto;
border-radius: 5%;
a{ font-weight: bold; color: lightpurple;  padding-left: 430px; padding-left: 0;
    display: flex; justify-content: center; font-size: 20px;} 
`;

const Aab =() => {
    return (
        <div>
          <Cont>
            <hr />
            <h2>해외 원정</h2>
            
            <div style={{border:'3px solid black'}}>
               <h3>일본 구마노고도 고헤치 트래킹</h3>
               <p>고야산과 구마노 혼구 다이샤를 잇는참배길 65km가 넘는 경로를 따라 <br />
1000m가 넘는 고개 내 곳을 4일(4월18~19일)에 걸쳐 넘다</p>
              
               <div style={{border:'1px solid white'}}>
                  
                  <h3>미즈가미네 구간</h3>
                  <a href="https://youtu.be/weYfIMuNkxA">고해치 day1</a>
                  <p>이토군 고야조-고야산 에서 요시노군 노세가와라-기타이마니시 까지 </p>
               </div>
               <div style={{border:'1px solid white'}}>
                  <h3>오바코 구간</h3>
                  <a href="https://youtu.be/_-J0P70-7ng">고해치 day2</a>
                  <p>요시노군 노세가와라-기타이마니시 에서 요시노군 도쓰카와무라-이모제 까지</p>
               </div>
               <div style={{border:'1px solid white'}}>
                  <h3>미우라 구간</h3>
                  <a href="https://youtu.be/rNspOEwwwyU">고해치 day3</a>
                  <p>요시노군 도쓰카와무라-이모제 에서 요시노군 도쓰카와무라-히라다니 까지</p>
               </div>
               <div style={{border:'1px solid white'}}>
                  <h3>하테나시 구간</h3>
                  <a href="https://youtu.be/fcs772I2dAA">고해치 day4</a>
                  <p>요시노군 도쓰카와무라-히라다니 에서 다나베시-혼구초카와유 까지</p>
               </div>
               
            </div>
           
            <div>
               
            </div>
           
            &nbsp; &nbsp; &nbsp; &nbsp;
          </Cont>
            
        </div>
    )
}
export default Aab;