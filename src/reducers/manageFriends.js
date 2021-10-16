export function manageFriends(state, action){
    switch (action.type){
        case "ADD_FRIEND":
            return {friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            let friendIndex = state.friends.findIndex(friend => friend.id == action.id)
            let newFriends = state.friends
            newFriends.splice(friendIndex, 1)
            return {friends: newFriends}
        default:
            return state
    }
}
