import '../styles/globals.css';
import '../styles/game-page.css';
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
          padding: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <label
            onClick={() => router.push('/')}
            className="logo-text"
            style={{}}
          >
            Sudoku App
          </label>
        </div>
        <div>
          <Menu
            theme="dark"
            style={{
              width: '100%',
              display: 'flex',
            }}
            selectedKeys={router.asPath}
          >
            <Menu.Item key="/" onClick={() => router.push('/')}>
              Anasayfa
            </Menu.Item>
            <Menu.Item
              key="/last-games"
              onClick={() => router.push('/last-games')}
            >
              Geçmiş Oyunlar
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content style={{ width: '100%', background: '#fff' }}>
        <Component {...pageProps} />;
      </Content>
    </Layout>
  );
}

export default MyApp;
