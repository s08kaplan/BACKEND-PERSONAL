import React from "react";
import {  useRef } from "react";
import useAxios from "../custom-hooks/useAxios";

const Login = () => {
    const { axiosPublic } = useAxios()
    const emailRef = useRef("")
    const passwordRef = useRef("")
    console.log(passwordRef.current.value);
    console.log(emailRef.current.value);
    

    const handleSubmit = () => {
      console.log("password =>", passwordRef.current.value);
      console.log("email =>", emailRef.current.value);

      emailRef.current.value=""
      passwordRef.current.value=""
    }
  return (
    <section className="font-AkayaTelivigala flex justify-center bg-slate-400">
      <main>
        <div>
          <h1 className="text-center">PYSCRIPT STORE</h1>
          <h3>SIGN IN</h3>
        </div>
        <div>
          <label className="mx-3" htmlFor="email">
            Email
          </label>
          <input ref={emailRef} className="" type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input ref={passwordRef} type="password" name="password" id="password" />
        </div>
        <button onClick={handleSubmit} type="submit">check</button>
      </main>
    </section>
  );
};

export default Login;
