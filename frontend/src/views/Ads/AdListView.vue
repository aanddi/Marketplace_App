<template>
    <v-container>
        <h1 class="text--secondary mb-3 mt-3 ">My ads</h1>
        <v-card v-for="ad in myAds" :key="ad.id" class="mx-auto mb-5" max-width="1000">
            <v-row class="ma-2">
                <v-img :src="ad.src" height="175px"></v-img>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-card-text>
                    <h2 class="text--primary">{{ ad.title }}</h2>
                    <p>{{ ad.desc }}</p>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" variant="text" :to="'/ad/' + ad.id">
                        Open
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
export default {
    computed: {
        myAds() {
            return this.$store.getters.myAds
        }
    }
};
</script>