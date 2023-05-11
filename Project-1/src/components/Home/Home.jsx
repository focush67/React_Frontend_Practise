import React from "react";
import graph from '../../assets/pic-2.png'
import "./Home.scss";
import {AiFillGoogleCircle as AG,
        AiFillGithub as AA,
        AiFillLinkedin as AI ,} 
        from 'react-icons/ai';

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Full Stack Developer</h1>
          <p>Sparsh Verma</p>
        </main>
      </div>

      <div className="home2">
        <img src={graph} alt="Graphics" />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem et inventore culpa recusandae, incidunt error deserunt amet? Impedit, consequatur neque!</p>
            </div>
      </div>

      <div className="home3" id="about">
        <div>
            <h1>Personal Introduction </h1>
            <p>My name is Sparsh Verma , and I am presently an undergraduate student at Babu Banarasi Das University , Lucknow. I am a Full Stack Web Developer and I have keen interest in Machine Learning and its future prospects </p>
        </div>
      </div>

      <div className="home4" id="profiles">
        <div>
            <h1>Profiles</h1>
            <article>

                <div style={{
                    animationDelay:"0.5s",
                }}>
                <AA/>
                <p><a href="https://github.com/focush67" target="blank">Github</a></p>
                </div>

                <div style={{
                    animationDelay:"1s",
                }}>
                <AI/>
                
                <p><a href="https://linkedin.com/focush67" target="blank">Linkedin</a></p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
