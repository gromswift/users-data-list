import React from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';


import styles from './TableList.module.scss';
import { ReactComponent as FavIcon } from './img/favorite.svg';
import { ReactComponent as FavIconFil } from './img/favoriteFil.svg';
import { filterByName } from "helpers/filterByName";
import pluralizeRu from 'helpers/p11nRu';

function TableList(props) {
  const list = useSelector(state => state.usersList.list);
  const { t, i18n } = useTranslation();

  const {
    queryValue,
    toggleFavourite
  } = props;

  const renderList = (list) => {
    let listClone = JSON.parse(JSON.stringify(list));

    if (queryValue.length) {
      listClone = listClone.filter(currUser => filterByName(queryValue, currUser.name));
    }

    return listClone.map((currUser, index, arr) => {
      const userAge = currUser.age;

      return (
        <div className={styles.listItem}
             key={currUser.id}
             style={{animationDelay: `${100 + (index * 100)}ms`}}
        >
          <div className={styles.leftSideWrap}>
            <div className={styles.userImgWrap}>
              <img className={styles.userImg} src={`/assets/images/${currUser.image}.svg`} alt=""/>
            </div>
            <span>{currUser.name}</span>
          </div>
          <div className={styles.rightSideWrap}>
            <span>
              {i18n.language === 'ru' ? pluralizeRu(userAge) : t('userAge_plural', { userAge })}
            </span>
            <span>{currUser.phone}</span>
            <button
              type="button"
              className={cx(
                styles.favBtn,
                {[styles.favBtnActive]: currUser.favourite}
              )}
              onClick={() => toggleFavourite(currUser.id, list)}
            >
              <FavIcon/>
              <FavIconFil className={styles.filled} />
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <div className={styles.container}>
      {renderList(list)}
    </div>
  );
}

export default TableList;
