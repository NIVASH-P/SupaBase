import Body from "./project/homepage/body";
import SignUp from "./project/login/reg";
import SignIn from "./project/login/log";
import CustomizedTimeline from "./project/about/aboutpg";
import Pricing from "./project/forms/form";
import Servicecard from "./project/service/serv";
import { Authcontext } from "./project/context";
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Variants from "./project/loan/loansmain";
import { Agri } from "./project/loan/agri";
import { Edu } from "./project/loan/educ";
import { Homeloan } from "./project/loan/home";
import MiniDrawer from "./project/profile/maindash";
import { useState } from "react";
import UserProfile from "./project/profile/pro";
import Card from "./project/profile/cardmain";
import Orders from "./project/profile/statement";
import AmountTransfer from "./project/profile/tranfer";
import Insurance from "./project/profile/insurance";
import SignInPayment from "./project/Payments";
import supabase from "./SubaBase";
import { Login } from "./project/login";

function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const[data,setData]=useState([])
  return (   
  <Authcontext.Provider value={{ loggedIn, setLoggedIn,data,setData}} >
   <Router>
         
         
     <Routes>
         <Route path="/" element={<Body />} />
         <Route path="/log" element={<Login />} />
         <Route path="/Sign" element={<SignUp />} />
         <Route path="/about" element={<CustomizedTimeline />} />
         <Route path="/form" element={<Pricing />} />
         <Route path="/ser" element={<Servicecard />} />
         <Route path="/loan" element={<Variants/>}/>
         <Route path="/agri" element={<Agri/>}/>
         <Route path="/edu"  element={<Edu/>}/>
         <Route path="/home" element={<Homeloan/>}/>
         <Route path='/profile' element={<MiniDrawer/>}/>
         <Route exact path='/Account Balance' element={<UserProfile />}></Route>
         <Route exact path='/SavingIcons' element={<Card />}></Route>
         <Route exact path='/Statement' element={<Orders />}></Route>
         <Route exact path='/BankTransfer' element={<AmountTransfer />}></Route>
         <Route exact path='/Insurance' element={<Insurance />}></Route>
        
     </Routes>
 </Router> 
 </Authcontext.Provider>
  );
}

export default App;