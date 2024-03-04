import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function ToggleColorMode({ toggle }) {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={theme.spacing(3)}
    >
      <Typography fontSize={30}>Trello</Typography>
      <IconButton sx={{ ml: 1 }} onClick={toggle} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}
