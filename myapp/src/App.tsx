import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {UserItem} from "./components/useritem";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchUsers() {
    setLoading(true)
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
    setLoading(false)
  }

  useEffect(()=> {
    fetchUsers()
  }, [])

  return (
    <div className='main_content'>
        <div className='sort'>
          <p className='sort__title'>Сортировка</p>
          <button className='sort__title__btn'>по городу</button>
          <button className='sort__title__btn'>по компании</button>
        </div>
        {loading && <p>
          Loading...
        </p>}
        {!loading &&<UserItem users={users} title={"Список пользователей"}/>}
    </div>
  );
}

export default App;