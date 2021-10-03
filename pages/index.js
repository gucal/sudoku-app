import React from 'react';
import { Row, Col, Button } from 'antd';
import { useRouter } from 'next/router';
import Head from 'next/head';

function Home() {
  const router = useRouter();

  return (
    <div className="wrapper">
      <Head>
        <title>Sudoku</title>
      </Head>
      <div className="card">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <p className="introduction-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              aliquam molestias soluta temporibus culpa obcaecati architecto,
              minima, voluptatibus quae debitis pariatur excepturi doloremque
              numquam harum vitae saepe odio ea ipsam? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ducimus, possimus obcaecati, in
              vitae, maxime deserunt id reiciendis qui ipsa perferendis dicta
              ratione. Animi illo velit corrupti suscipit est obcaecati! Quam.
            </p>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <Button
              onClick={() => router.push('/gamelist')}
              className="start-button"
              size="large"
            >
              Oynamaya Başla
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
