import { Box } from "@mui/material";
import {styled }from "@mui/system";

// using the styled we can use the basic css as component
const FlexBetween= styled(Box)({
    display:"flex",
    justifyContent: "space-between",    
    alignItems: "center",
});
// by using this we can use the "once defined css properties" to anywhere

export default FlexBetween;