import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Home, Edit3, Hash, Image, Scissors, FileText, Eraser, Users } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
const navItems=[
    {to:'/ai',label: 'Dashboard',Icon:Home},
    {to:'/ai/write-article',label: 'Write Article',Icon:Edit3},
    {to:'/ai/blog-titles',label: 'Blog Titles',Icon:Hash},
    {to:'/ai/generate-images',label: 'Generate Images',Icon:Image},
    {to:'/ai/remove-background',label: 'Remove Background',Icon:Eraser},
    {to:'/ai/remove-object',label: 'Remove Object',Icon:Scissors},
    {to:'/ai/review-resume',label: 'Review Resume',Icon:FileText},
    {to:'/ai/community',label: 'Community',Icon:Users},
]
const Sidebar = ({ sidebar, setSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route
  const { user } = useUser();

  const menuItems = [
    { label: "Dashboard", icon: <Home size={18} />, path: "/" },
    { label: "Write Article", icon: <Edit3 size={18} />, path: "/write-article" },
    { label: "Blog Titles", icon: <Hash size={18} />, path: "/blog-titles" },
    { label: "Generate Images", icon: <Image size={18} />, path: "/generate-images" },
    { label: "Remove Background", icon: <Eraser size={18} />, path: "/remove-background" },
    { label: "Remove Object", icon: <Scissors size={18} />, path: "/remove-object" },
    { label: "Review Resume", icon: <FileText size={18} />, path: "/review-resume" },
  ];

  return (
    <div
      className={`w-64 bg-white border-r border-gray-200 flex flex-col justify-start items-center
      max-sm:absolute top-14 bottom-0
      ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"}
      transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col items-center my-8">
        <img
          src={user?.imageUrl}
          alt="User"
          className="w-14 h-14 rounded-full"
        />
        <h2 className="mt-3 text-gray-800 font-medium">{user?.fullName}</h2>
      </div>

      <div className="w-full px-4">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path; // Check if current path matches
          return (
            <div
              key={index}
              onClick={() => {
                navigate(item.path);
                setSidebar(false);
              }}
              className={`flex items-center gap-3 p-3 rounded-lg mb-2 text-sm cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
