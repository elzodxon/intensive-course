<template>
  <div class="container">
    <pre>{{count}}</pre>
    <div class="grid">
      <test-card
        v-for="(data, idx) in cards"
        :key="idx"
        :data="data"
        show-icon
        @on-click="showModal(data)"
      />
    </div>

    <modal :show-modal="isOpenModal" @close-modal="isOpenModal= false"/>
  </div>
</template>
<script>
import TestCard from "@/components/TestCard";
import Modal from "@/components/Modal";
import store from "@/store";
export default {
  name: "Home",
  components: { Modal, TestCard },
  data() {
    return {
      cards: [
        {
          img: "https://picsum.photos/100/100",
          title: "Test nomi",
          description: "Vue.js bo'yicha savollar",
          created_at: new Date(),
          time: "11:00-12:00",
          is_owner: true,
        },
        {
          img: "https://picsum.photos/100/100",
          title: "Test nomi",
          description: "Vue.js bo'yicha savollar",
          created_at: new Date(),
          time: "11:00-12:00",
          is_owner: false,
        },
        {
          img: "https://picsum.photos/100/100",
          title: "Test nomi",
          description: "Vue.js bo'yicha savollar",
          created_at: new Date(),
          time: "11:00-12:00",
          is_owner: true,
        },
        {
          img: "https://picsum.photos/100/100",
          title: "Test nomi",
          description: "Vue.js bo'yicha savollar",
          created_at: new Date(),
          time: "11:00-12:00",
          is_owner: false,
        },
      ],
      isOpenModal: false,
    };
  },
  computed:{
    count(){
      return store.state.count
    }
  },
  methods: {
    showModal(data) {
      this.isOpenModal = true
      console.log("data", data)
    },
  },
};
</script>
<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
</style>
