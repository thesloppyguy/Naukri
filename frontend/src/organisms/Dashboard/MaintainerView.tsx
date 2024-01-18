import React from "react";
import OrgList from "../../molecules/OrgList";
import InviteOrg from "../../molecules/InviteOrg";
import Container from "@mui/material/Container";

const MaintainerView = () => {
  return (
    <Container>
      <InviteOrg />
      <OrgList
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

export default MaintainerView;
