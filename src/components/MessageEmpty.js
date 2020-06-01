import React from 'react'

import { messageEmpty } from '../styles/modules/message.module.css'

const MessageEmpty = ({url, text, altText, size = 300}) => {
    
    const calcedImageSize = 200 + ((size - 200) > 0 ? size - 200 : 0)
    const calcedFontSize = 1 + (((size - 200) > 0 ? size - 200 : 1) / 600)

    return (
        <div className={messageEmpty} style={{maxWidth: calcedImageSize}}>
            <img src={url} alt="No albums found" />
            <p style={{fontSize: `${calcedFontSize}rem`}}>{text}</p>
        </div>
    )
}

export default MessageEmpty