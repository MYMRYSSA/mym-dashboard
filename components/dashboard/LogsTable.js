import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import styles from '../../styles/Dashboard.module.css';

export const LogsTable = ({ datasource, page, maxPage, search }) => {
  return (
    <>
      <TableContainer className={styles.logTable}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>requestId</TableCell>
              <TableCell align="center">processId</TableCell>
              <TableCell align="center">documentId</TableCell>
              <TableCell align="center">customerId</TableCell>
              <TableCell align="center">type</TableCell>
              <TableCell align="center">createdAt</TableCell>
              <TableCell align="center">updatedAt</TableCell>
              <TableCell align="center">bank</TableCell>
              <TableCell align="center">currency</TableCell>
              <TableCell align="center">paymentMethod</TableCell>
              <TableCell align="center">serviceId</TableCell>
            </TableRow>
          </TableHead>
          {datasource.length > 0 && (
            <TableBody>
              {datasource.map((row, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.requestId}
                  </TableCell>
                  <TableCell align="center">{row.processId}</TableCell>
                  <TableCell align="center">{row.documentId}</TableCell>
                  <TableCell align="center">{row.customerId}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.createdAt}</TableCell>
                  <TableCell align="center">{row.updatedAt}</TableCell>
                  <TableCell align="center">{row.bank}</TableCell>
                  <TableCell align="center">{row.currency}</TableCell>
                  <TableCell align="center">{row.paymentMethod}</TableCell>
                  <TableCell align="center">{row.serviceId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
        {datasource.length === 0 && <div className={styles.noResults}>Sin resultados</div>}
      </TableContainer>
      {datasource.length > 0 && (
        <Pagination
          className={styles.logPagination}
          count={maxPage}
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={(event, value) => {
            search(value);
          }}
        />
      )}
    </>
  );
};
