import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImage } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-function';

document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.querySelector('.form');

  searchForm.addEventListener('submit', searchFormEvt);

  function searchFormEvt(e) {
    clearGallery();

    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim();
    if (query === '') {
      iziToast.error({
        backgroundColor: '#EF4040',
        message: 'Please fill the form',
        titleColor: '#fff',
        messageColor: '#fff',
        progressBarColor: '#B51B1B',
      });
      return;
    }
    showLoader();

    searchImage(query)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error({
            backgroundColor: '#EF4040',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            titleColor: '#fff',
            messageColor: '#fff',
            progressBarColor: '#B51B1B',
          });
          return;
        }

        createGallery(data.hits);
      })
      .catch(error => {
        console.log(error);
        iziToast.error({
          backgroundColor: '#EF4040',
          message: 'Sorry, something goes wrong. Please, try again later!',
          titleColor: '#fff',
          messageColor: '#fff',
          progressBarColor: '#B51B1B',
        });
      })
      .finally(() => {
        hideLoader();
      });

    form.reset();
  }
});
