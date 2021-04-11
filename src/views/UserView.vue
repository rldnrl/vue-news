<template>
  <div>
    <UserProfile :info="user">
      <div slot="username">{{ user.id }}</div>
      <span slot="time">{{ 'Joined ' + user.created }}, </span>
      <span slot="karma">{{ user.karma }}</span>
    </UserProfile>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'UserView',
  components: {
    UserProfile: () => import('../components/UserProfile')
  },
  computed: {
    ...mapState(['user'])
  },
  created() {
    const { id: userName } = this.$route.params
    this.$store.dispatch('FETCH_USERINFO', userName)
  }
}
</script>

<style scoped></style>
