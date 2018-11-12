<template>
  <cube-page  title="注册" class="option-demo">
    <div slot="content">
     
       
    </div>   
  </cube-page>
</template>

<script type="text/ecmascript-6">
import cubePage from "../../components/cube-page";
import { loginByUsername } from "../../api/login";

export default {
  components: {
    cubePage
  },
  data() {
   
  },
  computed: {
   
  },
  methods: {
    
  },
  mounted() {
   
  }
};
</script>

<style lang="stylus">
.cube-page.option-demo.input-view .wrapper {
  background-color: #efeff4;

  .group {
    background-color: white;
  }

  .value {
    margin: 15px 5px;
  }
}
</style>
