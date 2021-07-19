export const initialState = {
    user: null,
    profile: {},
    account: {},
    post: {},
    upvotes: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'UPDATE_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'UPDATE_ACCOUNT':
            return {
                ...state,
                account: action.account
            }
        case 'UPLOAD_PROJECT':
            return {
                ...state,
                post: action.post
            }
        case 'UPVOTE':
            return {
                ...state,
                upvotes: [...state.upvotes, action.projectId]
            }
        case 'DOWNVOTE':
            const index = state.upvotes.findIndex(
                (projectId) => projectId === action.projectId
            )
            
            let newUpvotes = [...state.upvotes];
            if (index < 0) {
                // upvote 안에 프로젝트 id 가 없는 경우 
                console.warn("Can't downvote!")
            } else {
                // upvote 안에 프로젝트 id 가 있는 경우 - 제거
                newUpvotes.splice(index, 1);
            }
            return {
                ...state,
                upvotes: newUpvotes
            }
        default:
            return state;
    }
};

export default reducer;