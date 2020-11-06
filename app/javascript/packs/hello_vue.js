/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

require("@rails/ujs").start();
require("turbolinks").start();
require("chartkick") // 追記
require("chart.js") // 追記
require("chartjs-plugin-labels/src/chartjs-plugin-labels")

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

  // 円グラフ

  var memberChartCtx = document.getElementById('member-chart').getContext('2d');
  var memberDataRatio = []
  var memberLabels = []
  var memberBackgrandColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
    ]
  var memberBorderColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
    ]
  var memberData = {
    labels: memberLabels,
    datasets: [{
      data: memberDataRatio,
      labels: memberLabels,
      backgroundColor: memberBackgrandColor,
      borderColor: memberBorderColor,
      borderWidth: 1
    }],
  }
  var memberChart = new Chart(memberChartCtx, {
    type: 'pie',
    data: memberData,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
          labels: {
            render: 'label',
            position: 'default',
            arc: true
          }            
        }
    }
  })

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
    $("input:checkbox")
      .change(function () {
        var memberCheckCount = $("#member input:checkbox:checked").length;
        $("p.memberuret").text("選択合計：" + memberCheckCount + "人");
        const name = this.parentNode.querySelector('label').innerText
        if(this.checked) {
          memberDataRatio.push(1)
          memberLabels.push(name)
          memberChart.data = {
            labels: memberLabels,
            datasets: [{
              data: memberDataRatio,
              labels: memberLabels,
              backgroundColor: memberBackgrandColor,
              borderColor: memberBorderColor,
              borderWidth: 1
            }],
          }        
          memberChart.update()
        } else {
          const idx = memberLabels.indexOf(name)
          if (idx => 0) {
            memberLabels.splice(idx, 1)
            memberDataRatio.pop()

            memberChart.data = {
              labels: memberLabels,
              datasets: [{
                data: memberDataRatio,
                labels: memberLabels,
                backgroundColor: memberBackgrandColor,
                borderColor: memberBorderColor,
                borderWidth: 1
              }],
            }        
            memberChart.update()
          }
        }
      })
  
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


})

  // let datasets = [{
  //   data: [1, 1, 1, 1],
  //   labels: ['犬', '猫', 'うさぎ'],
  //   backgroundColor: memberBackgrandColor,
  //   borderColor: memberBorderColor,
  //   borderWidth: 1
  // }],

  // チェックボックスにチェックを入れた時に次の操作を加える
//   var ctx = document.getElementById('myChart').getContext('2d');
//   var data = {
//       datasets: [{
//           data: [1, 1, 1]
//       }],

//   };
//   new Chart('myChart', {
//       type: 'pie',
//       data: data,
//       options: {
//           title: {
//               display: true,
//               fontSize: 35,
//               text: '好きな動物'
//           },

//       }
//   });
// });

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