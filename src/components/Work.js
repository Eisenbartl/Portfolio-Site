import React from 'react'
import RRLogo from '../img/RemoteReq-logotype-cobalt.png'
import Github from '../img/github.png';
import Linkedin from '../img/linkedin.png';
import ProfilePic from '../img/profile-pic-me.jpg';

function Work() {
    return (
        <div className='work'>
            <div className='work-about'>
                <h1>Work</h1>
                <p>
                Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl.
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
                    <div className='work-item e-commerce'>e-commerce</div>
                    <button>site</button>
                    <button>github</button>
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
