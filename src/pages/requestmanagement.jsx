import React, { useEffect, useState } from "react";
import LayoutContainer from "../components/Layout";
import { Pagination, Spin, Button } from "antd";
import { checkAuth } from "@/auth/common";
import axios from "axios";
import { ModalApprove } from "@/components/common";
import { MdCreditScore } from "react-icons/md";

export async function getServerSideProps({ req }) {
  return await checkAuth(req, ["super admin", "admin"]);
}

export default function RequestManagement(props) {
  const [requests, setRequests] = useState([]);
  const [requestTypes, setRequestTypes] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [approve, setApprove] = useState({ id: null, status: "" });
  const [isModal, setIsModal] = useState(false);
  let defaultPageSize = 10;

  useEffect(() => {
    const fetchRequestTypes = async () => {
      try {
        const response = await axios.get("/api/type-form", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${props.user.token}`,
          },
        });
        const typesMap = {};
        response.data.results.forEach((type) => {
          typesMap[type._id] = type.name;
        });
        setRequestTypes(typesMap);
      } catch (error) {
        console.error("Error fetching request types:", error);
      }
    };

    fetchRequestTypes();
  }, [props.user.token]);

  useEffect(() => {
    setLoading(true);
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          `/api/form?skip=${
            (currentPage - 1) * defaultPageSize
          }&limit=${defaultPageSize}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${props.user.token}`,
            },
          }
        );
        const mapRequests = response.data.results.map((request) => ({
          id: request._id,
          title: request.title,
          type: requestTypes[request.type],
          detail: request.detail,
          status:
            !request?.approveBy && !request.status
              ? "รออนุมัติ"
              : request?.approveBy && request.status
              ? "อนุมัติ"
              : request?.approveBy && !request.status
              ? "ไม่อนุมัติ"
              : "Unknown",
          approveBy: request?.approveBy,
          createdByUser: request?.createdByUser,
          approveByUser: request?.approveByUser,
          createdOn: new Date(request.createdOn).toLocaleString(),
          approveOn: request.approveOn
            ? new Date(request.approveOn).toLocaleString()
            : "-",
        }));
        setRequests({ data: mapRequests, total: response.data.total });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching requests:", error);
        setRequests([]);
        setLoading(false);
      }
    };
    fetchRequests();
  }, [currentPage, props.user.token, requestTypes]);

  const approveForm = async () => {
    try {
      const response = await axios.put(
        `/api/form/update`,
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
        fetchRequests();
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
            Request Management
          </h2>
          {loading ? (
            <div className="w-full flex justify-center h-[208px]">
              <Spin size="large" className="my-auto" />
            </div>
          ) : (
            <>
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        ชื่อเรื่อง
                      </th>
                      <th scope="col" className="py-3 px-6">
                        ประเภท
                      </th>
                      <th scope="col" className="py-3 px-6">
                        รายละเอียด
                      </th>
                      <th scope="col" className="py-3 px-6">
                        วันที่สร้าง
                      </th>
                      <th scope="col" className="py-3 px-6">
                        ผู้ร้องขอ
                      </th>
                      <th scope="col" className="py-3 px-6">
                        สถานะ
                      </th>
                      <th scope="col" className="py-3 px-6">
                        วันที่อนุมัติ
                      </th>
                      <th scope="col" className="py-3 px-6">
                        ชื่อผู้อนุมัติ/ไม่อนุมัติ
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests?.data?.map((request) => (
                      <tr key={request.id} className="bg-white border-b">
                        <td className="py-4 px-6">{request.title}</td>
                        <td className="py-4 px-6">{request.type}</td>
                        <td className="py-4 px-6">{request.detail}</td>
                        <td className="py-4 px-6">{request.createdOn}</td>
                        <td className="py-4 px-6">
                          {request?.createdByUser?.firstName +
                            " " +
                            request?.createdByUser?.lastName}
                        </td>
                        <td className="py-4 px-6">{request.status}</td>
                        <td className="py-4 px-6">{request.approveOn}</td>
                        <td className="py-4 px-6">
                          {request?.approveBy
                            ? request?.approveByUser?.firstName +
                              " " +
                              request?.approveByUser?.lastName
                            : "-"}
                        </td>
                        <td className="border p-2">
                          <div className="flex justify-center space-x-2">
                            {!request?.approveBy && (
                              <Button
                                onClick={() => {
                                  setApprove({ id: request.id, status: false });
                                  setIsModal(true);
                                }}
                                className="bg-[#e6e1ff] px-3 py-2 rounded-sm hover:bg-[#cfc7ff]"
                              >
                                <MdCreditScore className="fill-[#6e59e7]" />
                              </Button>
                            )}
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
                  total={requests.total}
                  defaultPageSize={defaultPageSize}
                  onChange={(page) => setCurrentPage(page)}
                  className=""
                />
              </div>
            </>
          )}
        </div>
      </section>
      <ModalApprove
        title="อนุมัติ Form"
        isModal={isModal}
        data={approve}
        onSave={approveForm}
        onCancel={_onResetApprove}
        onChange={setApprove}
      />
    </LayoutContainer>
  );
}
