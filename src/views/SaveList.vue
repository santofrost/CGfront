<template>
  <v-row justify="center">
    <v-dialog
      persistent
      v-model="dialog"
      max-width="600px"
    >
      <dialog-card title="Save favourites">
        <v-row>
          <v-text-field
            v-model="listName"
            label="List name"
          />
        </v-row>

        <template v-slot:card-actions>
          <v-btn
            color="success"
            text
            @click="save"
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
        </template>
      </dialog-card>
    </v-dialog>
  </v-row>
</template>

<script>
import DialogCard from '../components/DialogCard'

  export default {
    name: 'ShowUser',

    components: {DialogCard},

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
      save () {
        this.$emit('save', this.listName)
        this.listName = null
      },

      close () {
        this.$emit('close')
        this.listName = null
      }
    }
  }
</script>
