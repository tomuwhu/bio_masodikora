<template>
  <div id="app">
    Szeva 
    <br>
    <input v-model="i1" @change="add()">
    <button @click="add()">Katt ide</button>
    <div :id="i" :key="i" v-for="(elem,i) in t" class="cuccos">
      <hr>
      <table>
        <td class="betus" :key="j" v-for="(betu,j) in elem">{{betu}} - {{betu.toUpperCase()}}</td>
      </table>
    </div>  
    <hr>
    <h2>Amőba</h2>
    <table>
      <tr :key="i" v-for="(sor,i) in amoba">
        <td :class="'a '+cella" 
            :key="j" 
            v-for="(cella,j) in sor"
            @click="f(i,j)">{{cella}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    i1: '',
    t: [],
    v: 'X',
    amoba: Array(20).fill(0).map( () => Array(20).fill(0).map( () => ' '))
  }),
  methods: {
    f(x,y) {
      this.$set(this.amoba[x],y,this.v=this.v==="X"?"O":"X")
    },
    add() {
      this.t.push(this.i1)
      this.t = this.t.sort( (a,b) => a.localeCompare(b) )
      this.i1=""
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Felipa');
td.betus {
  border: solid 1px #47856d;
  color: #133846;
  width: 50px;
  height: 20px;
  text-align: center;
}
td.a {
  border: solid 1px #47856d;
  color: #133846;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
}
td.X {
  background-color: #77aaf7af; 
}
td.O {
  background-color: #f77659; 
}
h2 {
  font-family: 'Felipa', cursive;
  color:#207088;
  text-shadow: 1px 1px 3px;
}
div.cuccos {
  box-shadow: 1px 1px 4px;
  border-radius: 12px; 
  padding: 10px;
  margin:7px ;
  background-color: #ddd7c7; 
}
</style>
