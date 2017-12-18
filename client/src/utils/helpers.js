import history from './history';

const handle401 = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('username');
  history.push('/');
};

export default handle401;
