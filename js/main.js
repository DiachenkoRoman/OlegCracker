const details = document.getElementById('details');
const details_info = document.getElementById('details-info');
const close_btn = document.getElementById('close');

const range_1 = document.getElementById('range-1');
const range_2 = document.getElementById('range-2');
const range_3 = document.getElementById('range-3');
const range_4 = document.getElementById('range-4');
const max = 100

const percent_1 = document.getElementById('percent-1');
const percent_2 = document.getElementById('percent-2');
const percent_3 = document.getElementById('percent-3');
const percent_4 = document.getElementById('percent-4');

percent_1.innerHTML = range_1.value + '%';
percent_2.innerHTML = range_2.value + '%';
percent_3.innerHTML = range_3.value + '%';
percent_4.innerHTML = range_4.value + '%';

range_1.oninput = function() {
  percent_1.innerHTML = this.value + '%';

  range_2.max = (max - this.value) / 3;
  percent_2.innerHTML = `${Math.floor((max - this.value) /3)}`;

  range_3.max = (max - this.value) / 3;
  percent_3.innerHTML = `${Math.floor((max - this.value) /3)}`;

  range_4.max = (max - this.value) / 3;
  percent_4.innerHTML = `${Math.floor((max - this.value) /3)}`;

}

range_2.oninput = function() {
  percent_2.innerHTML = this.value + '%';

  range_1.max = (max - this.value) / 3;
  percent_1.innerHTML = `${Math.floor((max - this.value) /3)}`;

  range_3.max = (max - this.value) / 3;
  percent_3.innerHTML = `${Math.floor((max - this.value) /3)}`;

  range_4.max = (max - this.value) / 3;
  percent_4.innerHTML = `${Math.floor((max - this.value) /3)}`;

}

range_3.oninput = function() {
  percent_3.innerHTML = this.value + '%';

  range_2.max = (max - this.value) / 3;
  percent_2.innerHTML = `${Math.floor((max - this.value) /3)}`;

  range_1.max = (max - this.value) / 3;
  percent_1.innerHTML = `${Math.floor((max - this.value) /3)}`;

  range_4.max = (max - this.value) / 3;
  percent_4.innerHTML = `${Math.floor((max - this.value) /3)}`;
}

range_4.oninput = function() {
  percent_4.innerHTML = this.value + '%';

  range_2.max = (max - this.value) / 3;
  percent_2.innerHTML = `${Math.floor((max - this.value) /3)}`;

  range_3.max = (max - this.value) / 3;
  percent_3.innerHTML = `${Math.floor((max - this.value) /3)}`;

  range_1.max = (max - this.value) / 3;
  percent_1.innerHTML = `${Math.floor((max - this.value) /3)}`;

}


details.addEventListener('mouseenter', function() {
  details_info.classList.add('block');
});

close_btn.addEventListener('click', function() {
  details_info.classList.toggle('block');
});
