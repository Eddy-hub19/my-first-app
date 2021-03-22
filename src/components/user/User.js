import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    let { user } = props;
    this.state = { user };
  }

  render() {
    // let user = this.props.item
    // console.log(user);

    let { user } = this.props; //Диструктиризация
    console.log(user);

    return (
      <div>
        <h4>{user.name}</h4>
        <p>
          {user.age} - {user.status.toString()}
        </p>

        <button
          onClick={() => {
            user.status = !user.status;
            this.setState({ user });
          }}
        >
          change status
        </button>
      </div>
    );
  }
}

export default User;
