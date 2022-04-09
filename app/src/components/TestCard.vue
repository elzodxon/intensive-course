<template>
  <div class="test-card">
    <div class="test-card_header">
      <div class="img-wrapper">
        <img :src="data.img" alt="" />
        <user-badge v-if="data.is_owner" class="badge" />
      </div>

      <button @click="$emit('on-click')" v-if="showIcon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12Z"
            fill="#425466"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12Z"
            fill="#425466"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z"
            fill="#425466"
          />
        </svg>
      </button>
    </div>
    <div class="test-card_body">
      <h3>{{ data.title }}</h3>
      <p>{{ data.description }}</p>
    </div>
    <div class="test-card_footer">
      <div class="test-card_footer-item">
        <i class="icon-calendar"></i>
        <span>{{ data.created_at }}</span>
      </div>
      <div class="test-card_footer-item">
        <i class="icon-camera"></i>
        <span>{{ data.time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import UserBadge from "@/components/badges/UserBadge";

export default {
  components: {
    UserBadge,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.test-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 24px;
  background: #fff;
  box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  filter: drop-shadow(0px 0px 1px rgba(12, 26, 75, 0.24));
  border-radius: 16px;
}

.test-card_header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

/* Image style */
.img-wrapper {
  position: relative;
  height: 46px;
  width: 46px;
}

.img-wrapper img {
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
}

.img-wrapper .badge {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(30%, 30%);
}

/* Body */

.test-card_body {
  margin-top: 10px;
  margin-bottom: 28px;
}

.test-card_body h3 {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  color: #27272e;
}

.test-card_body p {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 162%;
  color: #4c6fff;
}

/* Footer */
.test-card_footer {
  display: flex;
  align-items: center;
  gap: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #7a7a9d;
}

.test-card_footer .test-card_footer-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
