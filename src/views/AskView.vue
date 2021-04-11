<template>
  <ListItem></ListItem>
</template>

<script>
import ListMixin from '../mixins/ListMixin'
export default {
  name: 'AskView',
  components: {
    ListItem: () => import('../components/common/ListItem')
  },
  mixins: [ListMixin]
}
</script>

<style scoped></style>
