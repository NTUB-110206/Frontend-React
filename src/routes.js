import React from 'react'

const NewsPage = React.lazy(() => import('./views/pages/NewsPage'))
const TrendPage = React.lazy(() => import('./views/pages/TrendPage'))
const TutorialPage = React.lazy(() => import('./views/pages/TutorialPage'))

const routes = [
  { path: '/', exact: true, name: 'NewsPage', component: NewsPage },
  { path: '/news', exact: true, name: 'NewsPage', component: NewsPage },
  { path: '/trend', exact: true, name: 'TrendPage', component: TrendPage },
  { path: '/tutorial', exact: true, name: 'TutorialPage', component: TutorialPage },
]

export default routes
