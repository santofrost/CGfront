<template>
  <v-row justify="center">
    <v-dialog
      persistent
      v-model="dialog"
    >
      <dialog-card v-if="list.name" :title="list.name">
        <v-data-table
          :headers="headers"
          :items="list.list"
          :items-per-page="100"
          class="elevation-1 mt-5"
          item-key="login.username"
        >
          <template v-slot:top>
            <v-btn
              class="ma-3"
              @click="exportCsv(list.list)"
            >
              Export CSV
              <v-icon
                color="green"
                right
                dark
              >
                mdi-cloud-download
              </v-icon>
            </v-btn>
          </template>
        </v-data-table>

        <template v-slot:card-actions>
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
import Csv from '../mixins/Csv'
  export default {
    name: 'ShowList',

    components: {DialogCard},
    mixins: [Csv],

    props: {
      show: { type: Boolean, required: true },
      list: { type: Object, required: true }
    },

    data: () => ({
      dialog: false,
      headers: [
        { text: 'Gender', sortable: false, value: 'gender' },
        { text: 'Name', sortable: false, value: 'name.first' },
        { text: 'Email', sortable: false, value: 'email' },
        { text: 'Country', sortable: false, value: 'nat' },
        { text: 'Birth date', sortable: false, value: 'dob.date' },
        { text: 'Registry date', sortable: false, value: 'registered.date' },
      ],
    }),
    
    watch: {
      show() {
        this.dialog = this.show
      }
    },
  }
</script>
