import React from 'react'
import RRLogo from '../img/RemoteReq-logotype-cobalt.png'

function Work() {
    return (
        <div className='work'>
            {/* <p className='tags'>{`<h1>`}</p> */}
            <h1 className='work-heading'>Work</h1>
            {/* <p className='tags'>{`</h1>`}</p> */}
            <div className='work-container'>
                <div>
                    <div className='work-item remotereq'>
                        <img className src={RRLogo}/>
                    </div>
                    <a href='https://remotereq.com/' className='link rr-link' target='/'>site</a>
                </div>
                {/* <div>
                    <div className='work-item e-commerce'>e-commerce</div>
                    <button>site</button>
                    <button>github</button>
                </div> */}
                {/* <div>
                    <div className='work-item desk-app'>desktop app</div>
                    <button>github</button>
                </div> */}
            </div>
        </div>
    )
}

export default Work;
