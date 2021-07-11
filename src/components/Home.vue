<template>
    <div class="home">
        <v-img
        dark
        max-height="500px"
        src="../assets/Black.png"
        >
            <v-layout fill-height align-center>
                <v-container>
                    <v-row align="center" justify="center" class="white--text">
                        <v-col cols="12">
                        <div
                            :class="{'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'title font-weight-bold': $vuetify.breakpoint.smAndDown}"
                        >Hi 👋🏻</div>
                        <div
                            :class="{'headline': $vuetify.breakpoint.smAndUp, 'subtitle-1': $vuetify.breakpoint.smAndDown}"
                        >I'm a Developer.</div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-layout>
        </v-img>
        <v-container class="mt-5">
            <v-layout wrap>
                <v-flex xs12>
                <div class="display-1 font-weight-bold" id="about">About</div>
                </v-flex>
                <v-flex xs12 mt-5>
                <div class="body-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                </v-flex>
            </v-layout>
            <v-layout wrap my-5>
                <v-flex xs12>
                    <div class="display-1 font-weight-bold" id="portfolio">Projects</div>
                </v-flex>
                <v-flex xs12 class="mt-5">
                    <v-layout wrap>
                    <template>
                        <v-flex xs12 sm6 md4>
                            <Project></Project>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <Project></Project>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <Project></Project>
                        </v-flex>
                    </template>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-layout wrap my-5>
                <v-flex xs12 mb-5>
                <div class="display-1 font-weight-bold" id="contact">Connect with me...</div>
                </v-flex>
                <template>
                    <v-flex sm6 md4 xs12>
                        <Contact />
                    </v-flex>
                    <v-flex sm6 md4 xs12>
                        <Contact />
                    </v-flex>
                    <v-flex sm6 md4 xs12>
                        <Contact />
                    </v-flex>
                    <v-flex sm6 md4 xs12>
                        <Contact />
                    </v-flex>
                </template>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import Project from './Project.vue';
    import Contact from './Contact.vue';
    export default {
        name: "Home",
        components: {
            Project,
            Contact
        }
    }
</script>

