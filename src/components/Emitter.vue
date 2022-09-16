<template>
  <button @click="testPush()">test</button>
</template>
<script>
export default {
  inject: ['emitter'],
  methods: {
    testPush() {
      this.emitter.emit('PushEmit', '123')
    }
  }
}
</script>
