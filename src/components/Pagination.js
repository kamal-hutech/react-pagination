import React from "react"

const Pagination = ({ totalPosts, pagePerPost, navigate }) => {
  let pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / pagePerPost); i++) {
    pageNumbers.push(i)
  }
  return (
    <ul style={{ display: "flex", gap: "10px" }}>
      {pageNumbers.map((number) => {
        return (
          <li
            key={number}
            style={{
              display: "inline-block",
              listStyle: "none",
              border: "1px solid #f3d4d4",
              padding: "5px",
              cursor: "pointer",
            }}
            onClick={() => navigate(number)}
          >
            {number}
          </li>
        )
      })}
    </ul>
  )
}

export default Pagination
