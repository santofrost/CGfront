<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">{{ title }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <slot></slot>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <slot name="card-actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'DialogCard',

    props: {
      title: { type: String, required: true }
    }
  }
</script>
