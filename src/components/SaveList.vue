<template>
  <v-row justify="center">
    <v-dialog
      persistent
      v-model="dialog"
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Save favourites</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-text-field
                v-model="listName"
                label="List name"
              ></v-text-field>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            text
            @click="$emit('save', listName)"
          >
            Save
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="$emit('close')"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name: 'ShowUser',

    props: {
      show: { type: Boolean, required: true }
    },

    data: () => ({
      dialog: false,
      listName: null
    }),
    
    watch: {
      show() {
        this.dialog = this.show
      }
    },

    methods: {
    }
  }
</script>
