<template>
  <div id="connect">
    <center>
    <div>
      <img class="logo" src="/statics/logo.png" />
    </div>
  <div class= "login">
    <q-field icon="email">
      <q-input v-model="email" type="email"  float-label="Email" />
    </q-field>
    <q-field icon="account_box">
        <q-input v-model="password" type="password" float-label="Password" />
    </q-field>
  </div>
  <q-btn @click="$router.push('/layout')" type="submit" color="primary" class="loginbutton">Log in</q-btn>
</center>
</div>
</template>

<script>
import {
  QField,
  QToggle,
  QDatetime,
  QOptionGroup,
  QInput,
  QSelect,
  QChipsInput,
  QBtn,
  QRating
} from 'quasar'

export default {
  components: {
    QField,
    QToggle,
    QDatetime,
    QOptionGroup,
    QInput,
    QSelect,
    QChipsInput,
    QBtn,
    QRating
  },
  data () {
    return {
      email: '',
      date: null,
      rating: 0,
      password: '',
      error: false
    }
  }
}
</script>

<style>
.login {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 30px;

}
.loginbutton {
  width: 50%;
  margin-top: 30px;
}
</style>
