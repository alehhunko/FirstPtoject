<template>
   <div class="develop">
      <h1>Простой калькулятор</h1>
      <input type="number" v-model="first"></input>
      <br></br>
      <select v-model="sign">
         <option>+</option>
         <option>-</option>
         <option>*</option>
         <option>/</option>
      </select>
      <br></br>
      <input type="number" v-model="second"></input>
      <br></br>
      <div><button @click="suma">РАВНО</button>={{culc}}</div>
   </div>
</template>

<script>
 /* eslint-disable indent, no-trailing-spaces, block-spacing, space-infix-ops, no-eval, semi, brace-style */ 
export default {
   name: 'develop',
   data() {
     return { 
       first: 0, 
       second: 0, 
       sign: 0, 
       culc: 0,
       };
  },
  methods: {
    suma() { 
       if (this.sign===0) {
          this.culc=0;
          }
       else {
          this.culc=eval(this.first + this.sign + this.second);
          }
    },
  },
};
</script>
