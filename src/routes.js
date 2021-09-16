import React from 'react';

const Main = React.lazy(() => import('./views/Component/Main'));
const routes = [
  { path: '/', name: 'Main', exact: true, component: Main },
];

export default routes;
