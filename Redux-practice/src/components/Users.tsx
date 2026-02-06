import React, { useEffect } from "react";
import { List, ListItem } from "@mui/material";
import { fetchUsers } from "../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const Users: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.list);
  const userStatus = useAppSelector((state) => state.user.status);
  const error = useAppSelector((state) => state.user.error);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, userStatus]);

  if (userStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (userStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>{user.name}</ListItem>
      ))}
    </List>
  );
};

export default Users;
