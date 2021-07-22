<template>
  <page title="Favourites lists">
    <v-data-table
      :headers="headers"
      :items="lists"
      :items-per-page="10"
      class="elevation-1 mt-5"
      item-key="name"
    >
      <template v-slot:item.options="{ item }">
        <v-icon
          large
          color="primary"
          @click="showList(item)"
        >
          mdi-eye
        </v-icon>
      </template>
    </v-data-table>
    <show-list
      :show="showDialog"
      :list="selectedList"
      @close="closeShowList"
    />
  </page>
</template>

<script>
import Page from '../components/Page'
import ShowList from './ShowList'

  export default {
    name: 'Favourites',

    components: {Page, ShowList},

    data: () => ({
      showDialog: false,
      selectedList: {},
      headers: [
        { text: 'Name', sortable: false, value: 'name' },
        { text: 'Options', sortable: false, value: 'options' }
      ],
      lists: []
    }),

    created () {
      this.getData()
    },

    methods: {
      getData () {
        this.$http.get(`http://localhost:3000/api/favourites`)
          .then(response => {
            this.lists = response.data
          })
      },

      showList (item) {
        this.showDialog = true
        this.selectedList = item
      },

      closeShowList () {
        this.showDialog = false
        this.selectedList = {}
      }
    }
  }
</script>
