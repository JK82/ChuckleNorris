import {useSelector, useDispatch} from 'react-redux'
import {shuffleJokes} from '../utils'
import {receivedJokes, updateStaleJokes} from '../ducks/jokes'

export const useIsLoading = () =>
    useSelector(({jokes: {fetchingJokes}}) => fetchingJokes)

export const useJokes = () => useSelector(({jokes: {jokes}}) => jokes)

export const useStaleJokes = () =>
    useSelector(({jokes: {staleJokes}}) => staleJokes)

export const useCurrentJokes = () =>
    useSelector(({jokes: {currentJokes}}) => currentJokes)
