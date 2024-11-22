import React from 'react';
import { Table } from 'antd';

function TransactionHistory() {
  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Charity', dataIndex: 'charity', key: 'charity' },
  ];

  const data = [
    { key: 1, date: '2024-01-01', amount: '100', charity: 'Charity A' },
    { key: 2, date: '2024-02-01', amount: '150', charity: 'Charity B' },
  ];

  return (
    <div>
      <h2>Transaction History</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default TransactionHistory;
