import { Box } from "@mui/material";
import Header from "../../components/Header";

const dashboard =  () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome To Your Dashboard" />
      </Box>
    </Box>
  );
};

export default dashboard;