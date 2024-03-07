<template>
  <div class="to-do-item">
    <div class="item-left">
      <input type="checkbox" :checked="item.completed" @change="changeCheck"/>
    </div>
    <input class="item" :class="{ completed: item.completed }" :disabled="!isEditing" v-model="item.title"
           v-on:keyup.enter="updateItem">
    <div class="item-right">
      <i class="fas fa-edit green" @click="isEditing = true"></i>
      <i class="fas fa-trash red" @click="deleteItem(item.id)"></i>
    </div>
  </div>
</template>

<script>

import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: 'ToDoItems',
  props: {
    initialItem: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore(),
        item = ref({...props.initialItem}),
        isEditing = ref(false);
    const updateItem = () => {
      store.commit('updateItem', {
        id: item.value.id,
        completed: item.value.completed,
        title: item.value.title
      });
      isEditing.value = false;
    }
    const deleteItem = (id) => {
      store.commit('deleteItem', {id});
    }
    const changeCheck = () => {
      item.value.completed = !item.value.completed;
      store.commit('updateItem', {
        id: item.value.id,
        completed: item.value.completed,
        title: item.value.title
      });
    }

    return {
      updateItem,
      deleteItem,
      changeCheck,
      item,
      isEditing,
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.to-do-item {
  margin-bottom: 10px;
  position: relative;
  width: 500px;
}

input.item {
  width: 100%;
  padding: 12px 15px 12px 35px;
  font-size: 20px;
  border: none;
  box-shadow: 6px 6px 8px #0a526d;
  border-radius: 20px 0 20px 0;
  border: 1px solid #80bdab;
  color: black;
  outline: none;
}

input.completed {
  text-decoration: line-through;
  color: #0075FF;
}

.item-right {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(-50%, -50%);
}


.item-left {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(50%, -50%);
}

.item-left input {
  border-radius: 50%;

}


i:hover {
  color: #017005;
  cursor: pointer;
}

i {
  margin-right: 4px;
}

i:last-of-type {
  margin-right: 0;
}

@media screen and (max-width: 600px) {
  .to-do-item {
    width: 100%;
  }
}
</style>
    