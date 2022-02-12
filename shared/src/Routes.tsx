import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Dispatch, AnyAction } from 'redux'
import Home from '../../client/src/components/Home'
import { UserList } from '../../client/src/components/UserList'
import { fetchUserAsync } from "./_actions/userAction/actionCreators";



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
  component: ({
    fetchInitialData
  }: {
    fetchInitialData: () => (dispatch: Dispatch<AnyAction>) => Promise<any>
  }) => JSX.Element
  fetchInitialData?: () => (
    dispatch: Dispatch<AnyAction>
  ) => Promise<any> | undefined
}

export const routes: CustomRoute[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/users',
    component: UserList,
    fetchInitialData: () => fetchUserAsync()
  }
]

export const UnifiedRoutes = (): JSX.Element => {
  return (
    <Routes>
      {routes.map((route: CustomRoute) => {
        const { path, fetchInitialData, component: Comp } = route
        return (
          <Route
            key={path}
            path={path}
            element={<Comp fetchInitialData={fetchInitialData} />}
          />
        )
      })}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}