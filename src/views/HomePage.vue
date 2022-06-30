<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="tertiary" mode="md">
        <ion-title><b>M9 M10 M11</b></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content mode="ios">

      <ion-list lines="full" class="ion-no-padding">
        <ion-item-sliding color="danger">
          <ion-item button color="tertiary" class="ion-no-padding" expand="full" type="submit"
            routerLink='/tax-address-list'>
            <ion-grid class="ion-no-padding text-hidden">

              <ion-row class="ion-no-padding ion-align-items-center ion-padding-start ion-padding-vertical">
                <ion-col class="ion-padding-start">
                  <ion-row>
                    <ion-col size="8">
                      <ion-label color="dark">
                        <h2><b>M9 M11</b></h2>
                      </ion-label>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col size="8">
                      <ion-label color="medium">
                        <h3>หน้ารายการที่อยู่</h3>
                      </ion-label>
                    </ion-col>
                  </ion-row>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-item>
        </ion-item-sliding>
        <ion-item-sliding color="danger">
          <ion-item button color="tertiary" class="ion-no-padding" expand="full" type="submit"
            routerLink='/form-address'>
            <ion-grid class="ion-no-padding text-hidden">
              <ion-row class="ion-no-padding ion-align-items-center ion-padding-start ion-padding-vertical">
                <ion-col class="ion-padding-start">
                  <ion-row>
                    <ion-col size="8">
                      <ion-label color="dark">
                        <h2><b>M10</b></h2>
                      </ion-label>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col size="8">
                      <ion-label color="medium">
                        <h3>หน้าฟอร์มกรอกที่อยู่</h3>
                      </ion-label>
                    </ion-col>
                  </ion-row>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-item>

        </ion-item-sliding>
      </ion-list>
    </ion-content>

  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonItem,
  IonItemSliding,
  IonList,
  IonLabel,
  IonCol,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonGrid,
    IonItem,
    IonItemSliding,
    IonList,
    IonLabel,
    IonCol,
    IonRow,
    IonTitle,
    IonToolbar,
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
