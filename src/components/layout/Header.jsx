import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Dropdown, message } from "antd";
import clsx from "clsx";

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
    <header className="">
      <div className="max-w-425 mx-auto flex items-center justify-between h-20 px-app">
        {/* Logo */}
        <div className="flex-1 flex items-center">
          <Link
            to="/"
            className="text-4xl font-extrabold tracking-widest text-gray-900 flex items-center gap-1"
          >
            FOR<span className="text-gray-900">EVER</span>
            <span className="text-pink-500 text-3xl">.</span>
          </Link>
        </div>
        {/* Menu */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-10 text-base font-semibold tracking-wide">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={clsx(
                    "transition-colors duration-200",
                    location.pathname === item.path
                      ? "text-black underline underline-offset-8"
                      : "text-gray-700 hover:text-black"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Icons */}
        <div className="flex-1 flex justify-end items-center space-x-6">
          <SearchOutlined className="text-xl text-gray-700 hover:text-black cursor-pointer" />
          <Dropdown
            menu={{ items, onClick: handleMenuClick }}
            trigger={["click"]}
          >
            <UserOutlined className="text-xl text-gray-700 hover:text-black cursor-pointer" />
          </Dropdown>
          <Badge count={0} size="small" offset={[-2, 5]}>
            <Link to="/cart" className="!text-gray-700 hover:!text-black">
              <ShoppingCartOutlined className="text-xl cursor-pointer" />
            </Link>
          </Badge>
        </div>
      </div>
    </header>
  );
}
