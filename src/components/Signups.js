import Events from './Events';

function Signups() {
  const data = [{ label: 'Name' }, { label: 'Email' }];
  return (
    <div>
      <Events data={data} />
    </div>
  );
}

export default Signups;
