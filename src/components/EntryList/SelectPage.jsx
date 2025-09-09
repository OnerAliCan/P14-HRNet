export default function SelectPage({ currentPage, onClick, pagesToShow }) {
  return (
    <>
      {pagesToShow.map((page, index) =>
        page === '...' ? (
          <span key={`ellipse-${index}`} style={{ margin: '0 4px' }}>
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onClick(page)}
            style={{
              color: page === currentPage ? 'red' : 'black',
              margin: '0 2px',
            }}
          >
            {page}
          </button>
        ),
      )}
    </>
  )
}
