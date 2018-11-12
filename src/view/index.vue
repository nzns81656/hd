<template>

</template>

<script type="text/ecmascript-6">
import cubePage from "../../components/cube-page";
import { loginByUsername } from "../../api/login";

export default {
  components: {
    cubePage
  },
  data() {
    return {
      userName: "administrator",
      password: "111111",
      type: "password",
      loading: ""
    };
  },
  computed: {
    eye() {
      return {
        open: false,
        reverse: false
      };
    }
  },
  methods: {
    LoginIn() {
      this.loading.show();
      loginByUsername(this.userName, this.password).then(response => {
        if (response) {
          this.loading.hide();
          this.showAlert("登录成功");
        } else {
          this.loading.hide();
        }
      });
    },
    clearable() {
      this.userName = "";
    }
  },
  mounted() {
    this.loading = this.customToast("Loading...");
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
