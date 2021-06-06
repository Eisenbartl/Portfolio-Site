import React from 'react'
// import Github from '../img/github.png';
// import Linkedin from '../img/linkedin.png';
// import ProfilePic from '../img/profile-pic-me.jpg';

function Contact() {
    return (
        <div className='contact'>
            {/* <h1>Contact information</h1> */}
            <form>
                <input maxLength='100' type='name' placeholder='name'/>
                <input maxLength='100' type='text' placeholder='subject'/>
                <input maxLength='100' type='email' placeholder='email' />
                <textarea maxLength='0' placeholder='NOT YET WORKING'></textarea>
                <button type='submit'>SEND</button>
            </form>
            {/* <div className='image-icon'>
                <img className='profile-img' src={ ProfilePic }/>
                <div>
                    <a href='https://github.com/Eisenbartl' target='/'>
                        <img className='icon github-icon'src={ Github }/>
                    </a>
                    <a href='https://www.linkedin.com/in/laine-doud-eisenbart/' target='/'>
                        <img className='icon linkedin-icon' src={ Linkedin }/>
                    </a>
                </div>
            </div> */}
        </div>
    )
}

export default Contact
