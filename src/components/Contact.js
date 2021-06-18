import React from 'react'

function Contact() {
    return (
        <div className='contact'>
            {/* <h1>Contact information</h1> */}
            <form>
                <input maxLength='100' type='name' placeholder='name'/>
                <input maxLength='100' type='email' placeholder='email' />
                <input maxLength='100' type='text' placeholder='subject'/>
                <textarea maxLength='0' placeholder='NOT YET WORKING'></textarea>
                <button type='submit'>SEND</button>
            </form>
        </div>
    )
}

export default Contact
