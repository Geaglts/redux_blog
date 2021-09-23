import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../redux/actions/users';
// import { useParams } from 'react-router-dom';
import Container from '../containers/Container';

import '../styles/pages/Profile.scss';

function Profile(props: any) {
  // const params: { id: string } = useParams();
  console.log(props);
  useEffect(() => {
    if (!props.users.length) {
      props.getAllUsers();
    }
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

const mapStateToProps = (reducers: any) => {
  return reducers.userReducer;
};

export default connect(mapStateToProps, { getAllUsers })(Profile);
