"use client";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "@/components/Header";
import Gridsettings from "@/util/Grids/Gridsettings";
import { Salescolumns } from "@/util/Grids/Columns";
import { useEffect, useState } from "react";
import supabase from "@/util/Supabase/createclient";
import Styledlink from "@/components/UI/styledlink";

const Sales = () => {
  const [sales, setSales] = useState([]);

  async function getSales() {
    let { data: sale } = await supabase.from("sales").select("*");
    setSales(sale);
    console.log(sale);
  }

  useEffect(() => {
    getSales();
  }, []);
  return (
    <div
      className="
         m-4  h-3/4 rounded-3xl"
    >
      <Header title={"Sales"}></Header>
      <div className="my-3">
        <Styledlink id="1" href="/new/sale" title={"+ New Sale"}></Styledlink>
      </div>
      <Box
        height="80vh"
        sx={{
          ...Gridsettings,
        }}
      >
        <DataGrid
          checkboxSelection
          rows={sales}
          columns={Salescolumns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
};

export default Sales;
