import React, { useState, useEffect, useMemo } from "react";
import ProductItem from "../components/ProductItem";
import axios from "axios";
import { Checkbox, Input } from "antd";

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("relevance");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Fetch data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://687ecf16efe65e520087a4c2.mockapi.io/product"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Handle category change
  const handleCategoryChange = ({ value, checked }) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== value));
    }
  };

  // Unique categories
  const uniqueCategories = [...new Set(products.map((p) => p.category))];

  // Filter and sort
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }

    if (minPrice !== "") {
      result = result.filter((item) => item.price >= parseFloat(minPrice));
    }
    if (maxPrice !== "") {
      result = result.filter((item) => item.price <= parseFloat(maxPrice));
    }

    if (sortOption === "priceLow") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHigh") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedCategories, minPrice, maxPrice, sortOption]);

  return (
    <div className="max-w-430 mx-auto px-app py-16">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-light text-gray-600 mb-4 md:mb-0">
          ALL
          <span className="font-bold text-gray-800 ml-2">COLLECTIONS</span>
          <span className="inline-block w-16 h-[2px] bg-gray-700 ml-3 align-middle"></span>
        </h2>
        <select
          className="border py-1 rounded text-sm"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="relevance">Sort by: Relevance</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4 w-full border rounded-lg p-5 shadow-sm bg-white top-20 h-fit">
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-3">CATEGORIES</h2>
            <div className="space-y-2">
              {uniqueCategories.map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedCategories.includes(cat)}
                    onChange={(e) =>
                      handleCategoryChange({
                        value: cat,
                        checked: e.target.checked,
                      })
                    }
                  >
                    <span className="text-sm text-gray-700">{cat}</span>
                  </Checkbox>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-3">PRICE</h2>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Min"
                className="w-full border rounded px-2 py-1 text-sm"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <span>-</span>
              <Input
                type="number"
                placeholder="Max"
                className="w-full border rounded px-2 py-1 text-sm"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </aside>

        <main className="md:w-3/4 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
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
