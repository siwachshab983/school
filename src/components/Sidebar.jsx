import { NavLink } from "react-router-dom";
import React from "react";
const Sidebar = () => {
    const linkClass = ({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-600 ${isActive ? "bg-blue-500 text-white" : "text-white"
        }`;

    return (
        <div className="w-64 h-screen sticky bottom-0 bg-[#0A1D56] text-white flex flex-col justify-between p-4">
            <div>
                <div className="text-center mb-8">
                    <div className="bg-white p-2 rounded-full w-16 h-16 mx-auto">
                        {/* <img src="/logo.png" alt="Logo" /> */}
                        <h2>logo</h2>
                    </div>
                    <p className="mt-2 font-medium">Udemy Inter. school</p>
                </div>

                <nav className="space-y-2">
                    <NavLink to="/dashboard/teachers" className={linkClass}>
                        👨‍🏫 Teachers
                    </NavLink>
                    <NavLink to="/dashboard/students-classes" className={linkClass}>
                        🎓 Students
                    </NavLink>
                    <NavLink to="/dashboard/notices" className={linkClass}>
                        🧾 Notices
                    </NavLink>
                    <NavLink to="/dashboard/blog" className={linkClass}>
                        ⚙️ Blogs
                    </NavLink>
                    <NavLink to="/dashboard/uplode-image" className={linkClass}>
                        📝 Gallery
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
