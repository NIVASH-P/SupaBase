import Card1 from "./cards/c1";
import Card2 from "./cards/c2";
import Card3 from "./cards/c3";
import Card4 from "./cards/c4";
import Card5 from "./cards/c5";
import Card6 from "./cards/c6";
import NavBar from "../homepage/nav1";
import Navbar3 from "../homepage/nav2";
export default function Servicecard()
{
    return(
        <div style={{
            
            backgroundColor:"lightblue",
            height:"730px",
            width:"1520px"
        }}><NavBar/>
        <Navbar3/>
            <ul style={{ 
                display:"flex",
                paddingTop:"40px",
                justifyContent:"space-between",
                listStyleType:"none"}}>
                <li style={{
                    paddingLeft:"6vh"
                }}><Card1/></li>
                <li><Card2/></li>
                <li style={{
                    paddingRight:"12vh"
                }}><Card3/></li>
            </ul>
            <ul  style={{
                display:"flex",
                paddingTop:"40px",
                justifyContent:"space-between",
                listStyleType:"none"}}>
                <li style={{
                    paddingLeft:"6vh"
                }}><Card4/></li>
                <li><Card5/></li>
                <li style={{
                    paddingRight:"12vh"
                }}><Card6/></li>
            </ul>
        </div>
    )
}