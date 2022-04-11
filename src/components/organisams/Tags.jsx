import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useCallback } from "react";
import { useState } from "react";
import ExtendableForm from "../molecules/ExtendableForm";

const allCategories = ["Category1", "Category2", "Category3"];

const Tags = () => {
  const [categories, setCategories] = useState([]);

  const handleChange = useCallback(
    (event, values, action, { option }) => {
      if (action === "removeOption") {
        setCategories(categories.filter((category) => category !== option));
        return;
      }

      let clone = categories.slice();
      clone.push(option);
      setCategories(clone);
    },
    [categories]
  );

  const RenderTextField = useCallback(
    (params) => (
      <TextField
        {...params}
        label="filterSelectedOptions"
        placeholder="Favorites"
      />
    ),
    []
  );

  return (
    <Stack spacing={3}>
      <Autocomplete
        multiple
        value={categories}
        id="tags-outlined"
        options={allCategories}
        filterSelectedOptions
        onChange={handleChange}
        renderInput={RenderTextField}
      />
      <ExtendableForm categories={categories} setCategories={setCategories} />
    </Stack>
  );
};

export default Tags;
