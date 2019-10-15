import React from 'react'

const LoadButton = ({loadMoreJokes}) => {
    return (
        <button
            style={{width: '50%', fontSize: '22px'}}
            onClick={() => loadMoreJokes()}
        >
            Load Jokes
        </button>
    )
}

export default LoadButton
