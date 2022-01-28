import React, { useState } from 'react';
import { FormControl, Select, Button, MenuItem, OutlinedInput } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../../styles/Dashboard.module.css';

export const Filters = ({ isSubmitting, search }) => {
  const [filters, setFilters] = useState({
    requestId: '',
    requestPaymentId: '',
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
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const bankOptions = [
    { value: '002', label: 'BCP' },
    { value: '011', label: 'BBVA' },
    { value: '009', label: 'SCOTIABANK' }
  ];

  const typeOptions = [
    { value: 'INQUIRY', label: 'CONSULTA DEUDA' },
    { value: 'PAYMENT', label: 'NOTIF. PAGO' },
    { value: 'ANNULMENT', label: 'NOTIF. EXTORNO' }
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
    search({
      ...filters,
      dateFilter:
        startDate && endDate
          ? {
              startDate: formatDate(startDate),
              endDate: formatDate(endDate)
            }
          : undefined
    });
  };

  const formatDate = (date) => {
    const datetoFormat = new Date(date);
    const dd = datetoFormat.getDate();
    const mm = datetoFormat.getMonth();
    const yyyy = datetoFormat.getFullYear();
    return `${yyyy}-${mm <= 8 ? '0' + (mm + 1) : (mm + 1)}-${dd}`
  };

  const reset = () => {
    setFilters({
      requestId: '',
      requestPaymentId: '',
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
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <>
      <div className={styles.filterContainer}>
        <FormControl className={styles.noMargin}>
          <OutlinedInput
            type="text"
            value={filters.requestPaymentId}
            onChange={(event) =>
              setFilters({
                ...filters,
                requestPaymentId: event.target.value
              })
            }
            startAdornment={<span className={styles.spanInput}>Req Payment ID:</span>}
          />
        </FormControl>
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
        <div className={styles.datePickerContainer}>
          <span>Fecha inicial:</span>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} clearable />
        </div>
        <div className={styles.datePickerContainer}>
          <span>Fecha fin:</span>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} clearable />
        </div>
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
