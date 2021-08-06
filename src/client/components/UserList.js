import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers, viewLoginModal } from "../redux/users/users.actions";
import Button from "@material-ui/core/Button";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const showModal = useSelector((state) => state.user.viewLoginModal);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  function showM() {
    dispatch(viewLoginModal());
  }

  const handleClose = () => dispatch(viewLoginModal());

  return (
    <div>
      <div>User List</div>
      <Link to="/">To home page</Link>
      <ul>
        {/* {users.map((user) => (
          <li key={user.id}>{user.first_name}</li>
        ))} */}
      </ul>
      <Button variant="primary" onClick={showM}>
        showModal
      </Button>
    </div>
  );
};

UserList.getInitialData = async (store) => {
  return store.dispatch(fetchUsers());
};

export default UserList;
