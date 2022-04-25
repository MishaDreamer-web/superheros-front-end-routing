import { Link, useRouteMatch } from 'react-router-dom';

import PropTypes from 'prop-types';
import PageHeading from '../PageHeading/PageHeading';

const SuperheroListItem = ({
  id,
  nickName,
  realName,
  originDescription,
  superpowers,
  onRemove,
}) => {
  const { url } = useRouteMatch();
  return (
    <li>
      <Link key={id} to={`${url}/${nickName}`}>
        {nickName}
      </Link>
      : {realName}:{originDescription}:{superpowers}{' '}
      <button onClick={() => onRemove(id)}>delete</button>
    </li>
  );
};

const SuperheroList = ({ superheros, onRemove }) => {
  if (superheros.length === 0) return null;
  return (
    <>
      <PageHeading text="Superheros List" />
      <ul>
        {superheros.map(
          ({ id, nickName, realName, originDescription, superpowers }) => (
            <SuperheroListItem
              key={id}
              id={id}
              nickName={nickName}
              realName={realName}
              originDescription={originDescription}
              superpowers={superpowers}
              onRemove={() => onRemove(id)}
            />
          ),
        )}
      </ul>
    </>
  );
};

SuperheroList.propTypes = {
  superheros: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nickName: PropTypes.string.isRequired,
      realName: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default SuperheroList;
