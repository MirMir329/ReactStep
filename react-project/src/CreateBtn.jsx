import React from 'react'

export default function CreateBtn({children, createPost}) {
    return (
        <div>
            <button onClick={() => createPost()}>{children}</button>
        </div>
    )
}
