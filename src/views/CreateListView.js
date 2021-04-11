import bus from '../utils/bus'
import ListView from './ListView'

export default function createListView(name) {
  return {
    // 재사용할 컴포넌트 옵션들이 들어갈 자리
    name,
    created() {
      bus.$emit('start:spinner')
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
        bus.$emit('end:spinner')
      }, 3000)
    },
    render(createElement) {
      return createElement(ListView)
    }
  }
}
