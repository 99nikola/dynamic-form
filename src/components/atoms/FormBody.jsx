import { TextField } from "@mui/material";
import React from "react";
import { memo } from "react";
import { useCallback } from "react";
import { Fragment } from "react";
import { Controller } from "react-hook-form";

const ExtendableFormBody = (props) => {
  const RenderCategoryFields = useCallback(
    (value) => (
      <Fragment key={value}>
        <Controller
          name={value + "-Price"}
          control={props.form.control}
          shouldUnregister={true}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} label={value + " Price"} type="number" />
          )}
        />
        <Controller
          name={value + "-Quantity"}
          control={props.form.control}
          shouldUnregister={true}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} label={value + " Quantity"} type="number" />
          )}
        />
      </Fragment>
    ),
    [props.form]
  );

  return props.categories.map(RenderCategoryFields);
};

export default memo(ExtendableFormBody);
