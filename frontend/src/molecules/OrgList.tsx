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

enum ACTION_TYPE {
  DELETE,
  ASSIGN_ROLE,
}
interface UserListProps {
  userList: any[];
  roles: any[];
  onDelete: (user: any) => void;
  setUserList: React.Dispatch<React.SetStateAction<any[]>>;
}

const OrgList: FC<UserListProps> = ({ userList, setUserList, onDelete }) => {
  userList = [
    {
      _id: "659dc26ac103f0d75cb6e331",
      email: "sahil@gmail.com",
      password: "$2b$10$Ed8QWtKWNbQN25AECF6Cg.Zu0xGT.H4gF88CtqySgR1jUt0meDh9O",
      role: "Admin",
      organization: {
        _id: "659dc0d068cd9fb381dee814",
        name: "Lokibots",
        contactEmail: "sahil@gmail.com",
        url: "https://www.lokibots.ai/",
        status: "allowed",
        __v: 0,
      },
      __v: 0,
    },
    {
      _id: "659dc26ac103f0d75cb6e331",
      email: "sahil@gmail.com",
      password: "$2b$10$Ed8QWtKWNbQN25AECF6Cg.Zu0xGT.H4gF88CtqySgR1jUt0meDh9O",
      role: "Admin",
      organization: {
        _id: "659dc0d068cd9fb381dee814",
        name: "Lokibots",
        contactEmail: "sahil@gmail.com",
        url: "https://www.lokibots.ai/",
        status: "allowed",
        __v: 0,
      },
      __v: 0,
    },
  ];
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ user: any | null; type: ACTION_TYPE }>();

  const handleSwitchRole = () => {};
  return (
    <Paper className="p-5 mt-4">
      {!userList.length && (
        <Typography variant="h5">There is no users yet</Typography>
      )}
      <List dense>
        {userList.map((user) => (
          <ListItem
            key={user.id}
            secondaryAction={
              <div className="flex ">
                <>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Select
                      sx={{ minWidth: "100px" }}
                      size="small"
                      label="Role"
                      value={user.role}
                      onChange={handleSwitchRole}
                    >
                      <MenuItem value="User">User</MenuItem>
                      <MenuItem value="Admin">Admin</MenuItem>
                      <MenuItem value="Maintainer">Maintainer</MenuItem>
                    </Select>
                  </Stack>

                  <IconButton
                    edge="end"
                    title="delete user"
                    aria-label="delete"
                    onClick={() => {
                      setOpen(true);
                      setUser({ user, type: ACTION_TYPE.DELETE });
                    }}
                  >
                    <PersonRemoveIcon />
                  </IconButton>
                </>
              </div>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <PermIdentityIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  {user.email}{" "}
                  {!user.isActive && (
                    <>
                      <CloseIcon color="error" />
                    </>
                  )}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default OrgList;
