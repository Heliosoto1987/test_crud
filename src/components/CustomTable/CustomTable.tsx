import { useContext } from "react";
import { UsersContext } from "../../context/context";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Users } from "../../types/users";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Age",
    width: 200,
    type: "number",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
];

interface TableProps {
  data: Users[];
  setArrayUserSelected: React.Dispatch<React.SetStateAction<number[]>>;
  arrayUserSelected: number[];
}

export const Table = ({
  data,
  setArrayUserSelected,
  arrayUserSelected,
}: TableProps) => {
  const { setUserEdit } = useContext(UsersContext);
  return (
    <div style={{ height: "60vh", width: "60%" }}>
      <DataGrid
        onCellClick={(cell) => {
          setUserEdit(cell.row);
          setArrayUserSelected((prev: any) => {
            if (prev.includes(Number(cell.id))) {
              return prev.filter((value: number) => value !== cell.id);
            } else {
              return [...prev, cell.id];
            }
          });
        }}
        sx={{
          backgroundColor: "#1976d213",
        }}
        rows={data && data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        checkboxSelection
        rowSelectionModel={arrayUserSelected}
      />
    </div>
  );
};
