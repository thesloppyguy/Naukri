import { useEffect, useState } from "react";
import UserList from "../../molecules/UserList";
import InviteUser from "../../molecules/InviteUser";
import { CircularProgress, Container } from "@mui/material";
import { useGetUserByOrganizationLazyQuery } from "../../generated/graphql";
import { IUser } from "../../interfaces/Polling";
import { INotification } from "../../interfaces/General";
import { Notification } from "../../molecules/Notification";

const UsersView = () => {
  const [userList, setUserList] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [notifcation, setNotification] = useState<INotification>({
    message: "",
    open: false,
    type: "info",
  });
  const [getUserList, { data, error }] = useGetUserByOrganizationLazyQuery({
    onCompleted() {
      setUserList(data?.getUserByOrganization as unknown as IUser[]);
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
    getUserList();
  }, []);
  return (
    <>
      <Notification {...notifcation} setOpen={setNotification} />
      <Container>
        <InviteUser />
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          <UserList userList={userList} setUserList={setUserList} />
        )}
      </Container>
    </>
  );
};

export default UsersView;
