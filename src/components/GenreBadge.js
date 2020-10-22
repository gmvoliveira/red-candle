import React from 'react'
import { badge } from '../styles/modules/badge.module.css'

const GenreBadge = ({genre}) => (
    <div className={badge}>{genre || 'Set a genre below...'}</div>
)

export default GenreBadge