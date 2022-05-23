import React, {useState, useEffect} from 'react'
import axios from "axios";
const UserList = () => {
    const [users, setUser] = useState([]);
    useEffect(()=>{
        getUsers();
    }, []);

    const getUsers = async () =>{
        const response = await axios.get('http://127.0.0.1:8000/api/students');
        setUser(response.data);
    };
  return (
      <div className="columns mt-5 is-centered">
          <div className="column is-half ">
              <tabel className="table is-striped is-fullwidth">
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Nama</th>
                          <th>Gender</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {users.map((user, index) => (
                      <tr key={user.id}>
                          <td>{index +1}</td>
                          <td>{user.nama}</td>
                          <td>{user.gender}</td>
                          <td>
                              <button className='button is-small is-info'>Edit</button>
                              <button className='button is-small is-warning'>Delete</button>
                          </td>
                      </tr>

                      ))}
                  </tbody>
              </tabel>
          </div>
      </div>
  )
}

export default UserList