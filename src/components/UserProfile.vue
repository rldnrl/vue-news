<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-container__user-description">
      <slot name="username">
        <!-- Area to be defined in the parent component -->
      </slot>
      <div class="time">
        <slot name="time">
          <!-- Area to be defined in the parent component -->
        </slot>
        <slot name="karma">
          <!-- Area to be defined in the parent component -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
    info: Object
  }
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
