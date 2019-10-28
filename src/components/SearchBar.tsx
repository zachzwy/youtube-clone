import React, { createRef } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = ({ onFormSubmit }: { onFormSubmit: Function }) => {
  const myRef = createRef<HTMLInputElement>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    onFormSubmit(myRef.current!.value);

    e.preventDefault();
    myRef.current!.value = "";
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Search..." inputRef={myRef} />
      </form>
    </Paper>
  );
};

export default SearchBar;
