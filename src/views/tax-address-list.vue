<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="tertiary">
                <ion-buttons slot="start">
                    <ion-back-button color="primary" default-href="" text="&nbsp;&nbsp;ที่อยู่ออกใบกำกับภาษี">
                    </ion-back-button>
                </ion-buttons>
                <ion-title color="danger"></ion-title>
                <ion-icon @click="() => router.push('/form-address/origin')" color="danger" slot="end"
                    style="font-size: 1.5rem; margin-right: 0.5rem" :src="require('../assets/icon/add_location.svg')">
                </ion-icon>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <div id="container" v-if="isStored === 'no'" style="margin-top: 10px">
                <ion-card color="tertiary">
                    <ion-card-content style="margin: 0.5rem; padding-bottom: 1.5rem" class="ion-no-padding">
                        <ion-card-header class="ion-no-padding">
                            <ion-card-title style="font-size: 20px">สร้างที่อยู่ของคุณ</ion-card-title>
                            <ion-item color="tertiary" lines="none" style="margin-top: 8px; margin-bottom:2rem;">
                                <ion-note style="font-size: 16px">
                                    สร้างที่อยู่ของคุณเพื่อเอาไปใช้ในส่วนต่างๆภายในแอพพลิเคชัน
                                </ion-note>
                            </ion-item>
                        </ion-card-header>
                        <ion-button expand="full" @click="() => router.push('/form-address/origin')"> สร้างที่อยู่
                        </ion-button>
                    </ion-card-content>
                </ion-card>
                <ion-img :src="require('../assets/imgs/addpinmap@3x.png')" style="height: 180px; margin-top: 4rem" />
            </div>

            <div id="container" v-else-if="isStored === 'yes'">
                <ion-item-divider style="padding-top: 0.5rem" color="light">
                    <ion-label style="font-weight: lighter;">
                        ที่อยู่ที่ส่งของ
                    </ion-label>
                </ion-item-divider>
                <ion-card style="margin-top: 1rem;">
                    <ion-list v-for="p in payload" :key="p.key">
                        <ion-item lines="none" color="tertiary" v-if="p.default">
                            <ion-icon color="danger" :src="require('../assets/icon/receipt-outline.svg')"></ion-icon>
                            <ion-label style="padding-left: 20px">
                                {{ p.title }}
                                <p>
                                    <ion-text color="medium">{{ p.address }} {{ p.subDistrict }} {{ p.district }}
                                        {{ p.province }} {{ p.postCode }}</ion-text>
                                </p>
                            </ion-label>
                            <ion-note @click="changeDefaults(p.key)" interface="action-sheet" button
                                style="font-size: 15px; padding-top: 15%">
                                เปลี่ยน
                            </ion-note>
                        </ion-item>
                    </ion-list>
                    <ion-item-divider style="padding-top: 0.5rem" color="light">
                        <ion-label style="font-weight: lighter;">
                            ที่อยู่ที่เคยสร้างไว้
                        </ion-label>
                    </ion-item-divider>

                    <ion-list v-for="p in payload" :key="p.key">
                        <ion-item-sliding>
                            <ion-item lines="full" color="tertiary" button @click="onEdit(p.key)">
                                <ion-label>
                                    {{ p.title }}
                                    <p>
                                        <ion-text color="medium">{{ p.address }} {{ p.subDistrict }} {{ p.district }}
                                            {{ p.province }} {{ p.postCode }}</ion-text>
                                    </p>
                                </ion-label>
                            </ion-item>

                            <ion-item-options side="end">
                                <ion-item-option color="danger" :disabled="p.default" @click="onRemoveData(p.key)">
                                    {{ p.default ? "ค่าเริ่มต้น" : "ลบ" }}</ion-item-option>
                            </ion-item-options>
                        </ion-item-sliding>
                    </ion-list>

                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonCard,
    IonCardHeader,
    IonImg,
    IonCardTitle,
    IonIcon,
    IonItem,
    IonNote,
    IonButton,
    IonCardContent,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
    IonItemSliding,
    IonList,
    IonItemOptions,
    actionSheetController,
    IonItemDivider,
    IonLabel,
    IonText,
    IonItemOption,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { api } from "../Api"
export default defineComponent({
    components: {
        IonPage,
        IonCard,
        IonCardHeader,
        IonImg,
        IonCardTitle,
        IonIcon,
        IonItem,
        IonNote,
        IonButton,
        IonCardContent,
        IonToolbar,
        IonHeader,
        IonTitle,
        IonContent,
        IonBackButton,
        IonButtons,
        IonItemSliding,
        IonList,
        IonItemOptions,
        IonItemDivider,
        IonLabel,
        IonText,
        IonItemOption,
    },
    data() {
        return {
            payload: [],
            isStored: "blank"
        }
    },
    setup() {
        const router = useRouter();
        return {
            router,
        };
    },
    methods: {
        onEdit(key) {
            this.router.push(`/form-address/${key}`)
        },
        onRemoveData(key) {
            api.delete(`/address/${key}.json`).then(() => {
                api.get("/address.json").then(res => {
                    if (res.data === null) {
                        this.isStored = "no";
                    } else {
                        this.isStored = "yes";
                        this.payload = Object.values(res.data);
                    }
                })
            })
        },
        onDefaultChange(oldKey, newkey) {
            api.patch(`/address/${oldKey}.json`, { default: false }).then(() => {
                api.patch(`/address/${newkey}.json`, { default: true }).then(() => {
                    api.get("/address.json").then(res => {
                        if (res.data === null) {
                            this.isStored = "no";
                        } else {
                            this.isStored = "yes";
                            this.payload = Object.values(res.data);
                        }
                    })
                })
            })

        },
        async changeDefaults(oldKey) {
            const item = JSON.parse(JSON.stringify(this.payload));
            let fil = item.filter(f => f.key !== oldKey)
            let list = fil.map(i => {
                let j = {
                    text: i.title,
                    handler: () => {
                        this.onDefaultChange(oldKey, i.key);
                    },
                }
                return j;
            })
            list.push({
                text: 'ยกเลิก',
                role: 'cancel',
            })
            const actionSheet = await actionSheetController
                .create({
                    header: 'รายการที่อยู่',
                    cssClass: 'my-custom-class',
                    mode: "ios",
                    buttons: list
                });
            await actionSheet.present();
        },
        fetchData() {
            api.get("/address.json").then(res => {
                if (res.data === null) {
                    this.isStored = "no";
                } else {
                    this.isStored = "yes";
                    this.payload = Object.values(res.data);
                }
            })
            
        },
    },
    updated() {
        this.fetchData();
    },
    mounted() {
        this.fetchData();
    }
});
</script>

<style scoped>
ion-button {
    border-radius: 50%;
}
</style>
