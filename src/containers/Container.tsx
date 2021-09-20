import '../styles/containers/Container.scss';
import NavBar from './NavBar';

interface ContainerProps {
  children: any;
  classes?: Array<string>;
}

function Container(props: ContainerProps) {
  return (
    <>
      <main className={`Container__Container ${props.classes?.join(' ')}`}>
        {props.children}
      </main>
    </>
  );
}

export default Container;
