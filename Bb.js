import Mt_2 from "./Mt_2.png";
import Mt_3 from "./Mt_3.png";
import Mt_4 from "./Mt_4.png";

import styled from "styled-components";

const Cont = styled.div`
margin-top: 100px;
background-color: beige;
height: auto;
`;

const Bb=() => {
    return (
        <div>
          <Cont>
            <hr />
             <h2>북한산 포럼</h2>
             
             <img style={{width:'30%'}} src={Mt_2} alt='mount' />
             <img style={{width:'30%'}} src={Mt_3} alt='mount' />
             <img style={{width:'30%'}} src={Mt_4} alt='mount' />
             <p>주말에는 주로 북한산 산행으로</p>
             &nbsp; &nbsp; &nbsp; &nbsp;
             <hr />
          </Cont>
            
        </div>
        
    )
}
export default Bb;