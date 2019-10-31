import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header" style={{marginTop: 25, textAlign: 'right'}} >{user.name}</div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.userId),
});

export default connect(
  mapStateToProps,
)(UserHeader);
