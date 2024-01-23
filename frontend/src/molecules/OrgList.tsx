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
import CloseIcon from "@mui/icons-material/Close";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useApp } from "../states/AppContext";
import { useDeleteOrganizationMutation } from "../generated/graphql";
import { INotification } from "../interfaces/General";
import { Notification } from "../molecules/Notification";

interface UserListProps {
  orgList: any[];
  setOrgList: React.Dispatch<React.SetStateAction<any[]>>;
}

const OrgList: FC<UserListProps> = ({ orgList, setOrgList }) => {
  const [state] = useApp();
  const [notifcation, setNotification] = useState<INotification>({
    message: "",
    open: false,
    type: "info",
  });
  const [deleteOrg] = useDeleteOrganizationMutation();
  const handleDelete = (id: string) => {
    deleteOrg({
      variables: {
        id: id,
      },
    })
      .then(() => {
        const filterList = orgList.filter((org) => org._id !== id);
        setOrgList(filterList);
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
        {!orgList.length && (
          <Typography variant="h5">There is other organization yet</Typography>
        )}
        <List dense>
          {orgList.map((org) => (
            <ListItem
              key={org._id}
              secondaryAction={
                org.name !== state.organization.name && (
                  <div className="flex ">
                    <>
                      {/* <Stack direction="row" spacing={1} alignItems="center">
                      <Select
                        sx={{ minWidth: "100px" }}
                        size="small"
                        label="Status"
                        name={org.id}
                        value={org.status}
                        onChange={handleSwitchRole}
                        fullWidth={true}
                      >
                        <MenuItem value="Approved">Approved</MenuItem>
                        <MenuItem value="Review">Review</MenuItem>
                        <MenuItem value="Denied">Denied</MenuItem>
                      </Select>
                    </Stack> */}

                      <IconButton
                        edge="end"
                        title="delete user"
                        aria-label="delete"
                        onClick={() => handleDelete(org._id)}
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
              <ListItemText
                primary={<>{org.name}</>}
                secondary={<>{org.url}</>}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
};

export default OrgList;
