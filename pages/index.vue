<template>
  <div>
    <div class="flex justify-center items-center h-screen">
      <div>
        <img src="~/assets/Selendra.png" alt="selendra" class="w-20 h-20 ml-3 netnest">
        <div class="font-medium">Coming Soon!!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .netnest {
    animation: rotate-s-loader 6s linear infinite;
  }
  @keyframes rotate-s-loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>