import React,{useState} from "react";
import LoginForm from './LoginForm'
import RegForm from './RegForm'
import "./index.scss";


export default function Index() {
  const [flag,setFlag] = useState(true);
  const showLogReg = (flag)=>{setFlag(flag)}
  return (
    <div id="loginReg">
        {flag?<LoginForm flag={flag} setFlag={showLogReg}></LoginForm>:<RegForm flag={flag} setFlag={(flag)=>{setFlag(flag)}}></RegForm>}
    </div>
  );
}
