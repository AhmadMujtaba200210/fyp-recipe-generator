import { Box } from "@mui/material";
import {styled} from "@mui/system";
// this will give us the basic styling of every widget we are going to create
const WidgetWrapper=styled(Box)(({theme})=>({
    padding:"1.5rem 20.5rem 0.5rem 3.5rem",
    backgroundColor: "alt",
    borderRadius:"0.75rem"
}));

export default WidgetWrapper;