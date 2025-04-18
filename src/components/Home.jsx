import React from "react";
import { useSearchParams } from "react-router-dom";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Cards from "./Cards";
import SearchResults from "./SearchResults";

const Home = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")?.trim() || "";

  return (
    <>
      {search && <SearchResults searchTerm={search} />}
      <Section1 />
      <Cards />
      <Section2 />
    </>
  );
};

export default Home;
