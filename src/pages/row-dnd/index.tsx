import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
} from "material-react-table";
import { useMemo, useState } from "react";
import { data as initialData } from "../../makeData";

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    //column definitions...
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "jobTitle",
        header: "Job Title",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    []
    //end
  );

  const [data, setData] = useState(() => initialData);
  return (
    <MaterialReactTable
    autoResetPageIndex={false}
    columns={columns}
    data={data}
    enableRowOrdering
    enableSorting={false}
    muiTableBodyRowDragHandleProps={({ table }) => ({
      onDragEnd: () => {
        const { draggingRow, hoveredRow } = table.getState();
        if (hoveredRow && draggingRow) {
          data.splice(
            (hoveredRow as MRT_Row<any>).index,
            0,
            data.splice(draggingRow.index, 1)[0],
          );
          setData([...data]);
        }
      },
    })}
  />
  );
};

export default Example;
