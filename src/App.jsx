import './App.scss'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { AdminPage } from './page/AdminPage';
import { CustomerPage } from './page/CustomerPage';

function App() {

  const { currentUser, checkAdmin } = useContext(AuthContext);

  return (
    <>
      {(currentUser && checkAdmin()) ? 
        <AdminPage />
        :
        <CustomerPage />
      }
    </>
  )
}

export default App
