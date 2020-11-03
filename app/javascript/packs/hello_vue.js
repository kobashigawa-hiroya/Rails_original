/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

require("@rails/ujs").start();
require("turbolinks").start();


import Vue from "vue";
import Vuetify from "vuetify"; // 追加
import "vuetify/dist/vuetify.min.css"; // 追加
import App from "../app.vue";
// import Vue from 'vue/dist/vue.esm.js'
import Header from './components/Header.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)


Vue.use(Vuetify); // 追加
const vuetify = new Vuetify(); // 追加



document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    vuetify,
    render: (h) => h(App),
  }).$mount();
  document.body.appendChild(app.$el);

  console.log(app);

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
      $(function(){
        // リストを非表示
        $('text').hide();
        // 繰り返し処理
        $('text').each(function(i) {
        // 遅延させてフェードイン
        $(this).delay(500 * i).fadeIn(1000);
        });
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

// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>

// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//
// yarn add vue-turbolinks
//
// Then uncomment the code block below:
//
// import Vue from "vue/dist/vue.esm";
// import App from "../app.vue";

// Vue.use(TurbolinksAdapter);

// document.addEventListener("turbolinks:load", () => {
//   const app = new Vue({
//     el: "#hello",
//     data: () => {
//       return {
//         message: "Can i help me?",
//       };
//     },
//     components: {
//       app,
//     },
//   });
// });