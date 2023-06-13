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
                         <v-text-field name="title" label="Title" type="text" v-model="editedTitle">
                         </v-text-field>
                         <v-textarea name="desc" label="Description" type="text" v-model="editedDesc"
                             class="mb-3"></v-textarea>
                     </v-card-text>
                 </v-col>
             </v-row>
 
             <v-row justify="center">
                 <v-col cols="12">
                     <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn @click="onCancel">Cancel</v-btn>
                     <v-btn color="success" @click="onSave">Save</v-btn>
                     </v-card-actions>
                 </v-col>
             </v-row>
         </v-card>
     </v-dialog>
 </template>
 
 <script>
 export default {
     props: ['ad'],
     data() {
         return {
             modal: false,
             editedTitle: this.ad.title,
             editedDesc: this.ad.desc
         }
     },
     methods: {
         onCancel() {
             this.editedTitle = this.ad.title
             this.editedDesc = this.ad.desc
             this.modal = false
         },
         onSave() {
             if (this.editedTitle !== '' && this.editedDesc !== '') {
                 this.$store.dispatch('updateAd', {
                     title: this.editedTitle,
                     desc: this.editedDesc,
                     id: this.ad.id
                 })
                 this.modal = false
             }
         },
         isOwner() {
             return this.ad.ownerId === this.$store.getters.user.id
         }
     }
 }
 </script>