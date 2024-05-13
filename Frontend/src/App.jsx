import React ,{ useState } from 'react';
import LoginPage from './LoginPage.jsx';
import './App.css';
import{ createContext }  from 'react';
import MainLayout from './layout/MainLayout.jsx';
import Routers from './routes/Routers.jsx';
import OTPInput from "./components/ForgotPasswordPage.jsx";
import Recovered from "./components/Recovered.jsx";
import Reset from "./components/Reset";
export const RecoveryContext = createContext();
function App() {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();

  function NavigateComponents() {
    if (page === "login") return <LoginPage />;
    if (page === "otp") return <OTPInput />;
    if (page === "reset") return <Reset />;

    return <Recovered />;
  }
  return (
    
    <MainLayout>
     {/* <LoginPage/> */}

        <Routers />
        <RecoveryContext.Provider
      value={{ page, setPage, otp, setOTP, setEmail, email }}
    >
      <div className="flex justify-center items-center">
        {/* <NavigateComponents /> */}
      </div>
    </RecoveryContext.Provider>
      </MainLayout>
   
     );
}
export default App;
