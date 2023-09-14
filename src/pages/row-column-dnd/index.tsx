import {
  MaterialReactTable,
  MRT_Virtualizer,
  type MRT_ColumnDef,
  type MRT_Row,
  MRT_SortingState,
} from "material-react-table";
import { useEffect, useMemo, useRef, useState } from "react";
import { data as initialData } from "../../makeData";

const RowColumnDnd = () => {
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
        enableResizing: false, // Override the default behavior for this column
      },
    ],
    []
    //end
  );

  //optionally access the underlying virtualizer instance
  const rowVirtualizerInstanceRef =
    useRef<MRT_Virtualizer<HTMLDivElement, HTMLTableRowElement>>(null);

  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  useEffect(() => {
    //scroll to the top of the table when the sorting changes
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
    } catch (error) {
      console.error(error);
    }
  }, [sorting]);

  const [data, setData] = useState(() => initialData);
  return (
    <>
      <h2 style={{ textAlign: "center", padding: "50px 20px" }}>
        This <b>React Material UI table</b> row and column is dragable, column
        sortable and column resizeable
      </h2>
      <MaterialReactTable
        autoResetPageIndex={false}
        columns={columns}
        data={data}
        enableRowOrdering
        enableColumnOrdering
        enableSorting={false}
        defaultDisplayColumn={{ enableResizing: true }}
        enableColumnResizing
        enablePagination={false}
        muiTableBodyRowDragHandleProps={({ table }) => ({
          onDragEnd: () => {
            const { draggingRow, hoveredRow } = table.getState();
            if (hoveredRow && draggingRow) {
              data.splice(
                (hoveredRow as MRT_Row<any>).index,
                0,
                data.splice(draggingRow.index, 1)[0]
              );
              setData([...data]);
            }
          },
        })}
      />
    </>
  );
};

export default RowColumnDnd;
