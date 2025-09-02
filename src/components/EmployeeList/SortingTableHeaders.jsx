import tableHeaders from '../../data/tableHeaders'
import sortArrowBlank from '../../assets/sort-arrow-blank.svg'
import sortArrowUp from '../../assets/sort-arrow-up.svg'
import sortArrowDown from '../../assets/sort-arrow-down.svg'

export default function SortingTableHeaders({ sortConfig, setSortConfig }) {
  const handleSort = (columnKey) => {
    if (sortConfig.key === columnKey) {
      setSortConfig({
        key: columnKey,
        direction: sortConfig.direction === 'asc' ? 'desc' : 'asc',
      })
    } else {
      setSortConfig({ key: columnKey, direction: 'asc' })
    }
  }

  return (
    <>
      {tableHeaders.map((title, index) => (
        <th key={index} onClick={() => handleSort(title.key)}>
          {title.label}
          {sortConfig.key === title.key ? (
            sortConfig.direction === 'asc' ? (
              <img
                src={sortArrowUp}
                alt="ascendant"
                style={{ marginLeft: 4 }}
              />
            ) : (
              <img
                src={sortArrowDown}
                alt="descendant"
                style={{ marginLeft: 4 }}
              />
            )
          ) : (
            <img src={sortArrowBlank} />
          )}
        </th>
      ))}
    </>
  )
}
