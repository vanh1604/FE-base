import { Link } from "react-router-dom";
import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
export default function Header() {
  return (
    <header className="bg-white text-black flex border-b-2 border-gray-200 p-4 sticky top-0 shadow-md z-50 justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">FOREVER.</Link>
      </div>

      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/collection"
              className="text-gray-700 hover:text-blue-600"
            >
              Collection
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <SearchOutlined className="text-xl text-gray-700 cursor-pointer hover:text-blue-600" />

        <Link to="/login">
          <UserOutlined className="text-xl text-gray-700 cursor-pointer hover:text-blue-600" />
        </Link>
        <ShoppingCartOutlined className="text-xl text-gray-700 cursor-pointer hover:text-blue-600" />
      </div>
    </header>
  );
}
