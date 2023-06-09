import styled from "styled-components";
import Mt_10 from "./Mt_10.png";

const Cont = styled.div`
margin-top: 50px;

background-color: beige;
height: auto;
a{ font-weight: bold; color: lightpurple;  padding-left: 430px; padding-left: 0;
    display: flex; justify-content: center; font-size: 20px;} 

`;

const Cc= () => {
    return(
        <div>
            <Cont>
                <hr />
                 <div>
                   <h2>행사</h2>
                   <img style={{width:'50%'}} src={Mt_10} alt='campfire' /> 
                   &nbsp; &nbsp; &nbsp; &nbsp;
                 <div>
                    <h3>마산중 행사</h3>
                    <p>2023 4월 둘레길 걷기, 남양주 양수리 마현(제상철관장) 으로 1차 행사를 하다</p>
                    <p>의견 수렴 결과 더 이상 이와 같은 영상은 공개 하지 않습니다</p>
                 <a href="https://youtu.be/dgx4Ur0AnA4">행사-비디오</a>
                 </div>
                   
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <hr />
            </Cont>
        </div>
        
    )
} 
export default Cc;
