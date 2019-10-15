import React from 'react'

import RemoveButton from './remove-button'

const Joke = ({joke, removeSingleJoke}) => {
    return (
        <div
            style={{
                height: 'auto',
                textAlign: 'left',
                padding: '15px',
            }}
        >
            <span>{joke.joke}</span>
            <RemoveButton removeSingleJoke={removeSingleJoke} joke={joke} />
        </div>
    )
}

export default Joke
