import { List, ListItemButton, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeToken } from "../../helpers/manageAuthToken";
import { useNavigate } from "react-router-dom";
import {logout} from "../../store/auth/authAction";

interface IUserProfilePopOver {
  handleClose: () => void;
}

export default function UserProfilePopOver(props: IUserProfilePopOver) {
  const { handleClose } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    handleClose();
  };

  const handleLogout = () => {    
    dispatch<any>(logout());
    handleClose();
  };

  return (
    <List sx={{ width: "200px", padding: 0 }}>
      <ListItemButton onClick={handleProfileClick}>
        <ListItemText primary="Profile" />
      </ListItemButton>
      <ListItemButton onClick={handleLogout}>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
}
