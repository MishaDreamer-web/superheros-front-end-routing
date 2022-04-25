import React, { useState } from 'react';

import shortid from 'shortid';

import useLocalStorage from '../hooks/useLocalStorage';
import SuperheroForm from '../components/SuperheroForm';
import SuperherosList from '../components/SuperheroList';
import Filter from '../components/Filter';

const SuperherosView = () => {
  const [superheros, setSuperheros] = useLocalStorage('superheros', []);
  const [filter, setFilter] = useState('');

  const handleAddSuperhero = (
    nickName,
    realName,
    originDescription,
    superpowers,
  ) => {
    const superhero = {
      id: shortid.generate(),
      nickName,
      realName,
      originDescription,
      superpowers,
    };

    if (superheros.find(superhero => superhero.nickName === nickName)) {
      alert(`${nickName} is already in superheros`);
      return;
    }

    if (superheros.find(superhero => superhero.realName === realName)) {
      alert(`Real Name ${realName} is already in superheros`);
      return;
    }

    if (
      (!nickName || nickName.trim() === '') &&
      (!realName || realName.trim() === '')
    ) {
      alert('Fill in the fields "Nick Name" and "Real Name"');
      return;
    }

    if (!nickName || nickName.trim() === '') {
      alert('Field "Nick Name" is empty');
      return;
    }

    if (!realName || realName.trim() === '') {
      alert('Field "Real Name" is empty');
      return;
    }
    setSuperheros(prevSuperheros => [superhero, ...prevSuperheros]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleSuperheros = () => {
    const normalizedFilter = filter.toLowerCase();
    console.log(superheros);
    return superheros.filter(superhero =>
      superhero.nickName.toLowerCase().includes(normalizedFilter),
    );
  };

  const handleRemoveSuperhero = id => {
    setSuperheros(() => superheros.filter(superhero => superhero.id !== id));
  };

  return (
    <>
      <h1>SuperheroBook</h1>
      <SuperheroForm onAddSuperhero={handleAddSuperhero} />

      <h2>Superheros Filter</h2>
      <Filter value={filter} onChange={changeFilter} />
      {superheros.length === 0 ? (
        <p>There are no superheros in the list</p>
      ) : (
        <SuperherosList
          superheros={getVisibleSuperheros()}
          onRemove={handleRemoveSuperhero}
        />
      )}
    </>
  );
};

export default SuperherosView;
