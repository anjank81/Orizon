import * as userAction from '../action/user.action';
const user = (
  state = {
    status: null,
    error: null,
    repoDetails: null,
    repoLoader: false,
  },
  action
) => {
  switch (action.type) {
    case userAction.USERS_REPO_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        repoLoader: true,
      });
    case userAction.USERS_REPO_SUCCESS:
      return Object.assign({}, state, {
        repoDetails: action.userDetails,
        status: action.status,
        repoLoader: false,
      });
    case userAction.USERS_REPO_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });
    default:
      return state;
  }
};
export default user;
