//Выбор оплаты
const cards = document.querySelectorAll('.cards-item');

cards.forEach((card) => {
  cards[0].classList.add('cards-item--active');
  card.addEventListener('click', (e) => {
    cards.forEach((el) => {
      el.classList.remove('cards-item--active')
    });
    card.classList.add('cards-item--active');
  });
});

//Валидация формы
let form = document.querySelector('form'),
    formInputs = document.querySelectorAll('input'),
    name = document.querySelector('.input-name'),
    email = document.querySelector('.input-email'),
    phone = document.querySelector('.input-phone'),
    errName = document.querySelector('.error-name'),
    errPhone = document.querySelector('.error-phone'),
    errEmail = document.querySelector('.error-email');

function validationEmail(item) {
  let check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;
  return check.test(String(item).toLowerCase());
}

function validationName(item) {
  let alphabet = /^[а-яёА-ЯЁ\s]+$/;
  return alphabet.test(item);
}

function validatePhone(item) {
  let re = /^[\d\s]*$/;
  return re.test(String(item));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (name.value.trim() === '') {
    errName.textContent = 'Поле необходимо заполнить'
    name.classList.add('input--invalid');
  } else if(name.value.length > 0 && name.value.length <= 3){
    errName.textContent = 'Имя слишком короткое';
  } else {
    errName.textContent = '';
    name.classList.remove('input--invalid');
  }

  if (phone.value.trim() === '') {
    errPhone.textContent = 'Поле необходимо заполнить'
    phone.classList.add('input--invalid');
  } else if(!validatePhone(phone.value)) {
    phone.classList.add('input--invalid');
    errPhone.textContent = 'Поле не может содержать буквы'
  } else if(phone.value.replace(/\s+/g, '').length < 11) {
    phone.classList.add('input--invalid');
    errPhone.textContent = 'Введите корректный номер формата 9 999 999 99 99'
  } else {
    phone.classList.remove('input--invalid');
    errPhone.textContent = ''
  }

  if (email.value.trim() === '') {
    errEmail.textContent = 'Поле необходимо заполнить'
    email.classList.add('input--invalid');
  } else if(!validationEmail(email.value)) {
    email.classList.add('input--invalid');
    errEmail.textContent = 'Некорректный email'
  } else {
    email.classList.remove('input--invalid');
    errEmail.textContent = ''
  }

})
//Скрытие оплаты
let checkbox = document.querySelector('.checkbox'),
    paymentBlock = document.querySelector('.payment');


checkbox.addEventListener('click', (e) => {
  if(checkbox.checked) {
    paymentBlock.classList.remove('visually-hidden');
  } else {
    paymentBlock.classList.add('visually-hidden');

  }
})
