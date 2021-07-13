<template>
  <CFooter :fixed="false">
    <div>
      <a target="_blank">IAPI</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}}</span>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
