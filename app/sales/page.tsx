"use client";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "@/components/Header";
import Button from "@/components/UI/Button";
import Gridsettings from "@/util/Grids/Gridsettings";
import { Salescolumns } from "@/util/Grids/Columns";
import rows from "@/util/Grids/testrows";

const Sales = () => {
  return (
    <div
      className="
         m-4  h-3/4 rounded-3xl"
    >
      <Header title={"Sales"}></Header>
      <div className="my-3">
        <Button title={"+ New Sale"}></Button>
      </div>
      <Box
        height="80vh"
        sx={{
          ...Gridsettings,
        }}
      >
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={Salescolumns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
};

export default Sales;
