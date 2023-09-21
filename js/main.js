function formatDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");
    return year + "-" + month + "-" + day;
  }
document.addEventListener("DOMContentLoaded", function () {
var datePicker1 = document.getElementById("datepicker1");
var datePicker2 = document.getElementById("datepicker2");

var currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 7);
var formattedDate1 = formatDate(currentDate);
datePicker1.value = formattedDate1;

var formattedDate2 = formatDate(new Date());
datePicker2.value = formattedDate2;

document.getElementById("day").addEventListener("click", function() {
  datePicker1.value = formatDate(new Date());
});

document.getElementById("week").addEventListener("click", function() {
  var weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  datePicker1.value = formatDate(weekAgo);
});

document.getElementById("month").addEventListener("click", function() {
  var monthAgo = new Date();
  monthAgo.setMonth(monthAgo.getMonth() - 1);
  datePicker1.value = formatDate(monthAgo);
});

    //let orderByDescBtn = document.getElementById("orderByDesc");
    //orderByDescBtn.disabled = true;
    
    
    let order_by = document.getElementById("Select_Order").value;
    let response_format = document.getElementById("formatSelect").value;
    var adTypeInput = document.getElementById("adTypeInput");
    adTypeInput.value = "amb";
    let apiLink =
      "http://proto-dsp.ru/api/v1/statistic/report?&response_format=" +
      response_format +
      "&order_by=-" +
      order_by +
      "&ad_type=" +
      adTypeInput.value; // Дефолтное значение end & start неделя

    document.getElementById("apiLink").setAttribute("href", apiLink);
  });

  $(function () {
    $("#datepicker1").datepicker({
      dateFormat: "yy-mm-dd", // Формат даты
      onSelect: function (selectedDate) {
        $("#datepicker2").datepicker("option", "minDate", selectedDate); // Установка минимальной даты для второго календарика
        updateApiLink(); // Обновление ссылки-запроса API при выборе даты
      },
    });

    $("#datepicker2").datepicker({
      dateFormat: "yy-mm-dd", // Формат даты
      onSelect: function (selectedDate) {
        $("#datepicker1").datepicker("option", "maxDate", selectedDate); // Установка максимальной даты для первого календарика
        updateApiLink(); // Обновление ссылки-запроса API при выборе даты
      },
    });




    document
      .getElementById("formatSelect")
      .addEventListener("input", updateApiLink);
    document
      .getElementById("Select_Order")
      .addEventListener("input", updateApiLink);
    document
      .getElementById("adTypeInput")
      .addEventListener("input", updateApiLink);
    document
      .getElementById("cridInput")
      .addEventListener("input", updateApiLink);
    document
      .getElementById("format_group_by")
      .addEventListener("input", updateApiLink);
    document
      .getElementById("client_id_input")
      .addEventListener("input", updateApiLink);
    document
      .getElementById("client_index_input")
      .addEventListener("input", updateApiLink);
    document
      .getElementById("segment_id_input")
      .addEventListener("input", updateApiLink);
    document
      .getElementById("geo_input")
      .addEventListener("input", updateApiLink);
    document
      .getElementById("tag_id_input")
      .addEventListener("input", updateApiLink);
    document
      .getElementById("source_id_input")
      .addEventListener("input", updateApiLink);
    document
      .getElementById("banner_size_input")
      .addEventListener("input", updateApiLink);
    document
      .getElementById("device_type_input")
      .addEventListener("input", updateApiLink);
    document
      .getElementById("orderByAsc")
      .addEventListener("click", updateApiLink);
    document
      .getElementById("orderByDesc")
      .addEventListener("click", updateApiLink);






    function updateApiLink() {
      let order_by = document.getElementById("Select_Order").value;
      let filters = {
        start: document.getElementById("datepicker1").value,
        end: document.getElementById("datepicker2").value,
        response_format: document.getElementById("formatSelect").value,
        ad_type: document.getElementById("adTypeInput").value,
        crid: document.getElementById("cridInput").value,
        client_id: document.getElementById("client_id_input").value,
        client_index: document.getElementById("client_index_input").value,
        geo: document.getElementById("geo_input").value,
        segment_id: document.getElementById("segment_id_input").value,
        tag_id: document.getElementById("tag_id_input").value,
        source_id: document.getElementById("source_id_input").value,
        banner_size: document.getElementById("banner_size_input").value,
        device_type: document.getElementById("device_type_input").value,
        group_by: document.getElementById("format_group_by").value,
      };


      let apiLink = "http://ex.ru/api/v1/statistic/report?";

      for (let key in filters) {
        if (filters[key]) {
          apiLink += key + "=" + encodeURIComponent(filters[key]) + "&";
        }
      }

      apiLink += "order_by=" + order_by;

      console.log(apiLink);

      document.getElementById("apiLink").setAttribute("href", apiLink);
    }
   




  });



// КАСТОМИЗАЦИЯ
const dateBtn = document.querySelectorAll('.datepicker__btn'); // переделать под js
const togleBtn = document.querySelectorAll('.order-btn');
const customBtn = document.querySelector('#custom-btn');


for (let item of dateBtn) {
    item.addEventListener('click', () => {
        item.style.borderBottom = '2px solid #7cb8e9';
        for (let btn of dateBtn) {
            if (btn !== item) {
                btn.style.borderBottom = 'none';
                document.querySelector('.main__datepicker-inputs').style.display = 'none'
            }
        }
        let selectOrderInput = document.getElementById("Select_Order");
        let selectedIndex = selectOrderInput.selectedIndex;
        let selectedOption = selectOrderInput.options[selectedIndex];
        selectedOption.value = "-" + selectedOption.value;
        this.disabled = true;
        document.getElementById("orderByAsc").disabled = false;
    });
};

for (let item of togleBtn) {
    item.addEventListener('click', () => {
        item.style.border = '2px solid #7cb8e9';
        for (let btn of togleBtn) {
            if (btn !== item) {
                btn.style.border = '1px solid #9c9c9c';
            }
        }
        let selectOrderInput = document.getElementById("Select_Order");
        let selectedIndex = selectOrderInput.selectedIndex;
        let selectedOption = selectOrderInput.options[selectedIndex];
        selectedOption.value = selectedOption.value.replace("-", "");
        this.disabled = true;
        document.getElementById("orderByDesc").disabled = false;
    });
};

customBtn.addEventListener('click', () => {
    document.querySelector('.main__datepicker-inputs').style.display = 'flex';
});