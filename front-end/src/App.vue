<template>
  <div id="app">
    Szeva 
    <br>
    <input v-model="i1" @change="add()">
    <button @click="add()">Katt ide</button>
    <div :id="i" :key="i" v-for="(elem,i) in t">
      <hr>
      <table>
        <td :key="j" v-for="(betu,j) in elem">{{betu}} - {{betu.toUpperCase()}}</td>
      </table>
    </div>  
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    i1: '',
    t: [],
  }),
  methods: {
    add() {
      this.t.push(this.i1)
      this.t = this.t.sort( (a,b) => a.localeCompare(b) )
      this.i1=""
    }
  }
}
</script>

<style>
td {
  border: solid 1px #47856d;
  color: #133846;
  width: 50px;
  height: 20px;
  text-align: center;
}
</style>
