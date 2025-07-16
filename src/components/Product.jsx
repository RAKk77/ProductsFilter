import React, { useState } from 'react';
import Information from "./Information";

const products = [
  {
    id: 1,
    name: "Laptop",
    image: "https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/LpH9Xh3lcq3rhVDOAeAITY6qj4H0qSr948fitlDd.png ",
    price: 999.99,
  },
  {
    id: 2,
    name: "Smartphone",
    image: "https://cdn.shopify.com/s/files/1/0482/3957/5208/files/iphone_17_pro_max_95acfd07-44a1-4cf8-90a8-e784f309befb.jpg?v=1747299256 ",
    price: 699.99,
  },
  {
    id: 3,
    name: "Headphones",
    image: "https://www.apple.com/newsroom/images/product/airpods/standard/apple_airpods-max_hero_12082020_big.jpg.large.jpg",
    price: 149.99,
  },
  {
    id: 4,
    name: "Tablet",
    image: "https://images.samsung.com/is/image/samsung/assets/us/tablets/04092025/GalaxyTablets-FT12-TabS10-D-V2.jpg?$570_N_JPG$ ",
    price: 299.99,
  },
  {
    id: 5,
    name: "Smartwatch",
    image: "https://i5.walmartimages.com/seo/Open-Box-Apple-Watch-Series-5-44mm-GPS-Cellular-Aluminum-Space-Gray-Black-Sport-Band-Smartwatch_03177d49-7844-4051-a092-4fe230a60a7a.1ba0e866526baaede396ca8f7dbd178e.jpeg",
    price: 199.99,
  },
  {
    id: 6,
    name: "Camera",
    image: "https://i5.walmartimages.com/asr/f7837d96-46a9-4a93-b2ae-7aae9d4a34b7.ee7886a1edadebb5617039a832aef144.jpeg",
    price: 499.99,
  },
  {
    id: 7,
    name: "Monitor",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/studio-display-og-202203?wid=1200&hei=630&fmt=jpeg&qlt=90&.v=1645125507093 ",
    price: 249.99,
  },
  {
    id: 8,
    name: "Keyboard",
    image: "https://www.ione.com.kh/wp-content/uploads/2021/05/Apple-Wireless-Keyboard-USA-ione-cambodia.jpg",
    price: 89.99,
  },
  {
    id: 9,
    name: "Phone",
    image: "https://image-us.samsung.com/us/smartphones/galaxy-z-fold7/images/galaxy-z-fold7-features-durability-3.jpg?imbypass=true",
    price: 999.99,
  },
];

const Product = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000);

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price <= maxPrice
    );
  });

  return (
    <div className="p-6 bg-slate-700">
      {/* 🔍 Search Bar */}
      <div className='z-30 w-[100%] m-auto sticky top-2 bg-slate-50  shadow-2xl border-2 border-slate-300 rounded-4xl px-7 py-2'>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by product name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border-2 border-slate-300 shadow-2xl rounded-4xl"
            />
          </div>
          {/* 💵 Price Range Slider */}
          <div className="mb-6">
            <label className="block mb-2">
              Max Price: ${maxPrice}
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>
      </div>

      {/* 📦 Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className='text-center mt-[2rem]'>No products match your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((pro) => (
            <Information key={pro.id} {...pro} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
