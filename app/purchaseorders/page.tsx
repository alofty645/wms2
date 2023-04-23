"use client";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "@/components/Header";
import Button from "@/components/UI/Button";
import Gridsettings from "@/util/Grids/Gridsettings";
import { POcolumns } from "@/util/Grids/Columns";
import rows from "@/util/Grids/testrows";
import { useEffect, useState } from "react";
import supabase from "@/util/Supabase/createclient";

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
        <Button title={"+ New Purchase Order"}></Button>
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
