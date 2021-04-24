import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserCard from '../Users';
import { getUsers, searchUsers } from '../action/user.action.js';

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    searchUsers: (user) => {
      dispatch(searchUsers(user));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

const UserCardContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserCard)
);
export default UserCardContainer;
