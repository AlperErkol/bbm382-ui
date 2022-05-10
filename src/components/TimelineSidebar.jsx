import React, { useState, useEffect } from "react";

import UserService from "../services/UserService";
import TimelineSidebarProfile from "./TimelineSidebarProfile";
import Spinner from "./Spinner";

const TimelineSidebar = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [loggedUser, setLoggedUser] = useState();
  const [loggedUserId, setLoggedUserId] = useState();

  useEffect(() => {
    setLoading(true);
    if (localStorage.getItem("loggedUser")) {
      const userId = localStorage.getItem("loggedUser");
      setLoggedUserId(userId);
      setLoggedUser(true);
      UserService.findByUserId(userId)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
      setLoggedUser(false);
    }
  }, []);

  return (
    <aside className="timeline--sidebar">
      <div className="timeline--sidebar-container bg-primary-light w-full h-72 relative">
        {loading && <Spinner />}
        {loggedUser && loggedUser ? (
          data && <TimelineSidebarProfile data={data} />
        ) : (
          <p className="text-center font-bold">You must log in to post.</p>
        )}

      </div>
    </aside>
  );
};

export default TimelineSidebar;
