import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { User } from "./user.interface";
import axios from "axios";
const Searchbar = (props) => {
  const [suggestions, setSuggestions] = useState<User[]>([]);
  const [value, setValue] = useState<string>();
  const [inputValue, setInputValue] = React.useState("");
  const getSuggestions = async (e) => {
    console.log(e.target.value);
    //const { data } = await axios.get(`/users?search=${search}`);

    //  setSuggestions([...suggestions, value]);
  };
  useEffect(() => {
    const setInput = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/users?search=${inputValue}`
      );
      setSuggestions(data);
    };
    setInput();
  }, [inputValue]);
  useEffect(() => {
    const setInput = async () => {
      if (value) {
        props.setSearch(value);
      } else {
        props.setSearch("");
      }
    };
    setInput();
  }, [value]);

  return (
    <div style={{ width: 300, margin: "10px" }}>
      <Autocomplete
        value={value}
        inputValue={inputValue}
        onChange={(event: any, newValue: string | null) => {
          console.log(newValue);
          setValue(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={suggestions.map((option) => option.name)}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label="search by name"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          );
        }}
      />
    </div>
  );
};

export default Searchbar;
