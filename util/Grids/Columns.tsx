//Columns for Purchase Order Grid
const POcolumns = [
  { field: "id", headerName: "Purchase ID" },
  { field: "purchase_date", headerName: "Date" },
  {
    field: "proddesc",
    headerName: "Supplier ",
    flex: 1,
  },

  {
    field: "expected_date",
    headerName: "Expected Date",
    flex: 1,
  },
  {
    field: "instock",
    headerName: "Items",
    flex: 1,
    cellClassName: "name-column--cell",
  },

  {
    field: "prodprice",
    headerName: "Total Purchase Price",
    flex: 1,
  },
  {
    field: "purchase_status",
    headerName: "Status",
    flex: 1,
  },

  {
    field: "Admin",
    headerName: "Admin",
    flex: 1,
  },
];

//Columns for Sales Order Grid
const Salescolumns = [
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

//Columns for Product Grid

const Productcolumns = [
  { field: "product_sku", headerName: "Product ID" },
  {
    field: "product_description",
    headerName: "Product Description",
    flex: 1,
  },
  {
    field: "in_stock",
    headerName: "In Stock",
    flex: 1,
  },

  {
    field: "bay_location",
    headerName: "Bay Location",
    flex: 1,
  },

  {
    field: "product_price",
    headerName: "Price",
    flex: 1,
  },

  {
    field: "product_status",
    headerName: "Status",
    flex: 1,
  },

  {
    field: "Admin",
    headerName: "Admin",
    flex: 1,
  },
];

const Contactcolumns = [
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

export { POcolumns, Salescolumns, Productcolumns, Contactcolumns };
