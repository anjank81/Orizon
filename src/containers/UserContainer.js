import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RepoList from '../RepoList';
import { searchUserRepo } from '../action/user.action';

const mapDispatchToProps = (dispatch) => {
  return {
    searchUserRepo: (user) => {
      dispatch(searchUserRepo(user));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    userRepoDetails: state.repoDetails,
    loader: state.repoLoader,
  };
};

const UserContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RepoList)
);
export default UserContainer;
