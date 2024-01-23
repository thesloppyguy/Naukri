import React, { useEffect, useState } from "react";
import OrgList from "../../molecules/OrgList";
import InviteOrg from "../../molecules/InviteOrg";
import Container from "@mui/material/Container";
import { IOrganisation } from "../../interfaces/Polling";
import { INotification } from "../../interfaces/General";
import { useGetOrganizationsLazyQuery } from "../../generated/graphql";

const MaintainerView = () => {
  const [orgList, setOrgList] = useState<IOrganisation[]>([]);
  const [loading, setLoading] = useState(false);
  const [notifcation, setNotification] = useState<INotification>({
    message: "",
    open: false,
    type: "info",
  });
  const [getOrganizationList, { data, error }] = useGetOrganizationsLazyQuery({
    onCompleted() {
      setOrgList(data?.getOrganizations as unknown as IOrganisation[]);
      setLoading(false);
    },
    onError() {
      setNotification({
        message: error?.message as string,
        open: true,
        type: "error",
      });
      setLoading(false);
    },
  });
  useEffect(() => {
    setLoading(true);
    getOrganizationList();
  }, []);
  return (
    <Container>
      <InviteOrg />
      <OrgList orgList={orgList} setOrgList={setOrgList} />
    </Container>
  );
};

export default MaintainerView;
