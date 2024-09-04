import React from 'react'

export default function MyButton({children, ...props}) {
    return (
        <div>
            <button >{children}</button>
        </div>
    )
}
