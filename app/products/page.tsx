"use client";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "@/components/Header";
import Button from "@/components/UI/Button";
import Gridsettings from "@/util/Grids/Gridsettings";
import { Productcolumns } from "@/util/Grids/Columns";
import rows from "@/util/Grids/testrows";

const Products = () => {
  return (
    <div
      className="
         m-4  h-3/4 rounded-3xl"
    >
      <Header title={"Products"}></Header>
      <div className="my-3">
        <Button title={"+ New Product"}></Button>
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
          columns={Productcolumns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
};

export default Products;
