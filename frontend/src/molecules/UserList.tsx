import { FC, useState } from "react";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useApp } from "../states/AppContext";
import { useDeleteUserMutation } from "../generated/graphql";
import { INotification } from "../interfaces/General";
import { Notification } from "../molecules/Notification";

interface UserListProps {
  userList: any[];
  setUserList: React.Dispatch<React.SetStateAction<any[]>>;
}

const UserList: FC<UserListProps> = ({ userList, setUserList }) => {
  const [state] = useApp();
  const [notifcation, setNotification] = useState<INotification>({
    message: "",
    open: false,
    type: "info",
  });
  const [deleteUser] = useDeleteUserMutation();
  const handleDelete = (id: string) => {
    deleteUser({
      variables: {
        id: id,
      },
    })
      .then(() => {
        const filterList = userList.filter((user) => user._id !== id);
        setUserList(filterList);
      })
      .catch((error) => {
        setNotification({
          message: error?.message as string,
          open: true,
          type: "error",
        });
      });
  };
  return (
    <>
      <Notification {...notifcation} setOpen={setNotification} />

      <Paper className="p-5 mt-4">
        {!userList.length && (
          <Typography variant="h5">There is no users yet</Typography>
        )}
        <List dense>
          {userList.map((user) => (
            <ListItem
              key={user.id}
              secondaryAction={
                user.email !== state.email && (
                  <div className="flex ">
                    <>
                      {/* <Stack direction="row" spacing={1} alignItems="center">
                      <Select
                        sx={{ minWidth: "100px" }}
                        size="small"
                        label="Role"
                        value={user.role}
                        onChange={handleSwitchRole}
                      >
                        <MenuItem value="User">User</MenuItem>
                        <MenuItem value="Admin">Admin</MenuItem>
                        {state.role === "Maintainer" && (
                          <MenuItem value="Maintainer">Maintainer</MenuItem>
                        )}
                      </Select>
                    </Stack> */}

                      <IconButton
                        edge="end"
                        title="delete user"
                        aria-label="delete"
                        onClick={() => {
                          handleDelete(user.id);
                        }}
                      >
                        <PersonRemoveIcon />
                      </IconButton>
                    </>
                  </div>
                )
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <PermIdentityIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<>{user.email}</>} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
};

export default UserList;
