<template>
  <div class="snackbar">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.snackbar {
  animation: show 0.3s;
  background: #333;
  border-radius: 3px;
  bottom: 5px;
  color: white;
  font-size: 1.4rem;
  font-family: $main-font-family;
  height: 5rem;
  left: 50%;
  position: fixed;
  padding: 1rem 2rem;
  transform: translateX(-50%);
  width: 35rem;
  z-index: 2;
}

@keyframes show {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
