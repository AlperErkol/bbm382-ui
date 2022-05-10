import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import UserService from "../services/UserService";

import {Link} from 'react-router-dom';

const Search = () => {

  const initializeSearch = () => {
    setActive(true);
    setLoading(true);
    UserService.getAllUsers()
      .then((response) => {
        console.log(response.data);
        setResult(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };


  const [loading, setLoading] = useState(false);
  const [results, setResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [active, setActive] = useState(false);

  const filteredUsers = results.filter((user) => {
    if (
      user.firstName.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
    ) {
      return user;
    }
    return null;
  });

  return (
    <form className="search--area relative flex">
      <input
        onClick={() => initializeSearch()}
        onChange={(e) =>setSearchInput(e.target.value)}
        className="search-input"
        placeholder="Search Anything"
        type="text"
        spellCheck={false}
      />
      <div className={active ? "absolute search--results active p-4" : "absolute search--results"}>
        {loading && <Spinner />}
        {results && searchInput.charAt(0) && filteredUsers.map((item)=>(
          <Link className="flex justify-between items-center mb-4" to={`/profile/${item.userId}`}>
            <div className="inline-flex items-center">
              <div className="inline-block w-8 h-8 rounded-full mr-4 bg-errorText"></div>
              <span className="text-secondary">{item.firstName + " " + item.lastName}</span>
            </div>
            <span className="text-secondary text-xs font-bold">{item.userType}</span>
          </Link>
        )) }

      </div>
      <div onClick={()=>setActive(false)} className={active ? "search--overlay active" : "search--overlay"}></div>
    </form>
  );
};

export default Search;
