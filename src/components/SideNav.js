import React from 'react'

const SideNav = () => {
    return (
        <div className="side-nav">
            <ul>
                <li>
                    <a href="#">
                        <i className="fas fa-home" />
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-user" />
                        <span>Profile</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-cog" />
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default React.memo(SideNav)
