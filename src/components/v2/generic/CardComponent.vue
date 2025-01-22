<template>
  <div class="card" :style="{ borderColor: borderColor }">
    <Avatar
      style="width: 64px; height: 64px; background-color: #1c1b22"
      class="zoomAvatar"
    >
      <a :href="link" target="_blank" rel="noopener noreferrer">
        <img :src="icon" :alt="title" />
      </a>
    </Avatar>
    <h3>{{ title }}</h3>
    <span class="text-l" v-html="description"></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    borderColor: {
      type: String,
      default: "#1c1b22", // Default border color
    },
  },
};
</script>

<style scoped>
.card {
  border: 2px solid;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  text-align: center;
}
.zoomAvatar {
  transition: transform 0.2s;
  margin-left: 10px;
}
.zoomAvatar:hover {
  transform: scale(1.2);
}
</style>
