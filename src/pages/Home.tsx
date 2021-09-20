import { useEffect } from 'react';
import { connect } from 'react-redux';

// styles
import '../styles/pages/Home.scss';

// actions
import { getAllUsers } from '../redux/actions/users';

// custom containers
import Container from '../containers/Container';

// custom components
import ErrorMessage from '../components/ErrorMessage';

interface HomeProps {
  loading?: boolean | boolean;
  error?: string | null;
  users?: Array<object> | null;
  getAllUsers?: () => Promise<void> | null;
}

function Home(props: HomeProps) {
  const { getAllUsers } = props;
  useEffect(() => {
    if (getAllUsers) getAllUsers();
  }, []);

  return (
    <Container classes={['HomePage']}>
      <h1>Todos los papus registrados</h1>
      <p>Conoce a todos los papus que forman parte de esto</p>
      {props.loading && <p>Hola</p>}
      {props.error && <ErrorMessage errorMessage={props.error} />}
    </Container>
  );
}

const mapStateToProps = (state: any) => {
  return {
    users: state.userReducer.users,
    loading: state.userReducer.loading,
    error: state.userReducer.error,
  };
};
const mapDispatchToProps = { getAllUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
