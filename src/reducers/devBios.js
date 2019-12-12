import { handleActions } from 'redux-actions';
import Developer from '../components/Developer';

const GET_ALL_BIOS = 'GET_ALL_BIOS';
const ADD_BIO = 'ADD_BIO';

const devsActions = {
    getAllBiosActionCreator: (developers) => ({
        type: GET_ALL_BIOS,
        developers
    }),

    addDevBioActionCreator: (developer) => ({
        type: ADD_BIO,
        developer
    }),

    reducer: handleActions({
        [GET_ALL_BIOS]: (state, action) => ({
            ...state,
            developers: action.developers
        }),
        [ADD_BIO]: (state, action) => ({
            ...state,
            developers: [...state.developers, action.developer]
        })
    }, {
        developers: [
            new Developer(1, "Sri harsha", "Akurathi", "Java", 2011),
            new Developer(2, "Sravani", "Goli", "Python", 2019)
        ]
    })
}

export default devsActions;