// ./pages/UserTableExample.tsx
import { UserTable } from '../components/UserTable';

const users = [
  { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
  { name: 'Jane Doe', email: 'jane.doe@example.com', phone: '098-765-4321' },
];

export default function UserTableExample() {
  return <UserTable users={users} />;
}