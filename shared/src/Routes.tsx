import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Dispatch } from 'redux'
import HomePage from '../../client/src/pages/HomePage'
import { loadUserListData, UserListPage } from '../../client/src/pages/UserListPage'



// export default () => {
//     return (
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/users" element={<UserList/>} />
//       </Routes>
//     )
// }

export type CustomRoute = {
  path: string
  component: () => JSX.Element
  loadData?: (dispatch: Dispatch<any>) => any | undefined
}

export const routes: CustomRoute[] = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/users',
    component: UserListPage,
    loadData: loadUserListData
  }
]

export const UnifiedRoutes = (): JSX.Element => {
  return (
    <Routes>
      {routes.map((route: CustomRoute) => {
        const { path, loadData, component: Comp } = route
        return (
          <Route
            key={path}
            path={path}
            element={<Comp />}
          />
        )
      })}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}