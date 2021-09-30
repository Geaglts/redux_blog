import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as usersReducer from '../redux/actions/users';
import * as publicationsReducer from '../redux/actions/publications';
import { useParams } from 'react-router-dom';
import Container from '../containers/Container';

import '../styles/pages/Profile.scss';

function Profile(props: any) {
  const params: { id: string } = useParams();
  console.log(props);
  const loadMethods = async () => {
    if (!props.userReducer.users.length) {
      await props.getAllUsers();
    }
    props.traerPorUsuario(params.id);
  };

  useEffect(() => {
    loadMethods();
  }, []);

  return (
    <Container classes={['ProfilePage']}>
      <section>
        <img src="https://picsum.photos/150" alt="Perfil de usuario" />
        <p className="username">papu</p>
        <p className="webpage">papu.com</p>
      </section>
      <section></section>
    </Container>
  );
}

const mapStateToProps = ({ userReducer, publicationsReducer }: any) => {
  return { userReducer, publicationsReducer };
};

const mapDispatchToProps = {
  ...usersReducer,
  ...publicationsReducer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
