import { ReactElement } from 'react';
import '../styles/containers/Container.scss';
import NavBar from './NavBar';

interface ContainerProps {
  children: ReactElement | Array<ReactElement>;
  classes?: Array<string>;
}

function Container(props: ContainerProps) {
  return (
    <>
      <NavBar />
      <main className={`Container__Container`}>{props.children}</main>
    </>
  );
}

export default Container;
