import { useLocation, NavLink } from "react-router-dom";

function Users() {
  let url = useLocation();
  return (
    <>
      <h1>Users</h1>
      <ul>
        <li>
          <NavLink to={`${url.pathname}/ivanov`}>Ivanon</NavLink>
        </li>
        <li>
          <NavLink to={`${url.pathname}/petrov`}>Petrov</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Users;
