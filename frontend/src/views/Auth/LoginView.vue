<template>
   <v-container>
      <v-row justify="center">
         <v-col cols="12" sm="8" lg="6">
            <v-card class="elevetion-12">
               <v-toolbar dark color="primary" class="pl-4"> Login </v-toolbar>
               <v-card-text>
                  <v-form>
                     <v-text-field prepend-icon="mdi-account" name="email" label="Email" type="email"
                        v-model="email"></v-text-field>
                     <v-text-field prepend-icon="mdi-lock" name="password" label="Password" type="password"
                        v-model="password"></v-text-field>
                  </v-form>
               </v-card-text>
               <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary">Login</v-btn>
               </v-card-actions>
            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>
 
<script>
export default {
   name: 'LoginView',
   date() {
      return {
         email: "",
         password: ""
      }
   }
}
</script>