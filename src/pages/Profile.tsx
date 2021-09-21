// import { useParams } from 'react-router-dom';
import Container from '../containers/Container';

import '../styles/pages/Profile.scss';

function Profile() {
  // const params: { id: string } = useParams();

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

export default Profile;
