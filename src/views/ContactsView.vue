<template>
  <div id="contacts">
    <ul>
      <li>
        <a href="https://github.com/SterxovK" target="_blank"><i class="fab fa-git-square"></i>Github</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/sterxovk/" target="_blank"><i class="fab fa-linkedin"></i>Linkedin</a>
      </li>
      <li>
        <a href="https://t.me/Sterxovk" target="_blank"><i class="fab fa-telegram"></i>Telegram</a>
      </li>
    </ul>

  </div>
</template>
<script>

export default {
  name: 'ContactView',
  setup() {
    return {}
  }
}

</script>

<style scoped>
#contacts {
  background: -webkit-linear-gradient(90deg,#004c4c,#0a526d,#08401c); /* Chrome 10-25, Safari 5.1-6 */ background: linear-gradient(90deg,#004c4c,#0a526d,#08401c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 57px 0;
  font-size: 20px;
}

ul {
  list-style-type: none;
}

ul li {
  margin-bottom: 5px;
}

ul li a {
  text-decoration: none;
  color: #ffffff;
}

i {
  margin-right: 5px;
}

ul li a:hover {
  color: #666;
}
</style>