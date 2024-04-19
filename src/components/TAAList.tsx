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
}

interface RowProps {
  row: Vacation;
}

const Row: React.FC<RowProps> = ({ row }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell align="center" style={{ minWidth: 10 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell align="center" style={{ minWidth: 50 }}>
          {row.name}
        </TableCell>
        <TableCell align="center" style={{ minWidth: 50 }}>
          {row.vacationType}
        </TableCell>
        <TableCell align="center" style={{ minWidth: 50 }}>
          {row.startDate}
        </TableCell>
        <TableCell align="center" style={{ minWidth: 50 }}>
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

export default function TAAList({ selectedVacationType }: TAAProps) {
  const { vacations } = useVacations();
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
              <TableCell align="center" style={{ minWidth: 10 }} />
              <TableCell align="center" style={{ minWidth: 50 }}>
                성명
              </TableCell>
              <TableCell align="center" style={{ minWidth: 50 }}>
                휴가종류
              </TableCell>
              <TableCell align="center" style={{ minWidth: 50 }}>
                시작일
              </TableCell>
              <TableCell align="center" style={{ minWidth: 50 }}>
                종료일
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {selectedVacationType === "전체"
              ? vacations
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: Vacation) => (
                    <Row row={row} key={row.email + row.startDate} />
                  ))
              : vacations
                  .filter((row) => row.vacationType === selectedVacationType)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: Vacation) => (
                    <Row row={row} key={row.email + row.startDate} />
                  ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={
          selectedVacationType === "전체"
            ? vacations.length
            : vacations.filter(
                (row) => row.vacationType === selectedVacationType,
              ).length
        }
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
