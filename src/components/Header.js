import React from 'react'

function Header() {
    return (
        <div className='header'>
        {/* <p className='tags'>{`<div>`}</p> */}
            <div className='header-content'>
                {/* <p className='tags'>{`<h1>`}</p> */}
                <div className='header-h-one'>
                    <h1>Hello,</h1>
                </div>
                {/* <p className='tags'>{`</h1>`}</p> */}

                {/* <p className='tags'>{`<p>`}</p> */}
                <div className='header-p'>
                    <p>
                    my name is Laine Eisenbart.<br></br>
                    I'm a front-end developer<br></br>
                    living in Austin, Texas.
                    </p>
                </div>
                {/* <p className='tags'>{`</p>`}</p> */}
            </div>
        {/* <p className='tags'>{`</div>`}</p> */}
        </div>
    )
}

export default Header
