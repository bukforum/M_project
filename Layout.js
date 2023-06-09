import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Cont2 = styled.div`
background-color: #2196F3;
padding: 10px 30px;
text-decoration: none;
margin: 40px;
font-size: 20px;

`;

const Layout = () => {
    return (
        <>
        
          <nav >
            <Cont2>
            <Link style={{textDecoration: "none",margin:"20Px",color:"white"}} to="/">Home</Link>
            <Link style={{textDecoration: "none",margin:"20Px",color:"white"}} to="/bb"> 포럼</Link>
            <Link style={{textDecoration: "none",margin:"20Px",color:"white"}} to="/aa">원정</Link>
           
            <Link style={{textDecoration: "none",margin:"20Px",color:"white"}} to="/cc">행사</Link>
            </Cont2>
          </nav>
        
          <Outlet />
        </>
    )
}
export default Layout;