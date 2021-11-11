import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import routes from '../routes'

const PageContent = () => {
    return (
        <Suspense fallback={"Loading"}>
            <Switch>
                {routes.map((route, idx) => {
                    return (
                        route.component && (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={(props) => (
                                    <>
                                        <route.component {...props} />
                                    </>
                                )}
                            />
                        )
                    )
                })}
                <Redirect from="/" to="/" />
            </Switch>
        </Suspense>
    )
}

export default React.memo(PageContent)
