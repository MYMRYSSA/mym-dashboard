import React, { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { LogsTable } from '../components/dashboard/LogsTable';
import { Filters } from '../components/dashboard/Filters';
import AuthGuard from '../core/utils/route-guard/AuthGuard';
import axios from 'axios';

export default function Page() {
  const [datasource, setDatasource] = useState([]);
  const [maxPage, setMaxPage] = useState(0);
  const [params, setParams] = useState({
    filters: {},
    page: 1
  });

  const search = async (filters, page) => {
    setParams({
      filters,
      page
    });
    const response = await axios.post(
      process.env.API_URL + '/api/dashboard/v1/query',
      {
        page,
        itemsPerPage: 10,
        params: {
          requestId: filters.requestId || undefined,
          requestPaymentId: filters.requestPaymentId || undefined,
          processId: filters.processId || undefined,
          documentId: filters.documentId || undefined,
          customerId: filters.customerId || undefined,
          type: filters.type || undefined,
          createdAt: filters.createdAt || undefined,
          updatedAt: filters.updatedAt || undefined,
          bank: filters.bank || undefined,
          currency: filters.currency || undefined,
          paymentMethod: filters.paymentMethod || undefined,
          serviceId: filters.serviceId || undefined,
          dateFilter: filters.dateFilter || undefined
        }
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }
    );
    setDatasource(response?.data?.response?.requests);
    setMaxPage(Math.round(response?.data?.response?.total / 10) + (response?.data?.response?.total % 10 ? 1 : 0));
  };

  useEffect(() => {
    search({}, 1);
  }, []);

  return (
    <AuthGuard>
      <Filters search={(filters) => search(filters, 1)} />
      <LogsTable search={(page) => search(params.filters, page)} datasource={datasource} page={params.page} maxPage={maxPage} />
    </AuthGuard>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
