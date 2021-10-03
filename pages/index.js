import React from 'react';
import { Row, Col, Button } from 'antd';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

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
            <h1>Nasıl Oynanır?</h1>
            <ol className="how-to-play">
              <li>Aşağıdaki butonu tıklayın ve oyunlar sayfasına gidin.</li>
              <li>Herhangi bir seviyeyi seçin ve oyun sayfasına ilerleyin.</li>
              <li>Oyun sayfası açıldığında süre otomatik başlar.</li>
              <li>
                Kontrol et butonunu kullanarak çözümünüzü kontrol edebilirsiniz.
                <span style={{ fontSize: 13 }}>
                  {' '}
                  *(CTRL + Z kombinasyonu ile son hamlelerinizi geri
                  alabilirsiniz)
                </span>
              </li>
              <li>
                Tamamlanmış bulmacaları tamamlanma süreleri ile birlikte{' '}
                <Link href="/lastgames">
                  <a>Geçmiş Oyunlar</a>
                </Link>{' '}
                sekmesinde bulabilirsiniz.
              </li>
            </ol>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <Button
              style={{ fontWeight: '600' }}
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
