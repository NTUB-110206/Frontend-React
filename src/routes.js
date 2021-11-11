import React from 'react'

const NewsPage = React.lazy(() => import('./views/pages/NewsPage'))

const routes = [
  { path: '/', exact: true, name: 'NewsPage', component: NewsPage },
]

export default routes
