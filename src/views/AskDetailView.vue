<template>
  <div>
    <section>
      <UserProfile :info="askDetail">
        <router-link slot="username" :to="`/user/${askDetail.user}`">
          {{ askDetail.user }}
        </router-link>
        <template slot="time">{{ 'Posted ' + askDetail.time_ago }}</template>
      </UserProfile>
    </section>
    <section>
      <h2>{{ askDetail.title }}</h2>
    </section>
    <section>
      <div v-html="askDetail.content" />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AskDetailView',
  components: {
    UserProfile: () => import('../components/UserProfile')
  },
  computed: {
    ...mapState(['askDetail'])
  },
  created() {
    const { id: itemId } = this.$route.params
    this.$store.dispatch('FETCH_ASK_DETAIL', itemId)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  &__user-description {
    padding-left: 1rem;
    > .time {
      font-size: 11.2px;
    }
  }
}
.fa-user {
  font-size: 40px;
}
</style>
