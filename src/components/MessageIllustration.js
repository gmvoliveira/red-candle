import React from 'react'
import { messageIllustration } from '../styles/modules/message.module.css'

const MessageIllustration = ({url, text, altText, size = 300}) => {
    const minImageSize = 200
    const minFontSize = 1
    const validSize = (size - minImageSize) > 0

    const calcedImageSize = minImageSize + (validSize ? size - minImageSize : 0)
    const calcedFontSize = minFontSize + ((validSize ? size - minImageSize : 1) / (size * 2))

    return (
        <div className={messageIllustration} style={{maxWidth: calcedImageSize}}>
            <img src={url} alt={altText} />
            <p style={{fontSize: `${calcedFontSize}rem`}}>{text}</p>
        </div>
    )
}

export default MessageIllustration