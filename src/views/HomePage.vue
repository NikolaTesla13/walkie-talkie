<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-row>
          <ion-title>Blank</ion-title>
          <div v-if="user == null">
            <ion-button color="danger" v-on:click="login()">login</ion-button>
          </div>
          <ion-row v-else>
            <ion-button color="danger" v-on:click="logout()">logout</ion-button>
          </ion-row>
        </ion-row>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div>
        <ion-button v-on:click="count++">Increment</ion-button>
        <h1>Count: {{ count }}</h1>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
  },
  data: function () {
    return {
      count: 0,
      user: getAuth().currentUser,
    };
  },
  methods: {
    login() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      signInWithPopup(auth, provider)
        .then((result) => {
          this.user = result.user;
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    },

    logout() {
      const auth = getAuth();
      auth.signOut();
      this.user = null;
    },
  },
});
</script>
