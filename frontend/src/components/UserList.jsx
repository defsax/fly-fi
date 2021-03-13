import React from "react";


export default function UserList(props) {

  const {users} = props;

  console.log(users);

  if (users) {
    return (
      users.users.map((user, index) => {
        console.log(user);
        return (
          <li>
            <p>User: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <br />
          </li>
          )
      })
    );
  } else {
    return (<h1>No user data</h1>)
  }
}
