import React, { useState } from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import styles from './SuperheroForm.module.scss';

const SuperheroForm = ({ onAddSuperhero }) => {
  const [nickName, setNickName] = useState('');
  const [realName, setRealName] = useState('');
  const [originDescription, setOriginDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');

  const nickNameInputId = shortid.generate();
  const realNameInputId = shortid.generate();
  const originDescriptionInputId = shortid.generate();
  const superpowersInputId = shortid.generate();

  const handleChangeForm = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'nickName':
        setNickName(value);
        break;

      case 'realName':
        setRealName(value);
        break;

      case 'origin_description':
        setOriginDescription(value);
        break;
      case 'superpowers':
        setSuperpowers(value);
        break;

      default:
        return;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    onAddSuperhero(nickName, realName, originDescription, superpowers);

    if ((!nickName && realName) || (nickName && !realName)) {
      return;
    }

    resetForm();
  };

  const resetForm = () => {
    setNickName('');
    setRealName('');
    setOriginDescription('');
    setSuperpowers('');
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles.Form}>
      <input
        id={nickNameInputId}
        type="text"
        name="nickName"
        placeholder="Enter nickname"
        value={nickName}
        onChange={handleChangeForm}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Никнейм героя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
      <input
        id={realNameInputId}
        type="text"
        name="realName"
        placeholder="Enter real name"
        value={realName}
        onChange={handleChangeForm}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Реальное имя героя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
      <input
        id={originDescriptionInputId}
        type="text"
        name="origin_description"
        placeholder="Enter Superhero description"
        value={originDescription}
        onChange={handleChangeForm}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="История происхождения героя."
      />
      <input
        id={superpowersInputId}
        type="text"
        name="superpowers"
        placeholder="Enter superpowers"
        value={superpowers}
        onChange={handleChangeForm}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Перечень суперспособностей"
      />
      <input type="file" name="myfile" />
      <button type="submit">Add superhero</button>
    </form>
  );
};

SuperheroForm.propTypes = {
  onAddSuperhero: PropTypes.func.isRequired,
};

export default SuperheroForm;
