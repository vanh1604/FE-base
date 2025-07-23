import React, { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem";
import axios from "axios";
const Collection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://687ecf16efe65e520087a4c2.mockapi.io/product")
      .then((res) => {
        console.log("Fetched data:", res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== value));
    }
  };


  const uniqueCategories = [...new Set(products.map((p) => p.category))];


  const filteredProducts = products.filter((item) => {
    const matchSearch =
      typeof item.title === "string" &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCategory =
      selectedCategories.length === 0 || selectedCategories.includes(item.category);

    return matchSearch && matchCategory;
  });

  return (
    <div className="px-6 py-8">
      <div className="text-2xl font-bold text-center mb-8">ALL COLLECTION</div>

      <div className="text-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-8 w-full max-w-md mx-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* FILTER COLUMN */}
        <aside className="md:w-1/4 w-full border rounded-lg p-5 shadow-md bg-white sticky top-20 h-fit">
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-3">Categories</h2>
            <div className="space-y-2">
              {uniqueCategories.map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={cat}
                    value={cat}
                    checked={selectedCategories.includes(cat)}
                    onChange={handleCategoryChange}
                    className="accent-pink-500"
                  />
                  <label htmlFor={cat} className="text-sm text-gray-700">
                    {cat}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price (chưa xử lý lọc, chỉ UI) */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-3">Price</h2>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full border rounded px-2 py-1 text-sm"
                disabled
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full border rounded px-2 py-1 text-sm"
                disabled
              />
            </div>
          </div>
        </aside>

        {/* PRODUCTS */}
        <main className="md:w-3/4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Collection;
