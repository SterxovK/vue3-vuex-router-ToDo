<template>
  <div id="to-do-header">
    <div class="container">
      <h1>Welcome to Task Manager</h1>
      <ToDoInput/>
      <p>Completed {{ totalCompletedItems }} of {{ totalItems }} tasks</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import ToDoInput from '../header/ToDoInput.vue';

export default {
  name: 'ToDoHeader',
  components: {
    ToDoInput
  }, computed: {
    ...mapGetters(['totalItems', 'totalCompletedItems'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#to-do-header {
  background: -webkit-linear-gradient(90deg,#08401c,#004c4c,#0a526d); /* Chrome 10-25, Safari 5.1-6 */ background: linear-gradient(90deg,#08401c,#004c4c,#0a526d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  text-align: center;
  padding: 30px 0;
  color: white;
}

#to-do-header h1 {
  font-size: 40px;
}

p {
  margin-bottom: 0;
}
</style>
  