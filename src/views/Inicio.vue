<template>
  <div>
        <Login />
        <router-view></router-view>
  </div>
</template>

<script>
import Login from "@/components/Login"
export default {
  components: {
    Login,
  }
}
</script>