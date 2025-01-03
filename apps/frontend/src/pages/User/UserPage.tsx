import React, { useEffect, useState } from 'react';
import { UserRoleType, UserType } from '../../types/userTypes';
import { CreateUserType } from '../../types/apiTypes';
import { getRoleNameById } from '../../utils/users.utils';
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      {/* User List Table */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Age</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Role</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user: UserType) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-gray-700 text-sm">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700 text-sm">{user.age}</td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700 text-sm">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700 text-sm">{getRoleNameById(userRoles, user?.roleId)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form */}
      <div className="w-full max-w-lg mt-8 p-6 bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={userData?.name || ''}
              required
              onChange={(e) => setUserData({ ...userData, name: e.target.value || '' } as UserType)}
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input
              type="number"
              value={userData?.age || ''}
              required
              onChange={(e) => setUserData({ ...userData, age: Number(e.target.value) || 0 } as UserType)}
              placeholder="Age"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={userData?.email || ''}
              required
              onChange={(e) => setUserData({ ...userData, email: e.target.value || '' } as UserType)}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              value={userData?.role?.id || ''}
              required
              onChange={(e) => {
                const selectedRole = userRoles.find((role) => role.id === parseInt(e.target.value));
                setUserData({ ...userData, role: selectedRole } as UserType);
              }}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select Role</option>
              {userRoles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

  );
};

export default UserPage;
