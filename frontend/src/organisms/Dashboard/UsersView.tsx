import React from "react";
import UserList from "../../molecules/UserList";
import InviteUser from "../../molecules/InviteUser";
import Container from "@mui/material/Container";

const UsersView = () => {
  return (
    <Container>
      <InviteUser />
      <UserList
        userList={[]}
        roles={[]}
        onDelete={function (user: any): void {
          throw new Error("Function not implemented.");
        }}
        setUserList={function (value: React.SetStateAction<any[]>): void {
          throw new Error("Function not implemented.");
        }}
      />
    </Container>
  );
};

export default UsersView;
