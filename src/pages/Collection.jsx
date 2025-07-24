import React, { useState, useEffect, useMemo } from "react";
import ProductItem from "../components/ProductItem";
import axios from "axios";
import { Checkbox, Input } from "antd";
const Collection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://687ecf16efe65e520087a4c2.mockapi.io/product")
        console.log("Fetched data:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);


  const handleCategoryChange = ({ value, checked }) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== value));
    }
  };

  const uniqueCategories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchSearch =
        typeof item.title === "string" &&
        item.title.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory =
        selectedCategories.length === 0 || selectedCategories.includes(item.category);

      return matchSearch && matchCategory;
    });
  }, [products, searchTerm, selectedCategories]);
  return (
    <div className="px-6 py-8">
      <div className="flex flex-col items-center justify-center my-8">
        <h2 className="text-4xl font-serif font-bold text-center mb-10 flex items-center justify-center gap-2">
          <span>COLLECTION</span>
          <span className="text-3xl">—</span>
        </h2>
        <div className="text-center mb-4">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-8 w-full max-w-md mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* FILTER COLUMN */}
        <aside className="md:w-1/4 w-full border rounded-lg p-5 shadow-md bg-white sticky top-20 h-fit">
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-3">Categories</h2>
            <div className="space-y-2">
              {uniqueCategories.map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedCategories.includes(cat)}
                    onChange={(e) => handleCategoryChange({ value: cat, checked: e.target.checked })}
                  >
                    <span className="text-sm text-gray-700">{cat}</span>
                  </Checkbox>
                </div>
              ))}
            </div>
          </div>

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
