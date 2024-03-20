import ButtonPage from './buttonPage';
import React from 'react'
import { AiFillFacebook,AiFillInstagram,AiOutlineLinkedin,AiFillGithub } from "react-icons/ai";



const Home = () =>   {
  const btns = [
    { nameBtn: 'Dowload' }
  ];

  return (
    <>
          <section className="home" id="home">
            <div className="home-content">
              <h3>Xin chào, tôi là</h3>
              <h1>Trần Hùng Dũng</h1>
              <h3>Và tôi là <span className="multiple-text" /> </h3>
              <p>"Súng không lau súng mau han rỉ - Người không rèn ý chí không cao"
              </p>
              <div className="social-media">
                <a href="https://www.facebook.com/Gnud419" className="bx" >     <AiFillFacebook> </AiFillFacebook></a>
                <a href="#" className="bx">                               <AiFillInstagram> </AiFillInstagram></a>
                <a href="#" className="bx">                             <AiOutlineLinkedin> </AiOutlineLinkedin></a>
                <a href="#" className="bx">                              <AiFillGithub> </AiFillGithub></a>
              </div>
              <div className="btn">
                <ButtonPage btns={btns}/>
              </div>
            </div>          
            <div className="home-img">
              <img src="Image/me.jpg" alt="   me" />
            </div>
          </section>
    </>
  )
}

export default Home
