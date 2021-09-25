import React from 'react'
import Hero from '../assets/img/hero artwork.png';
import Me from '../assets/img/about me.png'
import HTML from '../assets/img/html.png'
import CSS3 from '../assets/img/css-3.png'
import JS from '../assets/img/javascript.png'
import REACT from '../assets/img/react.png'

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

            <div className="text_about">
                <p>ABOUT</p>
                <h3> Meet Jimmel Doyle</h3>
                <p>I'm a Jounior Full Stack Web Developer.<br/> 
                    I also work as a IT Analyst for 
                <span> <a  className="Fujitsu" hreh="https://www.fujitsu.com/caribbean/"  > Fujitsu Caribbean Limited </a> </span>
                I have a serious passion for IT and Software Development. Lets Meet !</p>
                <button className="button is-danger">PORTFOLIO</button>

            </div>


        </div>

</section>

<section id="tools">

    <div className="toolsection">

        <div> 

            <p>Tools</p>
            <h3>Technology I use</h3>
            <p>Our Products are created with the most moddern 
                Technology, with creates a seek,fast and responsive ecperience.
            </p>
            <button className="button is-danger">PORTFOLIO</button>

        </div>

        <div className="tool1">  

                <div>  <img  className="html"  src={HTML} alt="HTML"/> </div>
                <div> <img  className="html"  src={CSS3} alt="HTML"/> </div>
                <div> <img  className="html dev"  src={JS} alt="HTML"/> </div>
                <div> <img  className="html dev"  src={REACT} alt="HTML"/> </div>
        
        </div>
        <div className="tool2">
        
                <div> <img  className="html "  src={JS} alt="HTML"/> </div>
                <div> <img  className="html "  src={REACT} alt="HTML"/> </div>

        
        </div>
       




    </div>



</section>

<section id="projects">

        <h1>Discover Our Work</h1>
        <p> 
                Fast load times and lag free interaction, my highest priority.<br/>
                My layouts will work on any device, big or small.<br/>
                Strong preference for easy to use, intuitive UX/UI.<br/>
                Websites don't have to be static, I love making pages come to life 
        </p>


        <div className="nav_link">
                
                <nav>
                            <ul>
                                <li className="option_link"> <a className="ShowAll"  href="/"> Show All </a> </li> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <li className="option_link"> <a className="HTMLCSS"  href="/"> HTMLCSS </a> </li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <li className="option_link"> <a className="JS"  href="/"> JAVASCRIPT </a> </li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <li className="option_link"> <a className="REACT-JS"  href="/"> REACT-JS </a> </li>&nbsp; &nbsp;
                            </ul>
                    
    
                    </nav>
    
                </div>


                <div className="xop-section">
                    <ul class="xop-grid">
                        <li>
                            <div class="xop-box xop-img-1">

                                <a href="#">
                                <h3> IMG1</h3>
                                <p>Coming Soon.....</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="xop-box xop-img-2">

                                <a href="#">
                                <h3> IMG2</h3>
                                <p>Coming Soon....</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="xop-box xop-img-3">

                                <a href="#">
                                <h3> IMG3</h3>
                                <p>Coming Soon....</p>
                                </a>
                            </div>
                        </li>


                        <li>
                            <div class="xop-box xop-img-4">

                                <a href="#">
                                <h3> IMG4</h3>
                                <p>Coming Soon....</p>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                
</section>

<section id="contact_sec">
        <div className="Contacts">

            <div className="contact_div1"> 
                  <p>CONTACT</p> 
                    <h3>Contact Us</h3>
                    <p>Dont Wait, Contact Us !</p>

                    <ul>
                        <li>
                            <p>Trinidad, Port-of-Spain</p>
                            <p>+1 (868) 468-2174</p>
                            <p>doyledavid5@outlook.com</p>
                        </li>
                    </ul>           
            </div>

            <div className="Form"> 

                <h4> Want a collarboration ? </h4>
                <div className="field">
                        
                        <div className="control">
                        <input className="input" type="text" placeholder="Name"/>
                        </div>
                </div>

                <div className="field">
                <div className="control">
                    <input className="input" type="email" placeholder="Email"/>
                    </div>
            </div>

            <div className="control">
            <textarea class="textarea" placeholder="Your Message"></textarea>
            </div>

            <button className="button is-danger">Submit</button>
                

            </div>

        </div>



</section>


</>
       
    )
}

export default Portfolio
