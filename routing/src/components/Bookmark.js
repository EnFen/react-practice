import React from 'react'

function Bookmark(props) {
    const { bookmark } = props
    return (
        <li><a href={bookmark.url}>{bookmark.title}</a></li>
    )
}

export default Bookmark
