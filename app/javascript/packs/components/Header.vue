<template>
  <div id="voo">
    <p>{{ text }}</p>
    <h1></h1>
  </div>
</template>

<script>
export default {
  // props: ["text"],
  data: function() {
    return {
      text: "my app!",
    };
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
</style>
