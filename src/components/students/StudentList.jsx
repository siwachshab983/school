import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://script.google.com/macros/s/AKfycbyuI50cs1DKBTJ7dgDv8I4H1EtkgtINS5yohAa2ynUhtTFdkfr2HxjBLPwteG1EEB_uHg/exec")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching student data", err);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Student List</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Class</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="text-center">
              <td className="border p-2">{item.Name}</td>
              <td className="border p-2">{item.Class}</td>
              <td className="border p-2">{item.Email}</td>
              <td className="border p-2">{item.Gender}</td>
              <td className="border p-2">
                <img src={item.Avatar} alt="avatar" className="w-8 h-8 rounded-full mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
