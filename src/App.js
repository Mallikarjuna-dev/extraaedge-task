import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-center text-2xl font-bold mb-4">User Profiles</h1>
      <UserList />
    </div>
  );
}

export default App;