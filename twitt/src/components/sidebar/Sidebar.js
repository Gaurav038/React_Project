import React from 'react'
import "./Sidebar.css"
import SidebarOpt from './SidebarOpt'
import TwitterIcon from "@material-ui/icons/Twitter"
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />
            <SidebarOpt active Icon={HomeIcon} text="Home" />
            <SidebarOpt Icon={SearchIcon} text="Explore" />
            <SidebarOpt Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOpt Icon={MailOutlineIcon} text="Messages" />
            <SidebarOpt Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOpt Icon={ListAltIcon} text="Lists" />
            <SidebarOpt Icon={PermIdentityIcon} text="Profile" />
            <SidebarOpt Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="sidebar__tweet" fullWidth >Tweet</Button>
        </div>
    )
}
