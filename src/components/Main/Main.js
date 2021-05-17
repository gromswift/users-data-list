import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';


import styles from './Main.module.scss';
import { ReactComponent as SearchIcon } from './img/search-icon.svg';
import Sorting from 'components/Sorting/Sorting';
import TableList from 'components/TableList/TableList';
import PreviewList from 'components/PreviewList/PreviewList';
import { updateFavorite } from 'actions/usersListActions';
import updateLocationQuery from 'utils/updateLocationQuery';
import getUrlParams from 'utils/getUrlParams';
import USERS_LIST_VIEWS from 'constants/usersListViews';

function Main() {
  const [listView, setView] = useState(
    getUrlParams(window.location.search).list_view || USERS_LIST_VIEWS.table
  );
  const [queryValue, setValue] = useState(
    getUrlParams(window.location.search).search_query || ''
  );

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.usersList.loading);
  const { t, i18n } = useTranslation();

  const toggleFavourite = (userId, usersList) => {
    dispatch(updateFavorite(userId, usersList));
  }

  const setQueryValue = (ev) => {
    const value = ev.target.value;

    updateLocationQuery('search_query', value);

    setValue(value);
  }

  const setListview = (ev) => {
    const value = ev.target.value;

    updateLocationQuery('list_view', value);

    setView(value);
  }

  const changeLang = (ev) => {
    i18n.changeLanguage(ev.target.value);
  }

  if (isLoading) {
    return <div className={styles.loader} />;
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.controlsTop}>
          <label htmlFor="searchUsers">
            <input
              id="searchUsers"
              type="text"
              value={queryValue}
              className={styles.searchByInput}
              placeholder={t('searchBy')}
              onChange={ev => setQueryValue(ev)}
            />
            <SearchIcon />
          </label>
          <div>
            <button
              className={cx(
                styles.btn,
                styles.langBtn,
                {[styles.btnActive]: 'en' === i18n.language}
              )}
              type="button"
              value='en'
              onClick={ev => changeLang(ev)}
            >
              EN
            </button>
            <button
              className={cx(
                styles.btn,
                styles.langBtn,
                {[styles.btnActive]: 'ru' === i18n.language}
              )}
              type="button"
              value='ru'
              onClick={ev => changeLang(ev)}
            >
              RU
            </button>
          </div>
        </div>
        <div className={styles.controlsBottom}>
          <div className={styles.view}>
            <div className={styles.viewCap}>{t('view')}</div>
            <button
              className={cx(
                styles.btn,
                styles.viewBtn,
                {[styles.btnActive]: listView === USERS_LIST_VIEWS.table}
              )}
              type="button" value={USERS_LIST_VIEWS.table}
              onClick={(ev) => setListview(ev)}
            >
              {t('table')}
            </button>
            <button
              className={cx(
                styles.btn,
                styles.viewBtn,
                {[styles.btnActive]: listView === USERS_LIST_VIEWS.preview}
              )}
              type="button" value={USERS_LIST_VIEWS.preview}
              onClick={(ev) => setListview(ev)}
            >
              {t('preview')}
            </button>
          </div>
          <Sorting />
        </div>
      </div>
      { listView === USERS_LIST_VIEWS.preview
          ? <PreviewList queryValue={queryValue} toggleFavourite={toggleFavourite} />
          : <TableList queryValue={queryValue} toggleFavourite={toggleFavourite} />
      }
    </div>
  );
}

export default Main;
