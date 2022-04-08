import { Box, Button, ButtonGroup } from "@mui/material";
import { memo } from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import ExtendableFormBody from "../atoms/FormBody";

const ExtendableForm = (props) => {
  const form = useForm();

  const onSubmit = useCallback((inputData) => {
    console.log(inputData);
  }, []);

  const onError = useCallback((error) => {
    console.log(error);
  }, []);

  const handleCancel = useCallback(() => {
    props.setCategories([]);
  }, []);

  return (
    <form onSubmit={form.handleSubmit(onSubmit, onError)}>
      <Box sx={containerStyles}>
        <ExtendableFormBody form={form} categories={props.categories} />
        <ButtonGroup>
          <Button variant="contained" color="success" type="submit">
            SAVE
          </Button>
          <Button variant="contained" color="warning" onClick={handleCancel}>
            CANCEL
          </Button>
        </ButtonGroup>
      </Box>
    </form>
  );
};

const containerStyles = {
  display: "flex",
  gap: ".5rem",
  flexDirection: "column",
  alignItems: "center",
};

export default memo(ExtendableForm);
