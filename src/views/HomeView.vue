<template>
  <div class="home">
    <ToDoHeader />
    <ToDoItems />
  </div>
</template>

<script>



import ToDoHeader from "@/components/header/ToDoHeader.vue";
import ToDoItems from "@/components/body/ToDoItems.vue";

export default {
  name: 'HomeView',
  components: {
    ToDoItems, ToDoHeader
  }
}
</script>
