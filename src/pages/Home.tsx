import { useEffect } from 'react';
import { connect } from 'react-redux';

// actions
import { getAllUsers } from '../redux/actions/users';

// custom containers
import Container from '../containers/Container';

interface HomeProps {
  loading?: boolean | boolean;
  error?: boolean | null;
  users?: Array<object> | null;
  getAllUsers?: () => Promise<void> | null;
}

function Home(props: HomeProps) {
  useEffect(() => {
    if (props.getAllUsers) props.getAllUsers();
  }, []);

  return (
    <Container>
      <h1>Todos los papus registrados</h1>
      <p>Conoce a todos los papus que forman parte de esto</p>
      {props.loading && <p>Hola</p>}
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
