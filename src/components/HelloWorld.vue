<template>
  <div class="hello">
    <h1>{{doneTodosCountGetter}}</h1>
    <!--
      todos를 거꾸로 가져오는 getters를 만들어서 
      아래에 출력하세요
      reverse() 
    -->
    <h3>{{todosReverse}}</h3>

    <p>{{getTodoById(1)}}</p>

    <button @click="addcount">helloworld에서 추가</button>
    <button @click="ncount(num)">{{num}}추가</button>
    <button @click="ntimer({count : 50, time :10000})">10초 뒤 추가(Action)</button>

  </div>
</template>

<script>
//vuex 의 mapGetters를 통해 store에 있는 getters를 가져온다
//vuex 의 mapMutations를 통해 store에 있는 mutations를 가져온다
import { mapGetters, mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data : function(){
    return {
      num : 100,
    }
  },
  computed : {
    ...mapGetters([
      'doneTodosCountGetter',
      'getTodoById',
      'todosReverse'
    ])
  },
  methods : {
    ...mapMutations([
      'addcount',
      'ncount'
    ]),
    ...mapActions([
      'ntimer'
    ])
  },
  created () {
    console.log('hello-created');
  },
  mounted () {
    console.log('hello-mounted');
  },
  updated () {
    console.log('hello-updated');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>