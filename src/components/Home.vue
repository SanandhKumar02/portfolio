<template>
    <div class="home">
        <v-img
        dark
        max-height="500px"
        src="../assets/SK.jpeg"
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
                <!-- <div
                    class="body-1 mt-3"
                >Working on starting an app development business and always looking for new clients! Would love to talk to you about your idea.</div> -->
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
        },
        data: () => ({
            aboutText:
                "I enjoy building apps in my free time when I'm not doing much. Looking to get into machine learning and trying to automate as many things as possible. Love to encourage new coders that they can do it too! I'm not very smart, just curious to see how things work. I'm also not that good of a writer as you can see. lol. Anyways, you are free to download any of the code thats on my github! And I hope you have a great day!",
            apps: [
                {
                name: "Food Vision",
                price: "FREE",
                logo: "food-vision-logo.png",
                platforms: [
                    {
                    name: "apple",
                    icon: "mdi-apple",
                    link: "https://apps.apple.com/us/app/food-vision/id1437083324"
                    }
                ],
                description:
                    "One day my friend and I were eating at a restaurant and she suddenly asked me what an item looks like. I looked up at her an told her I didnt know. Then she told me why dont you make an app where you can see the pictures of food thats on the menu? Then I made Food Vision. :)",
                technologies: [
                    {
                    name: "Swift",
                    icon: "mdi-language-swift",
                    link: ""
                    },
                    {
                    name: "XCode",
                    icon: "mdi-apple-ios",
                    link: ""
                    },
                    {
                    name: "Firebase",
                    icon: "mdi-firebase",
                    link: ""
                    }
                ],
                code: {
                    name: "github",
                    icon: "mdi-github",
                    link: ""
                }
                }
            ],
            contactLinks: [
                {
                name: "Email",
                value: "uzirthapa@gmail.com",
                link: "mailto:uzirthapa@gmail.com",
                icon: "mdi-email"
                },
                {
                name: "LinkedIn",
                value: "Uzir Thapa",
                link: "https://www.linkedin.com/in/uzir-thapa/",
                icon: "mdi-linkedin"
                },
                {
                name: "YouTube",
                value: "Uzir Thapa",
                link: "https://www.youtube.com/channel/UCd7Qo_G7c8Sp4-TwG_ObSvQ",
                icon: "mdi-youtube"
                },
                {
                name: "Github",
                value: "uzirthapa",
                link: "https://github.com/uzirthapa/",
                icon: "mdi-github"
                },
                {
                name: "Facebook",
                value: "Uzir Thapa",
                link: "https://www.facebook.com/uzirthapa",
                icon: "mdi-facebook"
                },
                {
                name: "Instagram",
                value: "@uzir.thapa",
                link: "https://www.instagram.com/uzir.thapa/",
                icon: "mdi-instagram"
                }
            ]
        }),
    }
</script>

