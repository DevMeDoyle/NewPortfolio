import React from 'react'
import Hero from '../assets/img/hero artwork.png';
import Me from '../assets/img/about me.png'

const Portfolio = () => {
    return (

<>
        <div id="header">

            <div className="JD"> <a href="/">JD</a> </div>

            <div className="nav_links">
                
            <nav>
                        <ul>
                            <li className="option_link"> <a className="About"  href="/about"> About </a> </li> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <li className="option_link"> <a className="Portfolio"  href="/about"> Portfolio </a> </li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <li className="option_link"> <a className="Services"  href="/about"> Services </a> </li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <li className="option_link"> <a className="Blog"  href="/about"> Blog </a> </li>&nbsp; &nbsp;
                        </ul>
                

                </nav>

            </div>

            <div>
                
                    <button class="button">Button</button>


            </div>


        </div>

<section className="Hero">

<div className="intro">

    <div className="intro_1">
        <p>WELCOME</p>
        <h1>I'm Jimmel Doyle</h1>
        <p>I am a Full Stack Web Developer. How may I assist you ?</p>
        <button className="button is-danger">PORTFOLIO</button>


    </div>

    <div>

        <img src={Hero} alt="Hero Image"/>
    </div>

</div>


</section>  

<section id="ABOUT">

        <div className="about">

            <div>
                 <img src={Me} alt="About Me Img"/>
                
            </div>

            <div>
                <p>ABOUT</p>
                <h3>Jimmel Doyle</h3>
                <p></p>

            


            </div>


        </div>

</section>


</>
       
    )
}

export default Portfolio
