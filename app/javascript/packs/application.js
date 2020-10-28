// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require turbolinks

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import Turbolinks from "turbolinks";
import "packs/application.scss";

Turbolinks.start();

document.addEventListener("turbolinks:load", () => {
  const titleCheckboxs = document.querySelectorAll(".title-checkbox");
  const member = document.querySelectorAll(".title-checkbox");
  const btn2 = document.getElementById("btn");

  // duty の合計人数
  let getTextboxValue;
  //inputで選択した人数
  let calculatedTotalSum;
  //#dutyのcheckbox選択合計
  let dutyCheckCount;
  //#member checkbox選択合計
  let memberCheckCount;

  titleCheckboxs.forEach((titleCheckbox) => {
    titleCheckbox.addEventListener("change", (e) => {
      const DutyCheckboxes = e.target.closest("p.duty-checkboxes");
      const DutyInputNumber = DutyCheckboxes.querySelector(
        "input.people-number"
      );
      if (e.target.checked) {
        DutyInputNumber.setAttribute("name", "people[]");
        DutyInputNumber.classList.remove("d-none");
      } else {
        DutyInputNumber.removeAttribute("name");
        DutyInputNumber.classList.add("d-none");
      }

      // input.style.display = "none";

      // input.style.display = "displayOriginal";
      // document.getElementById()
    });
    //チェックボックスを取得する
    const el = document.querySelectorAll(".member-checkbox");
    var checkbox = [];
    //カウントボタンを取得する
    // const btn = document.getElementById("btn");

    //チェック済みのチェックボックスの数を返す
    const getCheckedCount = () => {
      let count = 0;

      for (let i = 0; i < el.length; i++) {
        if (el[i].checked) {
          count++;
        }
      }
      alert(count);

      count = 0;
      for (let i = 0; i < member.length; i++) {
        if (member[i].checked) {
          count++;
        }
      }
      alert(count);
    };

    btn.addEventListener("click", getCheckedCount, false);
  });
  $(function () {
    $("input:checkbox")
      .change(function () {
        var memberCheckCount = $("#member input:checkbox:checked").length;
        $("p.memberuret").text("選択合計：" + memberCheckCount + "人");
      })
      .trigger("change");
  });
  $("#duty").on("input", ".people-number", function () {
    calculatedTotalSum = 0;

    $("#duty .people-number").each(function () {
      getTextboxValue = $(this).val();
      if ($.isNumeric(getTextboxValue)) {
        calculatedTotalSum += parseFloat(getTextboxValue);
      }
    });
    $("#total_sum_value").html(calculatedTotalSum);

    $(function () {
      $("input:checkbox").change(function () {
        if ("getTextboxValue" === "calculatedTotalSum") {
          var dutyCheckCount = $("#duty input:checkbox:checked").length;
          $("p.dutyruret").text("選択合計：" + dutyCheckCount + "個");
          trigger("change");
        }
      });

      // titleCheckboxs.forEach((titleCheckbox) => {
      //   titleCheckbox.addEventListener("change", (e) => {
      // var dutybox = $('duty-checkboxes').title();
      // $('p').text(dutybox);
    });
  });

  //   if ("get_textbox_value" === "calculated_total_sum") {}
  // });
  // var dutyTitle = [" "]
});