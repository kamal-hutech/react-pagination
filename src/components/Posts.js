import React from "react"

const Posts = ({ posts, currentlastpost, currentfirstpost }) => {
  const currentposts = posts?.slice(currentfirstpost, currentlastpost)
  return (
    <ul>
      {currentposts?.map((post) => {
        return <li key={post.id}>{post.title}</li>
      })}
    </ul>
  )
}

export default Posts
