import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
const Cont = styled.div`

margin-top: 50px;

background-color: beige;
height: auto;
`;

const Aa= () => (
  <>
    <div>
        <Cont>
        <hr />
        <h2>원정</h2>
       
       <nav style={{margin:'20px', fontSize:'20px'}}>
        <Link style={{margin:'20px', fontWeight: 'bold'}} to='aaa'>국내 원정 사이트</Link>
        <Link style={{margin:'20px', fontWeight: 'bold'}} to='aab'>해외 원정 사이트</Link>
       </nav>
       <h4>코로나(Covid-19) 이후 - 이전의 자료 유실</h4>
     
       <Outlet />
       &nbsp; &nbsp; &nbsp; &nbsp;
       <hr />
        </Cont>
        
    </div>
  </>

)
export default Aa;