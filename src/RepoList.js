import React, { Component } from 'react';
import styles from './UserDetails.module.css';
import Loader from './Loader.js';
export default class UserDetails extends Component {
  componentDidMount() {
    let user = this.props.location.state.user
      ? this.props.location.state.user
      : 'anjank81';
    this.props.searchUserRepo(user);
  }
  onRedirect = (val) => {
    window.open(val);
  };
  render() {
    const image =
      this.props &&
      this.props.userRepoDetails &&
      this.props.userRepoDetails[0] &&
      this.props.userRepoDetails[0].owner &&
      this.props.userRepoDetails[0].owner.avatar_url;
    const name =
      this.props &&
      this.props.userRepoDetails &&
      this.props.userRepoDetails[0] &&
      this.props.userRepoDetails[0].owner &&
      this.props.userRepoDetails[0].owner.login;
    return (
      <React.Fragment>
        {this.props && this.props.loader && <Loader />}
        <div className={styles.base}>
          <div
            className={styles.logout}
            onClick={() => {
              this.props.history.push('/');
            }}
          >
            Home
          </div>
          <div
            className={styles.logout}
            onClick={() => {
              this.props.history.push('/Login');
            }}
          >
            Users
          </div>
          {this.props &&
          this.props.userRepoDetails &&
          this.props.userRepoDetails.length > 0 ? (
            <div className={styles.detailsHolder}>
              <div className={styles.descriptionHolder}>
                <div className={styles.imageAndName}>
                  {image && (
                    <div className={styles.imageHolder}>
                      <img src={image} alt="" />
                    </div>
                  )}
                  <div className={styles.nameOfUser}>{name}</div>
                </div>
                <div className={styles.dataAndLink}>
                  {this.props &&
                    this.props.userRepoDetails &&
                    this.props.userRepoDetails.map((val, i) => {
                      return (
                        <div
                          className={styles.repoAndLink}
                          onClick={() => this.onRedirect(val.html_url)}
                        >
                          <div className={styles.repoName}>{val.name}</div>
                          <div className={styles.link}>{val.html_url}</div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.notFound}>No Repository Found</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
