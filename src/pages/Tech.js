import React from 'react'
import CHASH from "../assets/C#.png";
import CPP from "../assets/C++.png";
import JAVA from "../assets/Java.png";
import SQL from "../assets/sql.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JS from "../assets/JS.png";
import NET from "../assets/Net.png";
import REACT from "../assets/react.png";

function Tech() {
  return (
    <section id="Technology">
        <div className='techContainer'>

            <div className='techTitleContainer'>
                <h1 className='techTitle'>Technologies</h1>
            </div>
            <div className='techParaContainer'>
                <p className='techPara'>I continually seek to learn new, market-relevant technologies. While my expertise is in backend development, 
                I also have experience in frontend development and am eager to expand my skills further.</p>
            </div>

            


            <div className='backendContainer'>
                <div className='backendTitle'>Backend</div>

                <div className='backendItemsContainer'>
                    <div className='Item'>
                        <img className='CHASHimg' alt="" src={CHASH}/>
                        <p className='CHASHtext'>C#</p>
                    </div>

                    <div className='Item'>
                        <img className='CHASHimg' alt="" src={CPP}/>
                        <p className='CHASHtext'>C++</p>
                    </div>

                    <div className='Item'>
                        <img className='CHASHimg' alt="" src={JAVA}/>
                        <p className='JAVAtext'>Java</p>
                    </div>
                    <div className='Item'>
                        <img className='CHASHimg' alt="" src={SQL}/>
                        <p className='SQLtext'>SQL & Databases</p>
                    </div>
                </div>
            </div>

            <br/>
            <br/>

            <div className='frontendContainer'>
                <div className='frontendTitle'>Frontend</div>

                <div className='frontendItemsContainer'>
                    <div className='Item'>
                        <img className='CHASHimg' alt="" src={HTML}/>
                        <p className='HTMLtext'>HTML</p>
                    </div>

                    <div className='Item'>
                        <img className='CHASHimg' alt="" src={CSS}/>
                        <p className='HTMLtext'>CSS</p>
                    </div>

                    <div className='Item'>
                        <img className='CHASHimg' alt="" src={JS}/>
                        <p className='JStext'>JavaScript</p>
                    </div>
                </div>
            </div>

            <br/>
            <br/>

            <div className='frameworkContainer'>
                <div className='frameworkTitle'>Frameworks</div>

                <div className='frameworkItemsContainer'>
                    <div className='Item'>
                        <img className='CHASHimg' alt="" src={REACT}/>
                        <p className='REACTtext'>React</p>
                    </div>

                    <div className='Item'>
                        <img className='CHASHimg' alt="" src={NET}/>
                        <p className='NETtext'>Microsoft .NET</p>
                    </div>
                </div>
            </div>




        </div>
    </section>

  )
}

export default Tech