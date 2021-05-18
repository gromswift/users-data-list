import React from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './PreviewList.module.scss';
import { ReactComponent as FavIcon } from './img/favorite.svg';
import { ReactComponent as FavIconFil } from './img/favoriteFil.svg';
import { filterByName } from 'helpers/filterByName'
import pluralizeRu from "../../helpers/p11nRu";

const checkWideMode = (index, arr) => {
  if ((arr[index + 1] && arr[index + 1].video) || !arr[index + 1]) {
    return checkIsElemOdd(index - 1, index, arr);
  }

  return false;
}

const checkIsElemOdd = (prevIndex, currIndex, arr) => {
  if ((prevIndex < 0) || arr[prevIndex].video) {
    return ((currIndex - (prevIndex + 1)) % 2) === 0;
  }

  return checkIsElemOdd(prevIndex - 1, currIndex, arr);
}

function PreviewList(props) {
  const list = useSelector(state => state.usersList.list);
  const { t, i18n } = useTranslation();

  const {
    queryValue,
    toggleFavourite
  } = props;

  const renderCards = (list) => {
    let listClone = JSON.parse(JSON.stringify(list));

    if (queryValue.length) {
      listClone = listClone.filter(currUser => filterByName(queryValue, currUser.name));
    }

    return listClone.map((currUser, index, arr) => {
      const userAge = currUser.age;

      return (
        <div
          className={cx(
            styles.cardWrap,
            { [styles.videoCardWrap]: currUser.video,
              [styles.cardWrapWide]: !currUser.video && checkWideMode(index, arr)
            }
          )}
          style={{animationDelay: `${100 + (index * 100)}ms`}}
          key={currUser.id}
        >
          <div className={styles.card} key={currUser.id}>
            <div className={cx(styles.cardHeader, styles.cardItem)}>
              <div className={styles.cardHeaderLeft}>
                <div className={styles.userImgWrap}>
                  <img className={styles.userImg} src={`/assets/images/${currUser.image}.svg`} alt=""/>
                </div>
                <span>{currUser.name}</span>
              </div>
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
            <div className={styles.cardItem}>
              {i18n.language === 'ru' ? pluralizeRu(userAge) : t('userAge_plural', { userAge })}
            </div>
            <div className={styles.cardItem}>{currUser.phone}</div>
            <p className={styles.cardItem}>{currUser.phrase}</p>
          </div>
          {currUser.video
            ? <video className={styles.video} controls src={`/assets/videos/${currUser.video}.mp4`} />
            : null
          }
        </div>
      );
    });
  }

  return (
    <div className={styles.container}>
      {renderCards(list)}
    </div>
  );
}

export default PreviewList;
