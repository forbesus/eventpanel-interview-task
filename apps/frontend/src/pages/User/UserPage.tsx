import React, { useEffect, useState } from 'react';
import { UserRoleType, UserType } from '../../types/userTypes';
import { CreateUserType } from '../../types/apiTypes';
import { useUserContext } from '../../contexts/UserContext';
import { fetchUserData, fetchUserRole, submitUserData } from '../../services/userService';

const UserPage: React.FC = () => {
  const { userList, setUserList } = useUserContext();
  const [userRoles, setUserRoles] = useState<UserRoleType[]>([]);
  const [userData, setUserData] = useState<UserType | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUserData();
      setUserList(data);
    };
    console.log("testsdfasdf")

    const getUserRoles = async () => {
      const data = await fetchUserRole();
      setUserRoles(data);
    };

    getUserRoles();
    getUsers();
  }, [setUserList]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userData) {
      const res = await submitUserData({ ...userData, role: { connect: { ...userData.role } } } as CreateUserType);
      setUserList([...userList, res])
      alert('User submitted successfully');
      setUserData(null);
    }
  };

  return (
    <div>
      <table>
        {userList.map((user: UserType) => (
          <tr key={user.id}>
            <td>{user.name}</td>
          </tr>
        ))}
      </table>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userData?.name || ''}
          required
          onChange={(e) => setUserData({ ...userData, name: e.target.value || '' } as UserType)}
          placeholder="Name"
        />
        <input
          type="number"
          value={userData?.age || ''}
          required
          onChange={(e) => setUserData({ ...userData, age: Number(e.target.value) || 0 } as UserType)}
          placeholder="Age"
        />
        <input
          type="email"
          value={userData?.email || ''}
          required
          onChange={(e) => setUserData({ ...userData, email: e.target.value || '' } as UserType)}
          placeholder="Email"
        />
        <select
          value={userData?.role?.id || ''}
          required
          onChange={(e) => {
            const selectedRole = userRoles.find(role => role.id === parseInt(e.target.value));
            setUserData({ ...userData, role: selectedRole } as UserType);
          }}
        >
          <option value="">Select Role</option>
          {userRoles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserPage;
