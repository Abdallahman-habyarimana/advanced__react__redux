import { SAVE__COMMENT } from '../../actions/types'
import { commentReducer } from '../comment'

it('handles actions of type SAVE__COMMENT', () => {
    const action = {
        type: SAVE__COMMENT,
        payload: 'new comment'
    };

    const newState = commentReducer([], action)

    expect(newState).toEqual(['new comment'])
})

it('handles action with unknown type', () => {
    const newState = commentReducer([], {type: ''})

    expect(newState).toEqual([])
})