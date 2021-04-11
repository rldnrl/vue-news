<template>
  <ListItem></ListItem>
</template>

<script>
import ListMixin from '../mixins/ListMixin'
export default {
  name: 'NewsView',
  components: {
    ListItem: () => import('../components/common/ListItem')
  },
  mixins: [ListMixin]
}
</script>

<style scoped></style>
