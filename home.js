import styled from "styled-components";
import Mt_1 from "./Mt_1.png";

const Cont = styled.div`

margin-top: 100px;

background-color: beige;
height: auto;
`;

const Home= () => {
    return(
        <div>
        <Cont>
          <hr />
          <h2>Home</h2>
          <p>마산중, 마산고등학교 졸업생 중 수도권에 거주하는 
            모든<br/> 동창생들의 주말(토요일) 산행 모임으로 2002년도 출발하였습니다.
          </p>
         <img style={{width:'50%'}} src={Mt_1} alt='mount' />
         <p>현재는 각기 다른 여러 친구들의 즐거운 산행 장소가 되고 있습니다.</p>
         
         &nbsp; &nbsp; &nbsp; &nbsp;
         <hr />
          </Cont>
        </div>
        
    )
}
export default Home;