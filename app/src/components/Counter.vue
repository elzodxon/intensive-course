<template>
  <div>
    <h4>{{count}}</h4>
    <pre>{{divided}}</pre>

    <button @click="counter()">Count</button>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "Counter",
  // data(){
  //   return{
  //     count: 0
  //   }
  // },
  computed:{
    count(){
      return store.state.count
    },
    divided(){
      return store.getters.divideByTwo
    }
  },
  methods:{
    counter(){
      store.dispatch('increment')
    }
  }
}
</script>
