import React from 'react';
import { Table } from 'antd';

function TransactionHistory() {
  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Charity', dataIndex: 'charity', key: 'charity' },
  ];

  const data = [
    { key: 1, date: '2024-11-23', amount: '500', charity: 'Open-source AI Model for Education' },
    { key: 2, date: '2024-11-23', amount: '150', charity: 'Decentralized Storage for Developers' },
  ];

  return (
    <div>
      <h2>Transaction History</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default TransactionHistory;
