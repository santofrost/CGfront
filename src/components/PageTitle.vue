<template>
  <v-row class="text-center">
    <div class="transition-swing text-h1 mt-1 font-weight-regular">
      {{ title }}
    </div>
  </v-row>
</template>

<script>
  export default {
    name: 'PageTitle',

    props: {
      title: { type: String, required: true }
    },
  }
</script>
