import MainPage from "./Pages/MainPage.jsx"
import PostsPage from "./Pages/PostsPage.jsx"
import PostPage from "./Pages/PostPage.jsx"

const routes = [
    {path: "/", element: MainPage, exact: false},
    {path: "/posts", element: PostsPage, exact: true},
    {path: "/posts/:postId", element: PostPage, exact: true},

]

export default routes