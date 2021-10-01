import React, { useEffect, useState } from 'react';
import { Row, Col, Table } from 'antd';

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
      <Row className="container">
        <Col span={24}>
          <Table
            locale={{ emptyText: 'Geçmiş oyun bulunmamaktadır.' }}
            dataSource={data}
            columns={columns}
          />
        </Col>
      </Row>
    </div>
  );
}

export default LastGames;
