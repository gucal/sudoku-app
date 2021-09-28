import '../styles/globals.css';
import '../styles/game-page-style/game-page.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header
        style={{
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Menu
          style={{
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Menu.Item>Anasayfa</Menu.Item>
          <Menu.Item>Geçmiş Oyunlar</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ width: '100%', background: '#fff' }}>
        <Component {...pageProps} />;
      </Content>
    </Layout>
  );
}

export default MyApp;
