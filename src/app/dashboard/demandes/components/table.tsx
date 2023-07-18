/* eslint-disable react/no-unescaped-entities */
'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';





interface Data {
  nom: string;
  identity: string;
  route: string;
  ptStart : string;
  ptEnd : string;
  number: string;
  date : Date;
  EndOfAuth: Date;
  linearOccupied : string
  areaOccupied : string
  fee: number;
  lastPayment : string;
  lastPaymentDate : string;
  remaining : number;
}

function createData(
  nom: string,
  identity: string,
  route: string,
  ptStart : string,
  ptEnd : string,
  number: string,
  date : Date,
  EndOfAuth: Date,
  linearOccupied : string,
  areaOccupied : string,
  fee: number,
  lastPayment : string,
  lastPaymentDate : string,
  remaining : number
): Data {
  return { 
    nom,
    identity,
    route,
    ptStart,
    ptEnd,
    number,
    date,
    EndOfAuth,
    linearOccupied,
    areaOccupied,
    fee,
    lastPayment,
    lastPaymentDate,
    remaining 
  };
}

const rows = [
  createData('test', 'test', 'test', 'test','test','test',new Date(),new Date(),'test','test',0,'test','test',0)
];

export default function DataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  let _id = 0;
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden'}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" className='ss'>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2} sx={{fontSize: '12px'}}>
                    Occupant
              </TableCell>
              <TableCell align="center" rowSpan={2} sx={{fontSize: '12px'}}>
                    Route N°
              </TableCell>
              <TableCell align="center" rowSpan={2} sx={{fontSize: '12px'}}>
                    PK Début
              </TableCell>
              <TableCell align="center" rowSpan={2} sx={{fontSize: '12px'}}>
                    PK Fin
              </TableCell>
              <TableCell align="center" colSpan={2} sx={{fontSize: '12px'}}>
                    Décision d'autorisation
              </TableCell>
              <TableCell align="center" rowSpan={2} sx={{fontSize: '12px'}}>
                    Fin d'autorisation selon la dernière décision
              </TableCell>
              <TableCell align="center" rowSpan={2} sx={{fontSize: '12px'}}>
                    Linéaire occupé (m L)
              </TableCell>
              <TableCell align="center" rowSpan={2} sx={{fontSize: '12px'}}>
                    Superficie occupée en m²
              </TableCell>
              <TableCell align="center" rowSpan={2} sx={{fontSize: '12px'}}>
                    Redevance anuelle en Dhs
              </TableCell>
              <TableCell align="center" rowSpan={2} sx={{fontSize: '12px'}}>
                    Dernier payment
              </TableCell>
              <TableCell align="center" rowSpan={2} sx={{fontSize: '12px'}}>
                    Date de dernier payment
              </TableCell>
              <TableCell align="center" rowSpan={2} sx={{fontSize: '12px'}}>
                    Le reste à payer
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{fontSize: '12px'}}>Nom</TableCell>
              <TableCell sx={{fontSize: '12px'}}>Identité</TableCell>
              <TableCell sx={{fontSize: '12px'}}>Numéro</TableCell>
              <TableCell sx={{fontSize: '12px'}}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
          rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={_id}>
                    <TableCell>{row.nom}</TableCell>
                    <TableCell>{row.identity}</TableCell>
                    <TableCell>{row.route}</TableCell>
                    <TableCell>{row.ptStart}</TableCell>
                    <TableCell>{row.ptEnd}</TableCell>
                    <TableCell>{row.number}</TableCell>
                    <TableCell>{row.date.toUTCString()}</TableCell>
                    <TableCell>{row.EndOfAuth.toUTCString()}</TableCell>
                    <TableCell>{row.linearOccupied}</TableCell>
                    <TableCell>{row.areaOccupied}</TableCell>
                    <TableCell>{row.fee}</TableCell>
                    <TableCell>{row.lastPayment}</TableCell>
                    <TableCell>{row.lastPaymentDate}</TableCell>
                    <TableCell>{row.remaining}</TableCell>
                  </TableRow>
                )
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



/**
 * 
 * interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function DataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
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
           }
          
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
 * 
 * 
 * 
 */