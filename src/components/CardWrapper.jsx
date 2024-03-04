import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Typography,
  Box,
  Skeleton,
  TextField,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import Tag from "./Tag";
import { API } from "../globals";
import CloseIcon from "@mui/icons-material/Close";

const CardWrapper = () => {
  const theme = useTheme();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddTask, setOpenAddTask] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data, error } = await API.from("list").select();
      if (error) {
        console.warn(error);
      } else {
        setList(data);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const skeletons = Array.from({ length: 2 }, (_, index) => (
    <Skeleton key={index} height={32} />
  ));

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const addTask = async () => {
    const { data, error } = await API.from("list")
      .insert({ name: textFieldValue })
      .select();
    if (error) {
      console.warn(error);
    } else {
      setList((prev) => [...prev, ...data]);
      setOpenAddTask(false);
      setTextFieldValue("");
    }
  };

  const openTextField = () => {
    setOpenAddTask(true);
    console.log("task added");
  };

  const onDelete = async (deleteId) => {
    try {
      const { data, error } = await API.from("list")
        .delete()
        .eq("id", deleteId)
        .select();
      if (error) {
        console.warn(error);
      } else {
        setList((prev) => prev.filter((data) => data.id !== deleteId));
      }
    } catch {}
  };

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          padding: "8px",
          borderRadius: "8px",
          backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey[900] : "#f1f2f4",
        }}
      >
        <Typography p={1}>To Do</Typography>
        {loading ? (
          <Box>{skeletons}</Box>
        ) : (
          <Box display="flex" flexDirection="column" gap={1}>
            {list.map((data) => (
              <Tag key={data.id} tag={data} onDelete={onDelete}></Tag>
            ))}
          </Box>
        )}
        {openAddTask ? (
          <Box display="flex" flexDirection="column" gap={2} pt={1}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Title for this card"
              value={textFieldValue}
              onChange={handleTextFieldChange}
            />
            <Box display="flex" gap={1} alignItems="center">
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={addTask}
              >
                Add
              </Button>
              <IconButton onClick={() => setOpenAddTask(false)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <Button
            fullWidth
            size="small"
            onClick={openTextField}
            sx={{ marginTop: "8px" }}
          >
            Add a card
          </Button>
        )}
      </Card>
    </ThemeProvider>
  );
};

export default CardWrapper;
