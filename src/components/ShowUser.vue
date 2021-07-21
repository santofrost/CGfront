<template>
  <v-row justify="center">
    <v-dialog
      persistent
      v-model="dialog"
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="2">
                <v-img
                  :src="user.picture && user.picture.medium"
                ></v-img>
              </v-col>
              <v-col cols="8">
                <span>Mapa</span>
              </v-col>
              <v-col cols="2">
                <v-icon
                  large
                  color="yellow darken-2"
                >
                  mdi-star-outline
                </v-icon>
              </v-col>
              <v-col cols="4">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      label
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ user.name && `${user.name.title} ${user.name.first} ${user.name.last}` }}
                    </v-chip>
                  </template>
                  <span>Name</span>
                </v-tooltip>
              </v-col>
              <v-col cols="3">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      label
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ user.login && user.login.username }}
                    </v-chip>
                  </template>
                  <span>Username</span>
                </v-tooltip>
              </v-col>
              <v-col cols="5">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      label
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ user.email }}
                    </v-chip>
                  </template>
                  <span>Email</span>
                </v-tooltip>
              </v-col>
              <v-col cols="5">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      label
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ user.location && `${user.location.city}, ${user.location.country} (${user.location.postcode})` }}
                    </v-chip>
                  </template>
                  <span>City</span>
                </v-tooltip>
              </v-col>
              <v-col cols="5">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      label
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ user.location && `${user.location.street.name}, ${user.location.street.number}` }}
                    </v-chip>
                  </template>
                  <span>Street</span>
                </v-tooltip>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
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
      show: { type: Boolean, required: true },
      user: { type: Object, required: true }
    },

    data: () => ({
      dialog: false
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
