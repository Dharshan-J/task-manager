import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { IconButton, Popover, Menu, MenuItem } from "@mui/material";
import { EditOutlined, DeleteOutlineOutlined } from "@mui/icons-material";

// Styled container for the tag
const TagContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(1),
  background: theme.palette.primary.contrastText, // Adjust color based on theme mode
  color: theme.palette.text.primary,
  height: 36,
  justifyContent: "space-between",
  transition: "background-color 0.3s ease", // Transition for smooth color change

  // Hover effect
  "&:hover": {
    borderWidth: 1, // Set border width
    borderStyle: "solid", // Set border style to solid
    borderColor: theme.palette.primary.dark, // // Change text color on hover
    cursor: "pointer", // Change cursor on hover
  },
}));

// Tag component
const Tag = ({ tag, onDelete }) => {
  const theme = useTheme(); // Access the current theme
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <TagContainer
      theme={theme}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {tag.name}
      {isHovered && (
        <div>
          <IconButton
            size="small"
            color={theme.palette.primary.contrastText}
            onClick={() => {}}
          >
            <EditOutlined sx={{ fontSize: 16 }} />
          </IconButton>
          <IconButton
            size="small"
            color={theme.palette.primary.contrastText}
            onClick={() => onDelete(tag.id)}
          >
            <DeleteOutlineOutlined sx={{ fontSize: 16 }} />
          </IconButton>
        </div>
      )}
    </TagContainer>
  );
};

export default Tag;
