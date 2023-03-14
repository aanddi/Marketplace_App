<template>
   <v-container>
      <v-row>
         <v-col cols="6" offset="3">
            <h1 class="text--secondary mb-3 mt-3"> Orders </h1>
            <v-list subheader two-line flat>
               <v-list-item value="notifications">
                  <template v-slot:prepend="{ isActive }">
                     <v-list-item-action>
                        <v-checkbox :input-value="isActive" color="primary"></v-checkbox>
                     </v-list-item-action>
                  </template>
                  <v-list-item-title> Notifications </v-list-item-title>
                  <v-list-item-subtitle> Allow notifications </v-list-item-subtitle>
                  <template v-slot:append>
                     <v-list-item-action>
                        <v-btn class="primary"> Open </v-btn>
                     </v-list-item-action>
                  </template>
               </v-list-item>
            </v-list>
         </v-col>
      </v-row>
   </v-container>
</template>
   
<script>
export default {
   name: 'OrdersView',
   date() {
      return {

      }
   }
}
</script>