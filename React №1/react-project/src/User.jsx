import React from 'react'

export default function User({username, age}) {
    return (
        <div>
          <h1>{username}</h1>
          <h2>{age}</h2>
        </div>
    )
}
