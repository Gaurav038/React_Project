import React from 'react'
import "./SidebarOpt.css"

export default function SidebarOpt({active, text, Icon}) {
    return (
        <div className={`sidebarOpt ${active && 'sidebarOpt--active'} `}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}
