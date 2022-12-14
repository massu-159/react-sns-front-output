import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom';
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import "./Login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    loginCall({
      email: email.current.value,
      password: password.current.value,
    }, dispatch);
  };

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>SNS App</h3>
          <span className='loginDesc'>本格的なSNSを、自分の手で。</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form className='loginBoxForm' onSubmit={(e) => handleSubmit(e)} >
              <p className="loginMsg">ログインはこちら</p>
              <input type="email" className="loginInput" placeholder='Eメール' required ref={email}/>
              <input type="password" className="loginInput" placeholder='パスワード' required minLength="6" ref={password} />
              <button className="loginButton">ログイン</button>
            </form>
            <span className="loginForgot">パスワードを忘れた方へ</span>
              <Link className="loginRegisterButton" to="/register">
                アカウント作成
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
