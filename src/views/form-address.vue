<template>
    <ion-page>
        <ion-header mode="ios" style="margin-bottom:10px ;">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="" text="&nbsp;&nbsp;เพิ่มที่อยู่"></ion-back-button>
                </ion-buttons>
                <ion-title></ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <form @submit.prevent="onSubmit" novalidate>
                <ion-item lines="full" color="tertiary">
                    <ion-label position="stacked">ชื่อหัวข้อ</ion-label>
                    <ion-input v-model="vv.title.$model" placeholder="เช่น ที่อยู่ของฉัน"></ion-input>
                </ion-item>
                <ion-item lines="full" color="tertiary">
                    <ion-label position="stacked">เลขประจำตัวผู้เสียภาษี</ion-label>
                    <ion-input v-model="vv.taxNo.$model" placeholder="เช่น 1325478996144"></ion-input>
                </ion-item>
                <ion-item lines="full" color="tertiary" style="margin-bottom:20px ;">
                    <ion-label position="stacked">เบอร์ติดต่อ</ion-label>
                    <ion-input v-model="vv.tel.$model" placeholder="เช่น 0874563289"></ion-input>
                </ion-item>
                <ion-item lines="full" color="tertiary">
                    <ion-label position="stacked">ที่อยู่</ion-label>
                    <ion-input v-model="vv.address.$model" placeholder="เช่น หมู่บ้านแสนสุข 1444/1 หมู่ 1 ถนริมบึง">
                    </ion-input>
                </ion-item>
                <ion-item lines="full" color="tertiary">
                    <ion-label position="stacked">ตำบล</ion-label>
                    <ion-input v-model="vv.subDistrict.$model" placeholder="เช่น บางพระ"></ion-input>
                </ion-item>
                <ion-item lines="full" color="tertiary">
                    <ion-label position="stacked">อำเภอ</ion-label>
                    <ion-input v-model="vv.district.$model" placeholder="เช่น ศรีราชา"></ion-input>
                </ion-item>
                <ion-item lines="full" color="tertiary">
                    <ion-label position="stacked">จังหวัด</ion-label>
                    <ion-input v-model="vv.province.$model" placeholder="เช่น ชลบุรี"></ion-input>
                </ion-item>
                <ion-item lines="full" color="tertiary">
                    <ion-label position="stacked">รหัสไปรษณีย์</ion-label>
                    <ion-input v-model="vv.postCode.$model" placeholder="เช่น 20110"></ion-input>
                </ion-item>
                <ion-item lines="full" color="tertiary">
                    <ion-label position="stacked">หมายเหตุ</ion-label>
                    <ion-input v-model="vv.note.$model" placeholder="ระบุบันทึกเพิ่มเติม (ไม่จำเป็น)"></ion-input>
                </ion-item>
                <ion-button color="danger" class="ion-no-margin" expand="full" type="submit">ตกลง</ion-button>
            </form>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonPage,
    IonHeader,
    IonButton,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonToolbar,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
} from '@ionic/vue';

import { defineComponent, reactive, toRef } from 'vue';
import { useVuelidate } from "@vuelidate/core";

export default defineComponent({
    name: 'FormAddress',
    components: {
        IonPage,
        IonHeader,
        IonButton,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonToolbar,
        IonContent,
        IonItem,
        IonLabel,
        IonInput,
    },
    setup() {
        const fform = reactive({
            title: "",
            taxNo: "",
            tel: "",
            address: "",
            subDistrict: "",
            district: "",
            province: "",
            postCode: "",
            note: "",
        })

        const rules = {
            title: {},
            taxNo: {},
            tel: {},
            address: {},
            subDistrict: {},
            district: {},
            province: {},
            postCode: {},
            note: {},
        }

        const vv = useVuelidate(rules, {
            title: toRef(fform, "title"),
            taxNo: toRef(fform, "taxNo"),
            tel: toRef(fform, "tel"),
            address: toRef(fform, "address"),
            subDistrict: toRef(fform, "subDistrict"),
            district: toRef(fform, "district"),
            province: toRef(fform, "province"),
            postCode: toRef(fform, "postCode"),
            note: toRef(fform, "note"),
        })

        const onSubmit = () => {
            vv.value.$touch();

            if (vv.value.$invalid) {
                console.log("error: invalid")
            } else {
                console.log("Form Submitted " + JSON.stringify(fform, null, 2))
            }
        };
        return {
            onSubmit,
            vv,
        };
    }
})
</script>
<style>
.bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
}
</style>