import { saveComment } from ".."
import { SAVE__COMMENT } from "../types";

describe('saveComment', () => {
    it('has the correct type', () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE__COMMENT);
    })

    it('has the correct payload', () => {
        const action = saveComment('New Comment');

        expect(action.payload).toEqual('New Comment');
    })
})