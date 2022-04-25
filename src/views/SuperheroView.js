import PageHeading from '../components/PageHeading/PageHeading';
import { useParams } from 'react-router-dom';

const SuperheroView = () => {
  const { nickName } = useParams();

  return (
    <>
      <PageHeading text={`Superhero ${nickName}`} />
    </>
  );
};

export default SuperheroView;
