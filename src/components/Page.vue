<template>
  <v-container>
    <page-title :title="title" />
    <slot></slot>
  </v-container>
</template>

<script>
import PageTitle from './PageTitle'

  export default {
    name: 'Page',

    components: {PageTitle},

    props: {
      title: { type: String, required: true }
    },
  }
</script>
