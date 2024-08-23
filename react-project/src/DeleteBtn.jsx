import React from 'react'

export default function DeleteBtn({post, deletePost, children}) {
    return (
        <div>
            <button onClick={() => deletePost(post.id)}>{children}</button>
        </div>
    )
}
