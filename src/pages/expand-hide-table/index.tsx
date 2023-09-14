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
    </>
  );
};

export default ExpandHideTable;
