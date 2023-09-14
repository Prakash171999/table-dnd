import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { Box, Typography } from "@mui/material";
import { data } from "@/makeData";

const ExpandHideTable = () => {
  const columns = useMemo(
    () =>
      [
        {
          accessorKey: "id",
          header: "ID",
          size: 50,
        },
        {
          accessorKey: "firstName",
          header: "First Name",
        },
        {
          accessorKey: "middleName",
          header: "Middle Name",
        },
        {
          accessorKey: "lastName",
          header: "Last Name",
        },
      ] as MRT_ColumnDef<any>[],
    []
  );

  return (
    <>
      <h2 style={{ textAlign: "center", padding: "50px 20px" }}>
        This <b>React Material UI Table</b> with expandable and hideable rows
      </h2>
      <MaterialReactTable
        columns={columns}
        data={data}
        renderDetailPanel={({ row }) => (
          <Box
            sx={{
              display: "grid",
              margin: "auto",
              gridTemplateColumns: "1fr 1fr",
              width: "100%",
            }}
          >
            <Typography>
              <b>Address:</b> {row.original.address}
            </Typography>
            <Typography>
              <b>City:</b> {row.original.city}
            </Typography>
            <Typography>
              <b>State:</b> {row.original.state}
            </Typography>
            <Typography>
              <b>Country:</b> {row.original.country}
            </Typography>
          </Box>
        )}
      />
    </>
  );
};

export default ExpandHideTable;
