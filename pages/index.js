import React from 'react';
import { Row, Col, Button } from 'antd';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  return (
    <div className="container">
      <Row gutter={[16, 16]} style={{ width: '100%', maxWidth: 1200 }}>
        <Col span={24}>
          <p className="introduction-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam molestias soluta temporibus culpa obcaecati architecto,
            minima, voluptatibus quae debitis pariatur excepturi doloremque
            numquam harum vitae saepe odio ea ipsam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ducimus, possimus obcaecati, in vitae,
            maxime deserunt id reiciendis qui ipsa perferendis dicta ratione.
            Animi illo velit corrupti suscipit est obcaecati! Quam.
          </p>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
          <Button
            onClick={() => router.push('/gamelist')}
            style={{
              width: '40%',
              height: '56px',
              background: '#FBC408',
              color: '#fff',
              border: 0,
              borderRadius: 4,
            }}
            size="large"
          >
            Start Playing
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
