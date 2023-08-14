import { NavLink, useParams } from "react-router-dom";

export default function CategoryDescription() {
  let { catDescription } = useParams();
  return (
    <>
      <h1>Category: {catDescription}</h1>
      <NavLink to="/cat">Назад</NavLink>
    </>
  );
}
