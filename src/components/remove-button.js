import React from 'react'

const RemoveButton = ({removeSingleJoke, joke}) => {
    return (
        <button
            style={{
                background: 'transparent !important',
                border: 'none',
                padding: '0!important',
                color: 'red',
                textDecoration: 'underline',
                cursor: 'pointer',
            }}
            onClick={() => removeSingleJoke(joke)}
        >
            Remove Joke
        </button>
    )
}

export default RemoveButton
