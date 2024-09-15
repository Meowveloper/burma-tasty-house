import { Outlet } from 'react-router-dom'
import AdminNavBar from '../components/admin/general/NavBar'

export default function AdminLayout() {
  return (
    <div>
        <AdminNavBar></AdminNavBar>
        <main>
            <Outlet/> 
        </main>
    </div>
  );
}
