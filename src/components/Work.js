import React from 'react'
import RRLogo from '../img/RemoteReq-logotype-cobalt.png'
import Github from '../img/github.png';
import Linkedin from '../img/linkedin.png';
import ProfilePic from '../img/profile-pic-me.jpg';
import FunShirts from '../img/funshirtsicon.png';

function Work() {
    return (
        <div className='work'>
            <div className='work-about'>
                <h1>Work</h1>
                <p>
                    I'm a Front-End Developer in Austin, TX.<br></br>
                    I develop web apps using HTML, CSS/SCSS, JavaScript and React.
                    
                </p>
            </div>
            <div className='work-container'>
                <div>
                    <div className='work-item remotereq'>
                        <img className src={RRLogo}/>
                    </div>
                    <a href='https://remotereq.com/' target='/'>
                        <button>SITE</button>
                    </a>
                </div>
                <div>
                    <div className='work-item e-commerce'>
                        <img src={ FunShirts }/>
                    </div>
                    <a href='https://commercefunshirts.netlify.app/' target='/'>
                        <button>site</button>
                    </a>
                    <a href='https://github.com/Eisenbartl/e-commerce-funshirts' target='/'>
                        <button>github</button>
                    </a>
                    
                </div>
                <div>
                    <div className='work-item desk-app'>electron.js<br></br>
                        desktop app
                    </div>
                    <button>github</button>
                </div>
                

                <div className='image-icon'>
                    <img className='profile-img' src={ ProfilePic }/>
                        <div>
                        <a href='https://github.com/Eisenbartl' target='/'>
                            <img className='icon github-icon'src={ Github }/>
                        </a>
                        <a href='https://www.linkedin.com/in/laine-doud-eisenbart/' target='/'>
                            <img className='icon linkedin-icon' src={ Linkedin }/>
                        </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Work;
