import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";
import axios from "axios";
import { User } from "./user.interface";
import Button from "@material-ui/core/Button";
const MainSearch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>("");
  const [limit, setLimit] = useState<number>(5);
  const getData = async (newLimit) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/users?search=${search}&limit=${newLimit}`
      );
      console.log(data);
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData(limit);
  }, []);
  useEffect(() => {
    getData(5);
    setLimit(5);
  }, [search]);
  useEffect(() => {
    getData(limit);
  }, [limit]);

  return (
    <div>
      <Searchbar
        setUser={setUsers}
        users={users}
        setSearch={setSearch}
      ></Searchbar>
      <SearchResults users={users}></SearchResults>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => {
          setLimit(limit + 5);
        }}
      >
        View more
      </Button>
    </div>
  );
};

export default MainSearch;
