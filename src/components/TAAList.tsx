import React from "react";
import {
  Collapse,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
  Box,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { AttendanceInfo } from "./TypeDef";

type TAAListProps = {
  TAAdata: AttendanceInfo[];
};

interface RowProps {
  row: AttendanceInfo;
}

const Row: React.FC<RowProps> = ({ row }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell align="center" style={{ minWidth: 70 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell align="center" style={{ minWidth: 200 }}>
          {row.name}
        </TableCell>
        <TableCell align="center" style={{ minWidth: 200 }}>
          {row.category}
        </TableCell>
        <TableCell align="center" style={{ minWidth: 200 }}>
          {row.begin.year}-{row.begin.month}-{row.begin.day}
        </TableCell>
        <TableCell align="center" style={{ minWidth: 200 }}>
          {row.end.year}-{row.end.month}-{row.end.day}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <h3>{row.comment}</h3>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default function TAAList({ TAAdata }: TAAListProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ minWidth: 70 }} />
              <TableCell align="center" style={{ minWidth: 200 }}>
                성명
              </TableCell>
              <TableCell align="center" style={{ minWidth: 200 }}>
                휴가종류
              </TableCell>
              <TableCell align="center" style={{ minWidth: 200 }}>
                시작일
              </TableCell>
              <TableCell align="center" style={{ minWidth: 200 }}>
                종료일
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {TAAdata.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage,
            ).map((row: AttendanceInfo) => (
              <Row row={row} key={row.key} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={TAAdata.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
