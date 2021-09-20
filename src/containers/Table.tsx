import '../styles/containers/Table.scss';

interface TableProps {
  children?: any;
  headers: Array<string>;
}

function Table(props: TableProps) {
  return (
    <table className="Table__Container">
      <thead>
        <tr>
          {props.headers.map((header, key) => {
            return <th key={key}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default Table;
