import React, { useEffect, useState } from "react";

const SearchResults = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetch("/data/products.json")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    } else {
      setProducts([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm && products.length > 0) {
      const filteredData = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltered(filteredData);
    } else {
      setFiltered([]);
    }
  }, [searchTerm, products]);

  if (!searchTerm) {
    return <p className="p-4 text-gray-500">Введите поисковой запрос</p>;
  }

  if (filtered.length === 0) {
    return <p className="p-4 text-gray-500">Ничего не найдено</p>;
  }

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-4 text-center">Результаты поиска: {searchTerm}</h2>
      <div className="flex flex-wrap justify-around gap-4">
        {filtered.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.name}
              className="h-32 w-full object-contain mb-2"
            />
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.manufacturer}</p>
            <p>{product.price}₸</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
