import '../styles/globals.css';
import '../styles/game-page-style/game-page.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';

const { Header, Content } = Layout;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
          theme="dark"
          style={{
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
          }}
          selectedKeys={router.asPath}
        >
          <Menu.Item key="/" onClick={() => router.push('/')}>
            Anasayfa
          </Menu.Item>
          <Menu.Item key="/lastgames" onClick={() => router.push('/lastgames')}>
            Geçmiş Oyunlar
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ width: '100%', background: '#fff' }}>
        <Component {...pageProps} />;
      </Content>
    </Layout>
  );
}

export default MyApp;
