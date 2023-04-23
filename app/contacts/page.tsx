"use client";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "@/components/Header";
import Gridsettings from "@/util/Grids/Gridsettings";
import { Contactcolumns } from "@/util/Grids/Columns";
import rows from "@/util/Grids/testrows";
import { useEffect, useState } from "react";
import supabase from "@/util/Supabase/createclient";
import Styledlink from "@/components/UI/styledlink";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  async function getContacts() {
    let { data: contact } = await supabase.from("contacts").select("*");
    setContacts(contact);
    console.log(contact);
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div
      className="
         m-4  h-3/4 rounded-3xl"
    >
      <Header title={"Contacts"}></Header>
      <div className="my-3">
        <Styledlink id="4" href="/new/contact" title={"+ Contact"}></Styledlink>{" "}
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
