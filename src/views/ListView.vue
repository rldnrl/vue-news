<template>
  <ListItem></ListItem>
</template>

<script>
export default {
  name: 'ListView',
  components: {
    ListItem: () => import('../components/common/ListItem')
  }
}
</script>

<style scoped></style>
