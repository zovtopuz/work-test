<template>
  <div class="container">
    <div class="wrapper">
      <div class="plate-1"></div>
      <div class="plate-2">
        <h1 class="plate_text">Авторизация</h1>
        <form class="plate_auth" method="post">
          <!-- <p>{{ email }}</p> -->
          <!-- <p>{{ infoUs }}</p> -->
          <input placeholder="email" v-model="email" />
          <!-- <p>{{ password }}</p> -->
          <input
            type="password"
            name="auth_pass"
            placeholder="password"
            required
            v-model.trim="password"
          />
          <button v-on:click.prevent="findSucess" @click.prevent="allFunck">
            Увійти
          </button>
        </form>
      </div>
      <!-- <div class="plate-3">{{ users }}</div> -->
    </div>
  </div>
</template>

<script>
import Users from "/Users/zovtopuz/Documents/vue/vue-test/test-work/user.json";

export default {
  name: "Login",
  data() {
    return {
      message: "helllo",
      email: "",
      password: "",
      namr: "",
      users: Users,
      infoUs: false,
      usMail: [],
      usPass: [],
      usAll: [],
      usName: [],
      indexD: ""
    };
  },
  methods: {
    findInfo: function () {
      this.users.map((user) => {
        this.usMail.push(user.mail);
        this.usPass.push(user.pass);
        this.usName.push(user.name);
        this.usAll.push(user.mail + user.pass);
        console.log(this.usAll);
      });
    },
    findSucess: function () {
      this.usAll.find((us) => {
        if (us === this.email + this.password) {

          console.log("true", this.usName);
          this.infoUs = true;
          return true;
        } else {
          console.log("false");
          this.infoUs = false;
          return false;
        }
      });
    },
    indexName: function  () {
          this.indexD = this.usAll.findIndex( ix => ix === this.email + this.password)
          console.log(this.indexD);
          // this.name = this.usName[this.indexD]
          console.log(this.name)
          // this.name = localStorage.name;
          localStorage.setItem('name',  this.name = this.usName[this.indexD])
    },
    routerPath: function () {
      if (this.infoUs) {
        this.$router.push("/user");
      }
    },
    allFunck: function () {
      this.indexName();
      this.routerPath();
    }
  },
  mounted() {
    if(localStorage.name) this.name = localStorage.name;
  },
  created: function () {
    this.findInfo();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  color: #212121;
}
body {
  background-color: #bdbdbd;
}

.container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
.wrapper {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  height: auto;
  justify-content: center;
  align-items: center;
}
.plate-2 {
  background-color: #455a64;
  width: 100%;
  height: auto;
  border-radius: 20px;
  padding: 20px;
}
.plate_text {
  color: #cfd8dc;
  text-align: center;
  font-size: 40px;
}
.plate_auth {
  display: grid;
  justify-content: center;
}
input {
  margin: 10px;
  padding: 10px;
}
button {
  margin: 10px;
  padding: 10px;
}
</style>
