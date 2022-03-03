<template>
  <p>{{ msg }}</p>
</template>

<script>
export default  {
  data: () => {
    console.log("vue.js");
    return {
      msg: "Hy this is vue",
    };
  },
};
</script>

<style scoped>
p {
  color: yellowgreen;
}
</style>
