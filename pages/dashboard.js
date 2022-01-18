import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { LogsTable } from '../components/dashboard/LogsTable';
import { Filters } from '../components/dashboard/Filters';
import AuthGuard from '../core/utils/route-guard/AuthGuard';

export default function Page() {
  const [datasource, setDatasource] = useState([]);
  const [maxPage, setMaxPage] = useState(10);
  const [params, setParams] = useState({
    filters: {},
    page: 1
  });
  const search = (filters, page) => {
    setParams({
      filters,
      page
    });
  };

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
