'use strict';

// PART 1: SHOW A FORTUNE

const showFortune = (evt) => {
  // TODO: get the fortune and show it in the #fortune-text div
  $.get('/fortune', (data) => {
    $('#fortune-text').html(data);
  });
};

$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

const showWeather = (evt) => {
  evt.preventDefault();

  const url = '/weather.json';       
  // const formData = { zipcode: $('#zipcode-field').val() };      

  $.get(url, { zipcode: $('#zipcode-field').val() }, (res) => {           //
    // Display response from the server
    console.log(res);
    $('#weather-info').html(res['forecast']);
  });
};

$('#weather-form').on('submit', showWeather);

// PART 3: ORDER MELONS

const orderMelons = (evt) => {
  evt.preventDefault();

  const formInputs = {
    'melon_type': $('#melon-type-field').val(),
    'qty': $('#qty-field').val()
  }

  $.post('/order-melons.json', formInputs, (res) => {
    console.log(res)
    $('#order-status').html(`${res.code} ${res.msg}`);

    //If the order code is error,
    if (res.code === 'ERROR') {
      $('#order-status').addClass('order-error')
    }
  })
  // TODO: show the result message after your form
  // $.post() to make a request to /order-melons
  // use data from #order-form
  // take 
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
};

$('#order-form').on('submit', orderMelons);
