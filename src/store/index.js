import Vue from "vue";
import Vuex from "vuex";
import moduleA from "./module/moduleA.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 값을 저장해서 가져오는 공간
    count: 10,
    list: [
      { id: 1, memo: "a" },
      { id: 2, memo: "b" },
    ],
    name: ["홍길동", "성춘향", "그린"],
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  getters: {
    doneTodosCountGetter: function (state) {
      // 동일한 형식으로 사용할수 있다
      // filter( function(배열의 요소를 담는 변수) { return 참일때 요소값을 배열에 추가 } )
      return state.todos.filter((todo) => todo.done).length;
    },
    todosReverse: function (state) {
      return state.todos.reverse();
    },
    // todo의 id값을 통해 todo객체 반환
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },
  mutations: {
    // data의 methods와 비슷한 역할
    // 동기적으로 실행 : 반드시 앞의 명령어가 수행된뒤에 실행 (순차적)
    addcount: function (state) {
      state.count++;
    },
    subcount: function (state) {
      state.count--;
    },
    ncount: function (state, n) {
      state.count += n;
    },
  },
  actions: {
    // 비동기적으로 실행 : 동시에 실행 (따로 빠져나와서 실행)
    // 요청한 결과가 그 자리에서 주어지지 않음
    // : 동시에 실행되기 때문에 다른 작업이 실행되고 나중에 결과가 나올 수 있음
    addcount(context) {
      //mutations의 메서드를 들고와 상태변화(state) 를 추적할수 있다
      context.commit("addcount");
      // console.log(context);
    },
    // 비동기로 실행
    timer: function (context) {
      setTimeout(function () {
        context.commit("addcount");
      }, 1000);
    },
    // 비동기로 실행 + 인자값 받아오기
    ntimer: function (context, time) {
      setTimeout(function () {
        // Matation의 메소드를 commit할때 인자값을 전달하고 싶다면
        // , 를 통해 값을 같이 보내준다.
        context.commit("ncount", time.count);
      }, time.time);
    },
    timersecond: function (context) {
      setInterval(function () {
        context.commit("addcount");
      }, 1000);
    },
  },
  modules: {
    a: moduleA,
  },
});