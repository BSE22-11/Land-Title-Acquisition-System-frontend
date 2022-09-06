import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'nin', label: 'NIN', minWidth: 100 },
  { id: 'role', label: 'Role', minWidth: 100 },
  { id: 'idn', label: 'ID number', minWidth: 100 },
  { id: 'district', label: 'District', minWidth: 100 },
  
];

function createData(name, nin, role, idn, district) {
  return { name, nin, role, idn, district };
}

const rows = [
  createData('Lorem Ispum', 'CFU8764433CY', 'Registrar', 'MZ8273', 'Kampala'),
  createData('Lorem Ispum', 'CFU8764433CY', 'Registrar', 'MZ8273', 'Kampala'),
  createData('Lorem Ispum', 'CFU8764433CY', 'Registrar', 'MZ8273', 'Kampala'),
  createData('Lorem Ispum', 'CFU8764433CY', 'Registrar', 'MZ8273', 'Kampala'),
  createData('Lorem Ispum', 'CFU8764433CY', 'Registrar', 'MZ8273', 'Kampala'),
  createData('Lorem Ispum', 'CFU8764433CY', 'Registrar', 'MZ8273', 'Kampala'),
  createData('Lorem Ispum', 'CFU8764433CY', 'Registrar', 'MZ8273', 'Kampala'),
  createData('Lorem Ispum', 'CFU8764433CY', 'Registrar', 'MZ8273', 'Kampala'),
  createData('Lorem Ispum', 'CFU8764433CY', 'Registrar', 'MZ8273', 'Kampala'),
  createData('Lorem Ispum', 'CFU8764433CY', 'Registrar', 'MZ8273', 'Kampala'),
  createData('Lorem Ispum', 'CFU8764433CY', 'Registrar', 'MZ8273', 'Kampala'),
  createData('Lorem Ispum', 'CFU8764433CY', 'Registrar', 'MZ8273', 'Kampala'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
