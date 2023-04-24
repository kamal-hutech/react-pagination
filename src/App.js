import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"
import Posts from "./components/Posts"
import Pagination from "./components/Pagination"

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [posts, setPosts] = useState()
  const [pagePerPost, setPagePerPost] = useState(5)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data)
      setPosts(response.data)
    })
  }, [])

  //set current posts
  let currentlastpost = currentPage * pagePerPost
  let currentfirstpost = currentlastpost - pagePerPost + 1
  let totalPosts = posts?.length

  //paginate
  const navigate = (number) => {
    setCurrentPage(number)
  }
  return (
    <div className="mt-3">
      <Posts
        posts={posts}
        currentlastpost={currentlastpost}
        currentfirstpost={currentfirstpost}
      />
      <Pagination
        totalPosts={totalPosts}
        pagePerPost={pagePerPost}
        navigate={navigate}
      />
    </div>
  )
}

export default App
