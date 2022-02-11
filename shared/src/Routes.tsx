import React, { Suspense } from "react";
import { Routes, Route } from 'react-router-dom'
import Home from '../../client/src/components/Home'
import { UserList } from '../../client/src/components/UserList'
import { Loading } from '../../client/src/components/Loading'

// const HomePage = React.lazy(() => import('../../client/src/components/Home')); // Lazy-loaded

// ReactDOMServer does not yet support Suspense (and lazy)
// export default () => {
//     return (
//       <Suspense fallback={<Loading />}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/hi" element={<div>Hi</div>} />
//         </Routes>
//       </Suspense>
//     )
// }

export default () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList/>} />
      </Routes>
    )
}