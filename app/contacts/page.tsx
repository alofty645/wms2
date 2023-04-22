"use client";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "@/components/Header";
import Newbutton from "@/components/Newbutton";
import Gridsettings from "@/util/Grids/Gridsettings";
import { Contactcolumns } from "@/util/Grids/Columns";
import rows from "@/util/Grids/testrows";

const Contacts = () => {
  return (
    <div
      className="
         m-4  h-3/4 rounded-3xl"
    >
      <Header title={"Contacts"}></Header>
      <div className="my-3">
        <Newbutton title={"+ New Contact"}></Newbutton>
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
          columns={Contactcolumns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
};

export default Contacts;
