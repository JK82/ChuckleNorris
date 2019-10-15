import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {
    fetchingJokes,
    receivedJokes,
    updateStaleJokes,
    updateCurrentJokes,
} from './ducks/jokes'
import './App.css'
import {
    useIsLoading,
    useJokes,
    useStaleJokes,
    useCurrentJokes,
} from './hooks/jokes'
import {shuffleJokes} from './utils'
import LoadButton from './components/load-button'
import Loader from './components/loader'
import Title from './components/title'
import Joke from './components/joke'
import JokeList from './components/joke-list'

const App = () => {
    const dispatch = useDispatch()
    const isLoading = useIsLoading()
    const staleJokes = useStaleJokes()
    const jokes = useJokes()
    const currentJokes = useCurrentJokes()

    useEffect(() => {
        async function fetchData() {
            dispatch(fetchingJokes())
            const response = await fetch('http://api.icndb.com/jokes')
            const responseJson = await response.json()
            const jokes = responseJson.value
            dispatch(fetchingJokes())
            return dispatch(receivedJokes(jokes))
        }

        fetchData()
    }, [])

    // ON FIRST LOAD POPULATE STALE JOKES AND CURRENT JOKES (Leaving in as commeted but not part of spec)
    // useEffect(() => {
    //     if (!isLoading) {
    //         const shuffled = shuffleJokes(jokes)
    //         const jokesStartingToSmell = shuffled.slice(0, 10)
    //         dispatch(updateStaleJokes(jokesStartingToSmell))
    //         dispatch(updateCurrentJokes(jokesStartingToSmell))
    //     }
    // }, [jokes])

    // ON BUTTON PRESS POPULATE STALE JOKES AND CURRENT JOKES
    const loadMoreJokes = () => {
        const filterJokes = jokes.filter((joke) =>
            staleJokes.every((staleJoke) => staleJoke.id !== joke.id)
        )
        const shuffled = shuffleJokes(filterJokes)
        const jokesStartingToSmell = shuffled.slice(0, 10)
        dispatch(updateCurrentJokes(jokesStartingToSmell))
        dispatch(updateStaleJokes(jokesStartingToSmell))
    }

    const removeSingleJoke = (joke) => {
        dispatch(updateStaleJokes([joke]))
        let mutableJokes = currentJokes
        const jokeToRemoveIndex = mutableJokes.findIndex(
            (currentJoke) => currentJoke.id === joke.id
        )

        mutableJokes.splice(jokeToRemoveIndex, 1)

        dispatch(updateCurrentJokes(mutableJokes))
    }

    return (
        <div className="App" style={{textAlign: 'center'}}>
            <JokeList>
                {/* Title */}
                <Title />
                {isLoading && <Loader />}
                {currentJokes.map((joke, idx) => (
                    <Joke
                        key={idx}
                        joke={joke}
                        removeSingleJoke={removeSingleJoke}
                    />
                ))}
                {/* Loading */}
                {!isLoading && <LoadButton loadMoreJokes={loadMoreJokes} />}
            </JokeList>
        </div>
    )
}

export default App
