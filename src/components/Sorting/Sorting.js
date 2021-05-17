import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './Sorting.module.scss';
import { ReactComponent as Arrow } from './img/down-arrow.svg'
import { sortUsersList, reverseUsersList } from 'actions/usersListActions';
import SORTING_TYPES from 'constants/sortingTypes';

function Sorting() {
  const [isDropdownOpened, toggleDropdown] = useState(false);

  const dispatch = useDispatch();
  const usersList = useSelector(state => state.usersList.list);
  const isReversed = useSelector(state => state.usersList.isReversed);
  const sortingType = useSelector(state => state.usersList.sortingType);
  const { t } = useTranslation();

  const sortBy = (list, sortingType) => {
    dispatch(sortUsersList(list, sortingType));
  }

  const reverseUsers = (list) => {
    dispatch(reverseUsersList(list, isReversed));
  }

  return (
    <div>
      <div className={styles.sortingCap}>{t('sorting')}</div>
      <div className={styles.sorting}>
        <div
          className={cx(
            styles.select,
            {[styles.selectOpened]: isDropdownOpened}
          )}
          onClick={() => toggleDropdown(!isDropdownOpened)}
        >
          <span className={styles.selectDefaultValue}>
            {sortingType === 'id' ? 'ID' : t(`${sortingType}`)}
          </span>
          <Arrow />
          <div className={styles.dropdown}>
            <div className={styles.option}
                 onClick={() => sortBy({usersList, type: SORTING_TYPES.id, isReversed})}
            >
              ID
            </div>
            <div className={styles.option}
                 onClick={() => sortBy({usersList, type: SORTING_TYPES.name, isReversed, isSortingValueStr: true})}
            >
              {t('name')}
            </div>
            <div className={styles.option}
                 onClick={() => sortBy({usersList, type: SORTING_TYPES.age, isReversed})}
            >
              {t('age')}
            </div>
          </div>
        </div>
        <button
          className={cx(
            styles.reverseBtn,
            {[styles.reverseBtnActive]: !isReversed}
          )}
          type="button"
          onClick={() => isReversed ? reverseUsers(usersList) : null}
        >
          {t('ascending')}
        </button>
        <button
          className={cx(
            styles.reverseBtn,
            {[styles.reverseBtnActive]: isReversed}
          )}
          type="button"
          onClick={() => !isReversed ? reverseUsers(usersList) : null}
        >
          {t('descending')}
        </button>
      </div>
    </div>
  );
}

export default Sorting;
