import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Dropdown, message } from "antd";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e) => {
    if (e.key === "3") {
      localStorage.removeItem("user");
      navigate("/login");
      message.success("Đăng xuất thành công");
    }
  };

  const items = [
    {
      label: "Thông tin cá nhân",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Đơn hàng của tôi",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "Đăng xuất",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
  ];

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "COLLECTION", path: "/collection" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="bg-white text-black px-app py-4 shadow-sm flex justify-between items-center sticky top-0 z-50 ">
      {/* Logo */}
      <div className="text-3xl font-extrabold tracking-widest text-gray-900 ml-25">
        <Link to="/" className="flex items-center gap-1">
          FOR<span className="text-gray-900">EVER</span>
          <span className="text-pink-500 text-2xl">.</span>
        </Link>
      </div>


      <nav>
        <ul className="flex space-x-8 text-sm font-semibold tracking-wide mr-20">
          {navItems.map((item) => (
            <li key={item.path} className="relative">
              <Link
                to={item.path}
                className={`${location.pathname === item.path
                  ? "text-gray-900 underline underline-offset-4"
                  : "text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <SearchOutlined className="text-lg text-gray-700 hover:text-black cursor-pointer" />

        <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={["click"]}>
          <UserOutlined className="text-lg text-gray-700 hover:text-black cursor-pointer" />
        </Dropdown>

        <Badge count={0} size="small" offset={[-2, 5]}>
          <ShoppingCartOutlined className="text-lg text-gray-700 hover:text-black cursor-pointer" />
        </Badge>
      </div>
    </header>
  );
}
