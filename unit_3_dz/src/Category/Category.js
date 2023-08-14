import { NavLink, useLocation } from "react-router-dom";

export default function Category() {
  let url = useLocation();
  return (
    <>
      <ul>
        <li>
          <NavLink to={`${url.pathname}/notebook`}>Ноутбуки</NavLink>
        </li>
        <li>
          <NavLink to={`${url.pathname}/monitor`}>Монітори</NavLink>
        </li>
        <li>
          <NavLink to={`${url.pathname}/cellphone`}>Мобільні телефони</NavLink>
        </li>
      </ul>
    </>
  );
}
