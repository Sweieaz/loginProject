import { useContext } from 'react';
import EventContext from '../context/EventContext';
import { Link } from 'react-router-dom';

function Events({ data }) {
  const { userUpdate } = useContext(EventContext);
  const renderHeaders = data.map((column, index) => {
    return <th key={index}>{column.label}</th>;
  });

  const renderBody = userUpdate.map((update) => {
    return (
      <tr key={update.id}>
        <td>
          {update.firstName} {update.secondName}
        </td>
        <td>{update.email}</td>
      </tr>
    );
  });

  return (
    <diV>
      <table>
        <thead>
          <tr>{renderHeaders}</tr>
        </thead>
        <tbody>{renderBody}</tbody>
      </table>

      <Link to="/">home</Link>
    </diV>
  );
}

export default Events;
