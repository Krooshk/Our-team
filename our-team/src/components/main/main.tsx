import { useState, useEffect } from "react";
import Card  from "../card/card";

function Main() {
  const [users, setUsers] = useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };

  useEffect(() => {
    f();
  }, []);

  console.log(users);

//   const usersElements = users.map((user) => <Card props={user} />);

  return <div>{users.map((user) => <Card user = {user} />)}</div>;
}

export default Main;
