<template>
     <v-dialog v-model="modal" width="400px">
         <template v-slot:activator="{ props }">
             <v-btn v-bind="props" color="warning">
                 Edit</v-btn></template>
         <v-card class="pa-3">
             <v-row justify="center">
                 <v-col cols="12">
                     <v-card-title>
                         <h1 class="text--primary">Edit Ad</h1>
                     </v-card-title>
                 </v-col>
             </v-row>
 
             <v-row justify="center">
                 <v-col cols="12">
                     <v-card-text>
                         <v-text-field
                             name="title"
                             label="Title"
                             type="text"
                             v-model="editedTitle"
                         >
                         </v-text-field>
                         <v-textarea
                             name="desc"
                             label="Description"
                             type="text"
                             v-model="editedDesc"
                             class="mb-3"
                         ></v-textarea>
                     </v-card-text>
                 </v-col>
             </v-row>
 
             <v-row justify="center">
                 <v-col cols="12">
                     <v-card-actions>
                         <v-spacer></v-spacer>
                         <v-btn>Cancel</v-btn>
                         <v-btn color="success">Save</v-btn>
                     </v-card-actions>
                 </v-col>
             </v-row>
         </v-card>
     </v-dialog>
 </template>
 
 <script>
 export default {
     data() {
         return {
             modal: false,
             editedTitle: "",
             editedDesc: ""
         }
     }
 }
 </script>