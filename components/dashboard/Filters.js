import React, { useState } from 'react';
import { FormControl, Select, Button, MenuItem, OutlinedInput } from '@material-ui/core';
import styles from '../../styles/Dashboard.module.css'

export const Filters = ({ isSubmitting, search }) => {
  const [filters, setFilters] = useState({
    requestId: '',
    processId: '',
    documentId: '',
    customerId: '',
    type: '',
    createdAt: '',
    updatedAt: '',
    bank: '',
    currency: '',
    paymentMethod: '',
    serviceId: ''
  });

  const bankOptions = [
    { value: 'BCP', label: 'BCP' },
    { value: 'BBVA', label: 'BBVA' },
    { value: 'SCOTIABANK', label: 'SCOTIABANK' }
  ];

  const typeOptions = [
    { value: 'inquire', label: 'CONSULTA DEUDA' },
    { value: 'payment', label: 'NOTIF. PAGO' },
    { value: 'return', label: 'NOTIF. EXTORNO' }
  ];

  const currencyOptions = [
    { value: 'PEN', label: 'PEN' },
    { value: 'USD', label: 'USD' }
  ];

  const paymentMethodOptions = [
    { value: 'EF', label: 'Efectivo' },
    { value: 'CT', label: 'Cargo en cuenta' },
    { value: 'CJ', label: 'Cheque otro banco' },
    { value: 'TC', label: 'Tarjeta de crédito' },
    { value: 'CP', label: 'Cheque propio banco' }
  ];

  const onClick = () => {
    search(filters);
  };

  const reset = () => {
    setFilters({
      requestId: '',
      processId: '',
      documentId: '',
      customerId: '',
      type: '',
      createdAt: '',
      updatedAt: '',
      bank: '',
      currency: '',
      paymentMethod: '',
      serviceId: ''
    });
  };
  
  return (
    <>
      <div className={styles.filterContainer}>
        <FormControl className={styles.noMargin}>
          <OutlinedInput
            type="text"
            value={filters.requestId}
            onChange={(event) =>
              setFilters({
                ...filters,
                requestId: event.target.value
              })
            }
            startAdornment={<span className={styles.spanInput}>Request ID:</span>}
          />
        </FormControl>
        <FormControl className={styles.noMargin}>
          <OutlinedInput
            type="text"
            value={filters.processId}
            onChange={(event) =>
              setFilters({
                ...filters,
                processId: event.target.value
              })
            }
            startAdornment={<span className={styles.spanInput}>Process ID:</span>}
          />
        </FormControl>
        <FormControl className={styles.noMargin}>
          <OutlinedInput
            type="text"
            value={filters.documentId}
            onChange={(event) =>
              setFilters({
                ...filters,
                documentId: event.target.value
              })
            }
            startAdornment={<span className={styles.spanInput}>Document ID:</span>}
          />
        </FormControl>
        <FormControl className={styles.noMargin}>
          <OutlinedInput
            type="text"
            value={filters.customerId}
            onChange={(event) =>
              setFilters({
                ...filters,
                customerId: event.target.value
              })
            }
            startAdornment={<span className={styles.spanInput}>Customer ID:</span>}
          />
        </FormControl>
        <FormControl className={styles.noMargin}>
          <OutlinedInput
            type="text"
            value={filters.serviceId}
            onChange={(event) =>
              setFilters({
                ...filters,
                serviceId: event.target.value
              })
            }
            startAdornment={<span className={styles.spanInput}>Service ID:</span>}
          />
        </FormControl>
        <FormControl className={styles.noMargin}>
          <Select
            value={filters.bank}
            name="Bank"
            onChange={(event) =>
              setFilters({
                ...filters,
                bank: event.target.value
              })
            }
            startAdornment={<span className={styles.spanInput}>Bank:</span>}
          >
            {bankOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={styles.noMargin}>
          <Select
            value={filters.type}
            name="Bank"
            onChange={(event) =>
              setFilters({
                ...filters,
                type: event.target.value
              })
            }
            startAdornment={<span className={styles.spanInput}>Tipo:</span>}
          >
            {typeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={styles.noMargin}>
          <Select
            value={filters.currency}
            name="Bank"
            onChange={(event) =>
              setFilters({
                ...filters,
                currency: event.target.value
              })
            }
            startAdornment={<span className={styles.spanInput}>Moneda:</span>}
          >
            {currencyOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={styles.noMargin}>
          <Select
            value={filters.paymentMethod}
            name="Bank"
            onChange={(event) =>
              setFilters({
                ...filters,
                paymentMethod: event.target.value
              })
            }
            startAdornment={<span className={styles.spanInput}>Método de pago:</span>}
          >
            {paymentMethodOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          className={styles.serchButton}
          disableElevation
          disabled={isSubmitting}
          size="large"
          variant="contained"
          color="secondary"
          onClick={onClick}
        >
          Buscar
        </Button>
        <Button className={styles.clearButton} disableElevation disabled={isSubmitting} size="large" onClick={reset}>
          Limpiar filtros
        </Button>
      </div>
    </>
  );
};
