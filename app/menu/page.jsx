"use client";
import React, { useState } from 'react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('bestSelling');

  const coffeeItems = [
    { name: "Espresso", category: "Espresso", price: 400, imgSrc: "/cafe.jpg" },
    { name: "Latte", category: "Espresso", price: 650, imgSrc: "/cafe.jpg" },
    { name: "Mocha", category: "Espresso", price: 750, imgSrc: "/cafe.jpg" },
    { name: "Coffee Frappe", category: "Frappuccino", price: 800, imgSrc: "/cafe.jpg" },
    { name: "Mocha Frappe", category: "Frappuccino", price: 850, imgSrc: "/cafe.jpg" },
    { name: "Caramel Frappe", category: "Frappuccino", price: 900, imgSrc: "/cafe.jpg" },
    { name: "Ice Spiced Coffee", category: "Cold Espresso", price: 900, imgSrc: "/cafe.jpg" },
    { name: "Iced Rose Latte", category: "Cold Espresso", price: 850, imgSrc: "/cafe.jpg"},
    { name: "Coffee Daalgona", category: "Cold Espresso", price: 700, imgSrc: "/cafe.jpg" },
    { name: "Hot Chocolate", category: "Fancy Milk Base", price: 750, imgSrc: "/cafe.jpg" },
    { name: "Milo", category: "Fancy Milk Base", price: 500, imgSrc:"/cafe.jpg"},
    { name: "Milo Godzilla", category: "Fancy Milk Base", price: 850, imgSrc:"/cafe.jpg" },
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredItems = coffeeItems.filter(item => selectedCategory === 'All' || item.category === selectedCategory);

  const sortedItems = filteredItems.sort((a, b) => {
    switch (sortOption) {
      case 'priceHighToLow':
        return b.price - a.price;
      case 'priceLowToHigh':
        return a.price - b.price;
      case 'bestSelling':
      default:
        return 0; // Default or best-selling sorting logic can be adjusted as needed
    }
  });

  return (
    <div className="bg-black text-white">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold sm:text-3xl">Product Collection</h2>
            <p className="mt-4 max-w-md">
              Explore our selection of coffee products, from classic espressos to indulgent frappes and more.
            </p>
          </header>

          <div className="mt-8 sm:flex sm:items-center sm:justify-between">
            <div className="flex gap-4">
              {/* Filters */}
              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-white transition hover:border-gray-600">
                    <span className="text-sm font-medium">Coffee Types</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 transition group-open:-rotate-180"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>

                  <div className="absolute z-50 mt-2 w-64 rounded border border-gray-200 bg-black">
                    <div className="p-4">
                      <ul className="space-y-2">
                        {["All", "Espresso", "Frappuccino", "Cold Espresso", "Fancy Milk Base"].map((type) => (
                          <li key={type}>
                            <label className="inline-flex items-center gap-2">
                              <input
                                type="radio"
                                name="category"
                                value={type}
                                checked={selectedCategory === type}
                                onChange={handleCategoryChange}
                                className="h-4 w-4 rounded border-gray-300"
                              />
                              <span className="text-sm font-medium">{type}</span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>

              {/* Sorting */}
              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-white transition hover:border-gray-600">
                    <span className="text-sm font-medium">Sort By</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 transition group-open:-rotate-180"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>

                  <div className="absolute z-50 mt-2 w-64 rounded border border-black bg-black">
                    <div className="p-4">
                      <select
                        value={sortOption}
                        onChange={handleSortChange}
                        className="w-full rounded border-black text-white bg-black"
                      >
                        <option value="bestSelling">The Best Selling</option>
                        <option value="priceHighToLow">Price High to Low</option>
                        <option value="priceLowToHigh">Price Low to High</option>
                      </select>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {sortedItems.map((item) => (
              <li className='' key={item.name}>
                <a href="#" className="group block overflow-hidden">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="relative bg-accent pt-3">
                    <h3 className="text-xl text-white group-hover:underline group-hover:underline-offset-4">
                      {item.name}
                    </h3>
                    <p className="mt-2">
                      <span className="text-black">{`₨ ${item.price}`}</span>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Menu;
