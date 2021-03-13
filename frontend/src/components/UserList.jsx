import React from "react";

import User from "./User"

export default function UserList(props) {
  if(props.users){
    console.log(props.users);
    const users = props.users.users.map((user) => {
      console.log("user: ",user);
      return (
        <User 
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
        />
      )
    });
    console.log(users);

    return(<li>{users}</li>);
  } else {
    return(
      <p>No data.</p>
    )
  }
}
