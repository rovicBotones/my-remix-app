import { Link, useLoaderData } from "react-router-dom"
import { db } from "~/utils/db.server"
// import Post from "./Post"

export const loader = () => {
    const data = {
        posts: [
            {id: 1, title: 'Post 1', body: 'This is a test Post'},
            {id: 2, title: 'Post 2', body: 'This is a test Post'},
            {id: 3, title: 'Post 3', body: 'This is a test Post'},
        ]
    }
  return data
}
interface Post {
    id: string;
   title: string;
    createdAt: Date; 
    updatedAt: Date;
}
interface LoaderData {
    posts: Post[];
  }
function PostItems() {
    // const { posts }: LoaderData = useLoaderData();
    const { posts } = useLoaderData() as LoaderData;


    return (
      <>
        <div className='page-header'>
          <h1>Posts</h1>
          <Link to='/posts/new' className='btn'>
            New Post
          </Link>
        </div>
        <ul className='box-border m-0 p-0'>
          {posts.map((post) => (
            <li  key={post.id}>
              <Link to={post.id}>
                <h3>{post.title}</h3>
                {new Date(post.createdAt).toLocaleString()}
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
  
  export default PostItems