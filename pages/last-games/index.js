import React, { useEffect, useState } from 'react';
import { Row, Col, Table } from 'antd';
import Head from 'next/head';

const columns = [
  {
    title: 'Oyun adı',
    dataIndex: 'id',
  },
  {
    title: 'Harcanan zaman',
    dataIndex: 'timer',
    render: (item) => `${parseInt(item / 60)} dakika ${item % 60} saniye`,
  },
];

function LastGames() {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('gameHistory')) {
      let gameHistory = localStorage.getItem('gameHistory');
      setData(JSON.parse(gameHistory));
    }
  }, []);

  return (
    <div className="wrapper">
      <Head>
        <title>Tamamlanmış Oyunlar</title>
      </Head>
      <div className="card">
        <h2>Tamamlanmış Oyunlar</h2>
        <Row className="container">
          <Col span={24}>
            <Table
              bordered
              locale={{ emptyText: 'Tamamlanmış oyun bulunmamaktadır.' }}
              dataSource={data}
              columns={columns}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default LastGames;
