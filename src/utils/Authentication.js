const getLoggedInUser = () => {
  if (localStorage.getItem("loggedUser")) {
    const userId = localStorage.getItem("loggedUser");
    return userId;
  } else {
    return null;
  }
};

export default getLoggedInUser;
