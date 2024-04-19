import React, { useState } from "react";
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
  Typography,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useVacations, Vacation } from "../contexts/VacationContext";

interface TAAProps {
  selectedVacationType: string;
  defaultRowsPerPage: number;
}

interface RowProps {
  row: Vacation;
}

const Row: React.FC<RowProps> = ({ row }) => {
  const [open, setOpen] = useState(false);

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
          {row.vacationType}
        </TableCell>
        <TableCell align="center" style={{ minWidth: 200 }}>
          {row.startDate}
        </TableCell>
        <TableCell align="center" style={{ minWidth: 200 }}>
          {row.endDate}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2 }}>
              <Typography variant="body1">{row.notes}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default function TAAList({
  selectedVacationType,
  defaultRowsPerPage,
}: TAAProps) {
  const { vacations } = useVacations();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);
  console.log(selectedVacationType);
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
            {selectedVacationType === "전체"
              ? vacations
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: Vacation) => <Row row={row} key={row.email} />)
              : vacations
                  .filter((row) => row.vacationType === selectedVacationType)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: Vacation) => <Row row={row} key={row.email} />)}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={vacations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
