/* eslint-disable no-unreachable */
import { Box } from "@mui/material";
import userImage from "../assets/images/image.png"
const UserImage = ({ image, size = "60px" }) => {
   const URL = process.env.REACT_APP_BACKEND_API_URL;
    return (
        <Box width={size} height={size}>
            <img style={{objectFit:"cover",borderRadius:"50%"}}
            width={size} height={size} src={userImage} alt="user" />
        </Box>
    )
}

export default UserImage;

// src={`process.env.REACT_APP_API_BASE_URL/user/${image}`}