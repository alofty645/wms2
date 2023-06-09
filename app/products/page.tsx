"use client";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "@/components/Header";
import Gridsettings from "@/util/Grids/Gridsettings";
import { Productcolumns } from "@/util/Grids/Columns";
import { useEffect, useState } from "react";
import supabase from "@/util/Supabase/createclient";
import Styledlink from "@/components/UI/styledlink";

const Products = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let { data: product } = await supabase.from("products").select("*");
    setProducts(product);
    console.log(product);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      className="
         m-4  h-3/4 rounded-3xl"
    >
      <Header title={"Products"}></Header>
      <div className="my-3">
        <Styledlink id="2" href="/new/product" title={"+ Product"}></Styledlink>
      </div>
      <Box
        height="80vh"
        sx={{
          ...Gridsettings,
        }}
      >
        <DataGrid
          checkboxSelection
          rows={products}
          columns={Productcolumns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
};

export default Products;
