<template>
  <div>
    <ul class="item-list">
      <li v-for="item in listItem" :key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="item-title">
            <template v-if="isNewsPage">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else-if="isAskPage">
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ListMixin from '../../mixins/ListMixin'
export default {
  name: 'ListItem',
  computed: {
    isNewsPage() {
      return this.$route.name === 'news'
    },
    isAskPage() {
      return this.$route.name === 'ask'
    },
    listItem() {
      return this.$store.state.list
    }
  },
  mixins: [ListMixin]
}
</script>

<style lang="scss" scoped>
.item-list {
  > .post {
    display: flex;
    align-items: center;
    border: 1px solid #eee;
    > .points {
      width: 80px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #42b883;
    }
    .link-text {
      color: #828282;
    }
  }
}
</style>
