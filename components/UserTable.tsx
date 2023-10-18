// ./components/UserTable.tsx
import React, { useState } from 'react';

type User = {
  name: string;
  email: string;
  phone: string;
};

type Props = {
  users: User[];
};

export const UserTable: React.FC<Props> = ({ users }) => {
  const [filter, setFilter] = useState('');
  const [newUser, setNewUser] = useState<User>({ name: '', email: '', phone: '' });

  const filteredUsers = users.filter(user => user.name.includes(filter));

  const handleAddUser = () => {
    users.push(newUser);
    setNewUser({ name: '', email: '', phone: '' });
  };

  return (
    <div>
      <input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter by name" />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
          <tr>
            <td><input type="text" value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} /></td>
            <td><input type="text" value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} /></td>
            <td><input type="text" value={newUser.phone} onChange={e => setNewUser({ ...newUser, phone: e.target.value })} /></td>
            <td><button onClick={handleAddUser}>Add</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};