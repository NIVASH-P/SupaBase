import CustomizedDialogs1 from "./passbook";
import CustomizedDialogs2 from "./atm";
import CustomizedDialogs3 from "./creditcard";
import MiniDrawer from "./maindash";
export default function Card()
{
    return (
        <div>
            <MiniDrawer/>
        <div style={{
            
            position: "absolute",
            top: "45%",
            left: "50%",
            width:'800px',
            transform: "translate(-50%,-50%)",
            marginTop:"120px"}}>
                <ul style={{display:"flex" , justifyContent:"space-between", listStyleType:"none"}}>
                    <li> <CustomizedDialogs1 /></li>
                    <li> <CustomizedDialogs2 /></li>
                    <li><CustomizedDialogs3 /></li>
           
           
            
            </ul>
        </div>
        </div>
      );

}