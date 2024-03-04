import React from "react";
import CardWrapper from "./CardWrapper";
import { Grid, Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const Layout = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container gap={4} margin={3}>
        <Grid item xs={2.5} p={2}>
          <CardWrapper m={2}></CardWrapper>
        </Grid>
        {/* <Grid xs={2}>
          <CardWrapper></CardWrapper>
        </Grid>
        <Grid xs={2}>
          <CardWrapper></CardWrapper>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Layout;
