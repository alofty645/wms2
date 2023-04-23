"use client";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "@/components/Header";
import Gridsettings from "@/util/Grids/Gridsettings";
import { POcolumns } from "@/util/Grids/Columns";
import { useEffect, useState } from "react";
import supabase from "@/util/Supabase/createclient";
import Styledlink from "@/components/UI/styledlink";

const Purchaseorders = () => {
  const [purchaseorders, setPO] = useState([]);

  async function getPO() {
    let { data: PO } = await supabase.from("purchaseorders").select("*");
    setPO(PO);
  }

  useEffect(() => {
    getPO();
  }, []);
  return (
    <div
      className="
         m-4  h-3/4 rounded-3xl"
    >
      <Header title={"Purchase Orders"}></Header>
      <div className="my-3">
        <Styledlink id="3" href="/new/po" title={"+ Purchase"}></Styledlink>
      </div>
      <Box
        height="80vh"
        sx={{
          ...Gridsettings,
        }}
      >
        <DataGrid
          checkboxSelection
          rows={purchaseorders}
          columns={POcolumns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
};

export default Purchaseorders;
