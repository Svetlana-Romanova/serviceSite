export default function forms() {

  let forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    modal = document.querySelector('.modal');

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  let postData = async (url, data) => {
    modal.textContent = message.loading;

    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  };

  let clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  forms.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('modal');
      statusMessage.textContent = message.loading;
      item.appendChild(statusMessage);

      let formData = new FormData(item);

      postData('./server.php', formData)
        .then(res => {
          modal.textContent = message.success;
        })
        .catch(() => modal.textContent = message.failure)
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            document.querySelector('.overlay').remove();
            document.querySelector('body').classList.remove('is-modal-open');
          }, 2000);
        });
    });
  });
}
