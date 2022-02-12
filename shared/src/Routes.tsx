import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Dispatch } from 'redux'
import Home from '../../client/src/components/Home'
import { loadUserListData, UserList } from '../../client/src/components/UserList'



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
    component: Home
  },
  {
    path: '/users',
    component: UserList,
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