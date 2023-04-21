"use client";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "@/components/Header";

const Contacts = () => {
  const columns = [
    { field: "contact_type", headerName: "Contact Type" },
    {
      field: "first_name",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "contact_email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "billing_address",
      headerName: "Billing Address",
      flex: 1,
    },

    {
      field: "Admin",
      headerName: "Admin",
      flex: 1,
    },
  ];

  const rows = [
    {
      id: 1,
      contact_type: "Customer",
      first_name: "John",
      last_name: "Doe",
      phone_number: "555-555-5555",
      contact_email: "",
      billing_address: "",
      Admin: "No",
    },
    {
      id: 2,
      contact_type: "Customer",
      first_name: "Jane",
      last_name: "Doe",
      phone_number: "555-555-5555",
      contact_email: "",
      billing_address: "",
      Admin: "No",
    },
  ];

  return (
    <div
      className="
         m-4  h-3/4 rounded-3xl"
    >
      <Header title={"Contacts"}></Header>
      <Box
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            backgroundColor: "#082F49",
            color: "#fff",
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            color: "#fff",
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#fff",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#3E4396",
            color: "#fff",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            color: "#fff",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#3E4396",
            color: "#fff",
            borderTop: "none",
          },
          "& .MuiCheckbox-root": {
            color: "#fff",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "#fff",
            margin: "10px",
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
};

export default Contacts;
