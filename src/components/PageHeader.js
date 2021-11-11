import React from 'react'

const PageHeader=()=>{
    return(
        <div className="page-header">
            <h1>
                <span className="text-primary">
                    <i className="fas fa-user-circle"></i>
                </span>
                User Dashboard
            </h1>
        </div>
    )
}

export default React.memo(PageHeader)
