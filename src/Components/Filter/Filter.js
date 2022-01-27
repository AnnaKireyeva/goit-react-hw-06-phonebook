import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook-actions';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={styles.filterWrapper}>
      <label className={styles.filterLabel}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChangeFilter}
          className={styles.filterInput}
        ></input>
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e =>
    dispatch(phonebookActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};
