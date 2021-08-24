
import {createSelector} from 'reselect';

const selectAuth = state => state.auth;

export const selectCurrentUser = createSelector(
    [selectAuth],
    (auth)=>auth.currentUser
)

export const selectUserName = createSelector(
    [selectCurrentUser],
    (currentUser)=>currentUser.name
)

