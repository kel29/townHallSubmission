import React from 'react';
import {
  Layout,
  Affix,
  Icon,
} from 'antd';

import PageHeader from '../../components/PageHeader';
import MainFormController from '../FormController';
import SideBar from '../SideBar';
import MobileView from '../MobileView';

import './style.scss';

const {
  Sider,
  Content,
  Header
} = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.state = {
      collapsed: false,
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const {
      collapsed,
      width
    } = this.state;
    const isMobile = width <= 500;
    const navMargin = collapsed ? '0px' : '250px';
    if (isMobile) {
      return (
        <MobileView />
      );
    } else {
      return (
        <Layout>
          <PageHeader />
          <Layout>
            <Affix>
              <Sider
                trigger={null}
                breakpoint="lg"
                collapsible
                width={250}
                collapsedWidth="0"
                collapsed={collapsed}
                style={{
                  overflow: 'auto',
                  height: '100vh',
                  position: 'fixed',
                  left: 0,
                  marginBottom: 40,
                }}
              >
                <SideBar />
              </Sider>
            </Affix>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Affix>
                <Icon
                  className={`trigger`}
                  style={{ marginLeft: navMargin }}
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Affix>
            </Header>
            <Content style={{ marginTop: '1px', overflow: 'initial' }}>
              <MainFormController />
            </Content>
          </Layout>
        </Layout>
      );
    }
  }
}

export default App;
