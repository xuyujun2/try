<template>
    <div>
      <mt-button type="primary" @click="handlerouter()">临时路由蒋颈夫</mt-button>
    </div>
</template>
<script>
import { Button } from "mint-ui";
export default {
  name: "List",
  data() {
    return{
    
    }
  },
  components: {
    [Button.name]: Button
  },
  methods: {
    handlerouter() {
      this.$router.push({
        path: "/search"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  background: #fff;
}
</style>


