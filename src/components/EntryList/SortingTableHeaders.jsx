export default function SortingTableHeaders({ headers }) {
  return (
    <>
      {headers.map((header, index) => (
        <th key={index} onClick={header.onClick}>
          {header.label}
          <img src={header.icon} alt="" />
        </th>
      ))}
    </>
  )
}
