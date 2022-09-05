import { useSelector } from "react-redux"

export function Catalog() {
  const catalog = useSelector(state => state);

  console.log(catalog);

  return (
    <h1>Catalog</h1>
  )
}