import { LinearProgress } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";

type DataTableProps = DataGridProps & {
  tableHeight?: string;
};

const DataTable = (props: DataTableProps) => {
  const { tableHeight = "400px" } = props;
  const noRowsOverlay = () => {
    return (
      <Stack height="100%" alignItems="center" justifyContent="center">
        No data to show
      </Stack>
    );
  };

  const loadingOverlay = () => {
    return <LinearProgress color="warning" />;
  };

  return (
    <Box sx={{ height: tableHeight, width: "100%" }}>
      <DataGrid
        sx={{
          borderRadius: "8px",
          border: "1px solid #F2F4F7",
          "& .MuiDataGrid-withBorderColor": {
            borderBottom: "1px solid #F2F4F7",
          },
          "& .MuiDataGrid-columnSeparator--sideRight": {
            display: "none",
          },
          // "& .MuiDataGrid-footerContainer": {
          //   display: "none",
          // },
          "& .MuiDataGrid-columnHeader": {
            color: "#fff",
            height: "48px !important",
            fontSize: "14px",
            //maxWidth: "130px !important",
            minWidth: "130px !important",
          },
          "& .MuiDataGrid-columnHeaders": {
            minHeight: "48px !important",
            borderRadius: "7px 7px 0px 0px !important",
            backgroundColor: "#10396d",
          },
          "& .MuiDataGrid-row": {
            fontSize: "14px",
            minHeight: "60px !important",
            "&.Mui-selected": {
              backgroundColor: "#e6e3e3 !important",
            },
            "& .MuiDataGrid-cell": {
              minHeight: "60px !important",
              //maxWidth: "130px !important",
              //minWidth: "130px !important",
            },
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          cursor: "pointer",
        }}        
        pagination
        pageSizeOptions={[12]}
        paginationMode="server"
        checkboxSelection={false}
        slots={{
          loadingOverlay: loadingOverlay,
          noRowsOverlay: noRowsOverlay,
        }}
        loading
        {...props}
        slotProps={{
          pagination:{
            labelRowsPerPage: "Results per page",
          },
        }}
      />
    </Box>
  );
};

export default DataTable;
