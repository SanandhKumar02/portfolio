<template>
    <v-card flat dark color="transparent" max-width="350px" class="card">
        <v-card-title>
            <v-row>
                <v-flex>
                    <v-card
                        elevation="5"
                        style="border-radius: 20px"
                        width="100px"
                        height="100px"
                    >
                        <v-img src="../assets/FZ.png" />
                    </v-card>
                </v-flex>
                <v-flex xs7>
                    <div>Project 1</div>
                    <template>
                        <v-btn icon>
                            <i class="fas fa-globe fa-2x"></i>
                        </v-btn>
                    </template>
                </v-flex>
            </v-row>
        </v-card-title>
        <v-card-text color="white">
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
            <div class="title mt-2">Technologies Used</div>
            <v-layout>
                <template>
                    <v-flex xs3>
                        <div class="text-center">
                            <v-btn icon>
                                <i class="fab fa-html5 fa-2x"></i>
                            </v-btn>
                            <div class="caption">HTML5</div>
                        </div>
                    </v-flex>
                    <v-flex xs3>
                        <div class="text-center">
                            <v-btn icon>
                                <i class="fab fa-css3-alt fa-2x"></i>
                            </v-btn>
                            <div class="caption">CSS3</div>
                        </div>
                    </v-flex>
                </template>
            </v-layout>
            <div>
                <div class="title mt-2">Code</div>
                <v-btn icon>
                    <i class="fab fa-github fa-2x"></i>
                </v-btn>
            </div>
        </v-card-text>
    </v-card>
</template>

