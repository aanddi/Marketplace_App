<template>
   <v-container>
       <v-row>
           <v-col cols="6" offset="3">
               <h1 class="text--secondary mb-3 mt-3">Orders</h1>
               <v-list subheader two-line flat>
                   <v-list-item v-for="order in orders"
   :key="order.id">
                       <template>
                           <v-list-item-action>
                               <v-checkbox :input-value="order.done" color="primary" @click="markDone(order)"></v-checkbox>
                           </v-list-item-action>
                       </template>
                       <v-list-item-title>{{ order.name }}</v-list-item-title>
                       <v-list-item-subtitle>>{{ order.phone }}</v-list-item-subtitle>
                       <template v-slot:append>
                               <v-list-item-action>
         <v-btn :to="'/ad/' + order.adId" class="primary">Open</v-btn>
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
   data() {
       // return {
       //     orders: [
       //         {
       //             id: "123",
       //             name: "Kostya",
       //             phone: "+7(978)000-00-05",
       //             adId: "1",
       //             done: true
       //         }
       //     ]
       // }
   },
   methods: {
       markDone(order) {
           order.done = !order.done
           console.log(order.done)
       }
   },
   computed: {
       orders() {
           return this.$store.getters.orders
       }
   }
}
</script>