"use client";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "@/components/Header";
import Newbutton from "@/components/Newbutton";

const Sales = () => {
  const columns = [
    { field: "id", headerName: "Order ID" },
    {
      field: "sale_date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Customer",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "sale_type",
      headerName: "Sale Type",
      flex: 1,
    },
    {
      field: "shipping_address",
      headerName: "Shipping Address",
      flex: 1,
    },
    {
      field: "products",
      headerName: "Products",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Order Total",
      flex: 1,
    },
    {
      field: "sale_status",
      headerName: "Status",
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
      <Header title={"Sales"}></Header>
      <div className="my-3">
        <Newbutton title={"+ New Sale"}></Newbutton>
      </div>
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

export default Sales;
