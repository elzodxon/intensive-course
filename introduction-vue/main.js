
var app = new Vue({
  el: '#app',
  data: {
    input: '',
    placeholder: 'placehold',
    list: [1,2,3,4],
    count: 1,
    text: alert('Hello world'),
    ok: true,
    activeColor: 'red',
    fontSize: 30
  },
  computed:{
    reverseArray(){
      return this.list.reverse()
    }
  },
  methods:{
    reverseMethod(){
      this.ok = !this.ok
      console.log(this.list.reverse())
      return this.list.reverse()
    },
    add(){
      if (this.input.trim(' ') !== ''){
        this.list.push(this.input)
      } else {
        alert('kiriting')
      }
      console.log(this.list)
    },
    onCount(){
      this.count+=1
    }
  }
})
