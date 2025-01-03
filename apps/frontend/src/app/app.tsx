import UserPage from '../pages/User/UserPage';

import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <UserPage />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
