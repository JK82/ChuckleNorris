import React from 'react'

const JokeList = ({children}) => {
    return (
        <div
            style={{
                position: 'absolute',
                margin: 'auto',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: '500px',
                backgroundColor: '',
                borderRadius: '3px',
            }}
        >
            {children}
        </div>
    )
}

export default JokeList
