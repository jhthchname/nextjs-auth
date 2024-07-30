import React, { useEffect, useState } from "react";
import LayoutContainer from "../components/Layout";
import { Pagination, Spin } from "antd";
import { checkAuth } from "@/auth/common";
import axios from "axios";

export async function getServerSideProps({ req }) {
  return await checkAuth(req);
}

export default function RequestManagement(props) {
  const [requests, setRequests] = useState([]);
  const [requestTypes, setRequestTypes] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
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
          `/api/form?query=${searchTerm}&skip=${
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
          status: request.status ? "อนุมัติแล้ว" : "รอการอนุมัติ",
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
  }, [searchTerm, currentPage, props.user.token, requestTypes]);

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
                        วันที่อนุมัติ
                      </th>
                      <th scope="col" className="py-3 px-6">
                        สถานะ
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
                        <td className="py-4 px-6">{request.approveOn}</td>
                        <td className="py-4 px-6">{request.status}</td>
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
    </LayoutContainer>
  );
}
