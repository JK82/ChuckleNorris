import React from 'react'

const Loader = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
            }}
        >
            ...LOADING
        </div>
    )
}

export default Loader
