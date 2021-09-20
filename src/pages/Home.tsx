import { useEffect } from 'react';
import { connect } from 'react-redux';
import { FaEye } from 'react-icons/fa';

// styles
import '../styles/pages/Home.scss';

// actions
import { getAllUsers } from '../redux/actions/users';

// custom containers
import Container from '../containers/Container';
import Table from '../containers/Table';

// custom components
import ErrorMessage from '../components/ErrorMessage';

// types
import { User } from '../types';

interface HomeProps {
  loading?: boolean | boolean;
  error?: string | null;
  users?: Array<User> | null;
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
      {
        <Table headers={['id', 'name', 'username', 'website', 'Actions']}>
          {props.users?.map((user) => {
            return (
              <tr>
                <td className="table__data--id">{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.website}</td>
                <td className="table__data--actions">
                  <FaEye />
                </td>
              </tr>
            );
          })}
        </Table>
      }
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
