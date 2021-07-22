<template>
  <page title="Users">
    <v-row class="text-center">
      <v-col cols="12">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="font-weight-bold">Filter</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-select
                v-model="filter.gender"
                :items="genders"
                label="Gender"
                @change="getData"
              />
              <v-subheader class="pl-0">
                Age
              </v-subheader>
              <v-slider
                v-model="filter.age"
                thumb-label
                ticks
              />
              <v-text-field
                v-model="filter.nat"
                label="Country"
                @change="getData"
              />
              <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="error"
                @click="clearFilter"
              >
                Clear
              </v-btn>
            </v-card-actions>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-data-table
      show-select
      v-model="selectedUsers"
      :headers="headers"
      :items="users"
      :items-per-page="10"
      class="elevation-1 mt-5"
      item-key="login.username"
    >
      <template v-slot:top>
        <v-btn
          class="ma-3"
          @click="exportCsv(selectedUsers)"
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
        <v-btn
          class="ma-3"
          @click="showNewList"
        >
          Save favourites
          <v-icon
            color="red"
            right
            dark
          >
            mdi-heart
          </v-icon>
        </v-btn>
      </template>

      <template v-slot:item.options="{ item }">
        <v-icon
          large
          color="primary"
          @click="showUser(item)"
        >
          mdi-eye
        </v-icon>
      </template>
    </v-data-table>
    <show-user
      :show="showDialog"
      :user="selectedUser"
      @close="closeShowUser"
    />
    <save-list
      :show="showListDialog"
      @save="saveFavourites"
      @close="closeNewList"
    />
  </page>
</template>

<script>
import Page from '../components/Page'
import ShowUser from './ShowUser'
import SaveList from './SaveList'
import Csv from '../mixins/Csv'
import moment from 'moment'

  export default {
    name: 'Users',
    mixins: [Csv],

    components: {Page, ShowUser, SaveList},

    data: () => ({
      showDialog: false,
      showListDialog: false,
      selectedUsers: [],
      selectedUser: {},
      genders: [{
          value: null,
          text: 'Select an option'
        },{
          value: 'male',
          text: 'male'
        },{
          value: 'female',
          text: 'female'
      }],
      filter: {
        gender: null,
        age: null,
        nat: null
      },
      headers: [
        { text: 'Gender', sortable: false, value: 'gender' },
        { text: 'Name', sortable: false, value: 'name.first' },
        { text: 'Email', sortable: false, value: 'email' },
        { text: 'Country', sortable: false, value: 'nat' },
        { text: 'Birth date', sortable: false, value: 'dob.date' },
        { text: 'Registry date', sortable: false, value: 'registered.date' },
        { text: 'Options', sortable: false, value: 'options' },
      ],
      users: [],
      allUsers: []
    }),

    computed: {
      url() {
        let url = ''
        url += this.filter.gender ? `&gender=${this.filter.gender}` : ''
        url += this.filter.nat ? `&nat=${this.filter.nat}` : ''
        return url
      }
    },

    watch: {
      'filter.age'() {
        this.filterAge()
      }
    },

    created () {
      this.getData()
    },

    methods: {
      getData () {
        this.$http.get(`https://randomuser.me/api/?results=100${this.url}`)
          .then(response => {
            this.users = response.data.results.map(item => {
              item.registered.date = moment(item.registered.date).format('DD/MM/YYYY')
              item.dob.date = moment(item.dob.date).format('DD/MM/YYYY')
              return item
            })
            this.allUsers = this.users
            this.filterAge()
          })
      },

      filterAge () {
        if (this.filter.age) {
          let age = this.filter.age
          this.users = this.allUsers.filter(item => item.dob.age === age)
        } else {
          this.users = this.allUsers
        }
      },

      showUser (item) {
        this.showDialog = true
        this.selectedUser = item
        this.selectedUser.added = this.selectedUsers.find(selected => selected.login.uuid === item.login.uuid)
      },

      closeShowUser () {
        this.showDialog = false
        this.selectedUser = {}
      },

      showNewList () {
        this.showListDialog = true
      },

      closeNewList () {
        this.showListDialog = false
      },

      clearFilter () {
        this.filter = {
          gender: null,
          age: null,
          nat: null
        }
        this.getData()
      },

      saveFavourites (name) {
        this.showListDialog = false
        this.$http.post(`http://localhost:3000/api/favourites`, { name: name, list: this.formatUsers(this.selectedUsers) })
          .then(response => {
            this.selectedUsers = []
            console.log(response)
          })
      },

      formatUsers (list) {
        return list.map(item => {
          return {
            gender: item.gender,
            name: { first: item.name.first },
            email: item.email,
            nat: item.nat,
            dob: { date: item.dob.date },
            registered: {date: item.registered.date }
          }
        })
      }
    }
  }
</script>
