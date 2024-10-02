import React from 'react';
import './About.css';
import HTML from '../../assets/HTML.png';
import CSS from '../../assets/CSS.png';
import JS from '../../assets/JS.png';
import CSHARP from '../../assets/C#.png';
import DB from '../../assets/sql.png';
import REACT from '../../assets/react.png';
import DOTNET from '../../assets/Net.png';
import ASP from '../../assets/ASP.png';

function About() {
    const tools = [
        {
            name: "HTML",
            pic: HTML
        },
        {
            name: "CSS",
            pic: CSS
        },
        {
            name: "JavaScript",
            pic: JS
        },
        {
            name: "C#",
            pic: CSHARP
        },
        {
            name: "SQL & Databases",
            pic: DB
        },
        {
            name: "ReactJS",
            pic: REACT
        },
        {
            name: ".Net Core Framework",
            pic: DOTNET
        },
        {
            name: "ASP.Net Web Core API",
            pic: ASP
        },
    ];

    return (
        <section id="About" className='center'>
            <div className='about--main'>
                <h1>About Me</h1>
                <p className='about--para'>
                    I’m a Full Stack Developer with a strong focus on building dynamic and scalable web and desktop applications. I work on both the front-end and back-end, making sure users have a smooth experience while also creating strong and reliable back-end systems. I have experience with modern web tools, databases, and APIs, which helps me make sure all parts of a project work well together. I enjoy learning new technologies and applying best practices to deliver high-quality software that meets client needs. My goal is to build reliable and easy-to-maintain applications.
                </p>
                <div className='about--nums'>
                    <div className='about--div'>
                        <span className='about--num'>10<span className='about--plus'>+</span></span>
                        <p className='about--div--p'>Projects Done</p>
                    </div>
                    <div className='about--div'>
                        <span className='about--num'>2<span className='about--plus'>+</span></span>
                        <p className='about--div--p'>Years Of Experience</p>
                    </div>
                    <p className='lol'>at</p>
                </div>
            </div>

            <div className='about--tools'>
                <h2>Essential <span className='lol2'>Tools</span> I Use</h2>
                <div className='about--tool--container'>
                    {tools.map((tool, index) => (
                        <div key={index} className='about--tool-item'>
                            <div className='img--container'>
                                <img className='about--tool--img' src={tool.pic} alt={tool.name} />
                            </div>
                            <p className='about--tool--name'>{tool.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
