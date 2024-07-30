import React, { useEffect, useState } from "react";
import LayoutContainer from "../components/Layout";
import ModalEdit from "../components/Modal";
import { FaSearch } from "react-icons/fa";
import { Button, Modal, Pagination, Spin, Radio } from "antd";
import { MdEdit, MdDeleteForever, MdCreditScore } from "react-icons/md";
import { checkAuth } from "@/auth/common";
import axios from "axios";
import { ModalApprove } from "@/components/common";

export async function getServerSideProps({ req }) {
  return await checkAuth(req, ["super admin", "admin"]);
}

export default function UserManagement(props) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [approve, setApprove] = useState({ id: null, status: "" });
  const [isModal, setIsModal] = useState(false);
  let defaultPageSize = 10;

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `/api/user?query=${searchTerm}&skip=${
            (currentPage - 1) * defaultPageSize
          }`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${props.user.token}`,
            },
          }
        );

        const mapUser = response.data.results.map((user) => ({
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email || "-",
          phone: user.phone || "-",
          approveBy: user?.approveBy,
          status: user?.verify?.status,
          approveName: user?.approveBy
            ? user?.approveByUser?.firstName +
              " " +
              user?.approveByUser?.lastName
            : "-",
        }));
        setUsers({ data: mapUser, total: response.data.total });
        setLoading(false);
      } catch (error) {
        setUsers([]);
        setLoading(false);
      }
    };
    fetchUsers();
  }, [searchTerm, currentPage]);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleUpdate = async (updatedUser) => {
    try {
      const response = await axios.put(
        `/api/user/${updatedUser.id}`,
        updatedUser,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${props.user.token}`,
          },
        }
      );
      if (response.status === 200) {
        setUsers((prevUsers) => ({
          ...prevUsers,
          data: prevUsers.data.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
          ),
        }));
      }
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`/api/user/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${props.user.token}`,
        },
      });
      if (response.status === 200) {
        setUsers((prevUsers) => ({
          ...prevUsers,
          data: prevUsers.data.filter((user) => user.id !== userId),
          total: prevUsers.total - 1,
        }));
      }
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const approveUser = async () => {
    try {
      const response = await axios.put(
        `/api/user/approve`,
        {
          id: approve?.id,
          status: approve?.status === "yes" ? true : false,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${props.user.token}`,
          },
        }
      );
      if (response?.status === 200) {
        _onResetApprove();
        fetchUsers();
      }
    } catch (err) {}
  };
  const _onResetApprove = () => {
    setIsModal(false);
    setApprove({ id: null, status: false });
  };
  return (
    <LayoutContainer user={props?.user}>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            User Management
          </h2>
          <div className="mb-4">
            <div className="relative w-2/5">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 pl-10 border rounded focus:outline-none focus:border-[#6e59e7] focus:ring-[#806aff] block focus:ring-1"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-500" />
            </div>
          </div>
          {loading ? (
            <div className="w-full flex justify-center h-[208px]">
              <Spin size="large" className="my-auto" />
            </div>
          ) : (
            <>
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr className="bg-[#e6e1ff]">
                      <th className="border p-2">First Name</th>
                      <th className="border p-2">Last Name</th>
                      <th className="border p-2">Email</th>
                      <th className="border p-2">Phone number</th>
                      <th className="border p-2">สถานะ</th>
                      <th className="border p-2">ชื่อผู้อนุมัติ/ไม่อนุมัติ</th>
                      <th className="border p-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.data?.map((user) => (
                      <tr key={user.id}>
                        <td className="border p-2">{user.firstName}</td>
                        <td className="border p-2">{user.lastName}</td>
                        <td className="border p-2">{user.email}</td>
                        <td className="border p-2">{user.phone}</td>
                        <td className="border p-2">
                          {!user?.approveBy && !user.status
                            ? "รออนุมัติ"
                            : user?.approveBy && user.status
                            ? "อนุมัติ"
                            : user?.approveBy && !user.status
                            ? "ไม่อนุมัติ"
                            : "Unknown"}
                        </td>
                        <td className="border p-2">
                          {user.approveName || "-"}
                        </td>
                        <td className="border p-2">
                          <div className="flex justify-center space-x-2">
                            {!user?.approveBy && (
                              <Button
                                onClick={() => {
                                  setApprove({ id: user.id, status: false });
                                  setIsModal(true);
                                  // Modal.confirm({
                                  //   title:
                                  //     "Are you sure you want to approve this user?",
                                  //   onOk: () => setApprove({id: user.id, status: false}),
                                  //   centered: true,
                                  // })
                                }}
                                className="bg-[#e6e1ff] px-3 py-2 rounded-sm hover:bg-[#cfc7ff]"
                              >
                                <MdCreditScore className="fill-[#6e59e7]" />
                              </Button>
                            )}
                            <Button
                              onClick={() => handleEdit(user)}
                              className="bg-[#e6e1ff] px-3 py-2 rounded-sm hover:bg-[#cfc7ff]"
                            >
                              <MdEdit className="fill-[#6e59e7]" />
                            </Button>
                            <Button
                              onClick={() => {
                                Modal.confirm({
                                  title:
                                    "Are you sure you want to delete this user?",
                                  onOk: () => handleDelete(user.id),
                                  centered: true,
                                });
                              }}
                              className="bg-[#ffdada] px-3 py-2 rounded-sm hover:bg-white"
                            >
                              <MdDeleteForever className="fill-[#fc4a4a]" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-[8px]">
                <Pagination
                  align="end"
                  current={currentPage}
                  total={users.total}
                  defaultPageSize={defaultPageSize}
                  onChange={(e) => setCurrentPage(e)}
                />
              </div>
            </>
          )}

          {isModalOpen && selectedUser && (
            <ModalEdit
              user={selectedUser}
              onClose={() => setIsModalOpen(false)}
              onUpdate={handleUpdate}
            />
          )}
          <ModalApprove
            title="อนุมัติ User"
            isModal={isModal}
            data={approve}
            onSave={approveUser}
            onCancel={_onResetApprove}
            onChange={setApprove}
          />
        </div>
      </section>
    </LayoutContainer>
  );
}
