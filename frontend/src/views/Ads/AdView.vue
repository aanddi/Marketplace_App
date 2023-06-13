<template>
	<v-container>
	    <v-row>
		   <v-col cols="12">
			  <v-card class="mt-5">
				 <v-img height="300px" :src="ad.src"></v-img>
				 <v-card-text>
					<h1 class="text--primary mb-3">{{ ad.title }}</h1>
					<p>
					    {{ ad.desc }}
					</p>
				 </v-card-text>
				 <v-card-actions>
					<v-spacer></v-spacer>
					<modal-dialog :ad="ad" v-if="isOwner"></modal-dialog>
					<v-btn class="success" color="green">Buy</v-btn>
				 </v-card-actions>
			  </v-card>
		   </v-col>
	    </v-row>
	</v-container>
 </template>
 <script>
 import EditAdModal from './EditAdModal'
 export default {
	props: ['id'],
	computed: {
	    ad() {
		   const id = this.id
		   return this.$store.getters.adById(id)
	    }
	},
	components: {
	    'modal-dialog': EditAdModal
	}
 };
 </script>