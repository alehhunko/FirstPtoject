<template>
  <div class="develop">
    <h1>Простой калькулятор</h1>
    <a-input
      style="width: 300px; background-color: gray"
      type="number"
      v-model="first"
    ></a-input>
    <br/>
    <a-select v-model="sign">
      <a-select-option value="+">+</a-select-option>
      <a-select-option value="-">-</a-select-option>
      <a-select-option value="*">*</a-select-option>
      <a-select-option value="/">/</a-select-option>
    </a-select>
    <br/>
    <a-input
      style="width: 300px; background-color: gray"
      type="number"
      v-model="second"
    ></a-input>
    <br/>
    <div><a-button type="danger" @click="suma">РАВНО</a-button>={{ culc }}</div>
    <br/>
    <p>Комментарий из Services "{{coment}}"</p>
  </div>
</template>

<script>
export default {
  name: "develop",
  data() {
    return {
      first: 0,
      second: 0,
      sign: "+",
      culc: 0,
    };
  },
  methods: {
    suma() {
      if (this.sign === 0) {
        this.culc = 0;
      } else {
        this.culc = eval(this.first + this.sign + this.second);
      }
    },
  },
  computed: {
   coment () {
      return this.$store.state.newpost;
    }
  }
};
</script>
