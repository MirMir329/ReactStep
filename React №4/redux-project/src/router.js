import MainPage from "./Pages/MainPage.jsx"
import PostsPage from "./Pages/PostsPage.jsx"
import PostPage from "./Pages/PostPage.jsx"
import LoginPage from "./Pages/LoginPage.jsx"

export const privateRoutes = [
    {path: "/", element: MainPage, exact: false},
    {path: "/posts", element: PostsPage, exact: true},
    {path: "/posts/:postId", element: PostPage, exact: true},
    
]

export const publicRoutes = [
    {path: "/", element: MainPage, exact: false},
    {path: "/login", element: LoginPage, exact: true},
]

