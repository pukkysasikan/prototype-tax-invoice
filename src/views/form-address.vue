<template>
  <ion-page>
    <ion-header mode="ios" style="margin-bottom: 10px">
      <ion-toolbar color="tertiary">
        <ion-buttons slot="start">
          <ion-back-button
            color="primary"
            default-href=""
            text="&nbsp;&nbsp;เพิ่มที่อยู่"
          ></ion-back-button>
        </ion-buttons>
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <form v-if="code==='origin'" @submit.prevent="onSubmit" novalidate>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">ชื่อหัวข้อ</ion-label>
          <ion-input
            v-model="vv.title.$model"
            placeholder="เช่น ที่อยู่ของฉัน"
            
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">เลขประจำตัวผู้เสียภาษี</ion-label>
          <ion-input
            v-model="vv.taxNo.$model"
            placeholder="เช่น 1325478996144"
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary" style="margin-bottom: 10px">
          <ion-label position="stacked">เบอร์ติดต่อ</ion-label>
          <ion-input
            v-model="vv.tel.$model"
            placeholder="เช่น 0874563289"
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">ที่อยู่</ion-label>
          <ion-input
            v-model="vv.address.$model"
            placeholder="เช่น หมู่บ้านแสนสุข 1444/1 หมู่ 1 ถนริมบึง"
          >
          </ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">ตำบล</ion-label>
          <ion-input
            v-model="vv.subDistrict.$model"
            placeholder="เช่น บางพระ"
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">อำเภอ</ion-label>
          <ion-input
            v-model="vv.district.$model"
            placeholder="เช่น ศรีราชา"
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">จังหวัด</ion-label>
          <ion-input
            v-model="vv.province.$model"
            placeholder="เช่น ชลบุรี"
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">รหัสไปรษณีย์</ion-label>
          <ion-input
            v-model="vv.postCode.$model"
            placeholder="เช่น 20110"
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">หมายเหตุ</ion-label>
          <ion-input
            v-model="vv.note.$model"
            placeholder="ระบุบันทึกเพิ่มเติม (ไม่จำเป็น)"
          ></ion-input>
        </ion-item>
        <ion-button
          color="danger"
          class="ion-no-margin"
          id="footer"
          expand="full"
          type="submit"
          >ตกลง</ion-button>
      </form>

      <form v-else @submit.prevent="onSave" novalidate>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">ชื่อหัวข้อ</ion-label>
          <ion-input
            v-model="vv.title.$model"
            placeholder="เช่น ที่อยู่ของฉัน"
            
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">เลขประจำตัวผู้เสียภาษี</ion-label>
          <ion-input
            v-model="vv.taxNo.$model"
            placeholder="เช่น 1325478996144"
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary" style="margin-bottom: 10px">
          <ion-label position="stacked">เบอร์ติดต่อ</ion-label>
          <ion-input
            v-model="vv.tel.$model"
            placeholder="เช่น 0874563289"
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">ที่อยู่</ion-label>
          <ion-input
            v-model="vv.address.$model"
            placeholder="เช่น หมู่บ้านแสนสุข 1444/1 หมู่ 1 ถนริมบึง"
          >
          </ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">ตำบล</ion-label>
          <ion-input
            v-model="vv.subDistrict.$model"
            placeholder="เช่น บางพระ"
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">อำเภอ</ion-label>
          <ion-input
            v-model="vv.district.$model"
            placeholder="เช่น ศรีราชา"
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">จังหวัด</ion-label>
          <ion-input
            v-model="vv.province.$model"
            placeholder="เช่น ชลบุรี"
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">รหัสไปรษณีย์</ion-label>
          <ion-input
            v-model="vv.postCode.$model"
            placeholder="เช่น 20110"
          ></ion-input>
        </ion-item>
        <ion-item lines="full" color="tertiary">
          <ion-label position="stacked">หมายเหตุ</ion-label>
          <ion-input
            v-model="vv.note.$model"
            placeholder="ระบุบันทึกเพิ่มเติม (ไม่จำเป็น)"
          ></ion-input>
        </ion-item>
          <ion-button
          color="danger"
          class="ion-no-margin"
          id="footer"
          expand="full"
          type="submit"
          >บันทึก</ion-button>
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
  alertController,
  toastController
} from "@ionic/vue";

import { defineComponent, reactive, toRef } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useRouter } from "vue-router";
import { api } from "../Api";

export default defineComponent({
  name: "FormAddress",
  props: ["code"],
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
  mounted() {
    if (this.code !== "origin"){
      api.get(`/address/${this.code}.json`).then(res => {
        this.vv.title.$model= res.data.title;
        this.vv.taxNo.$model= res.data.taxNo;
        this.vv.tel.$model= res.data.tel;
        this.vv.address.$model= res.data.address;
        this.vv.subDistrict.$model= res.data.subDistrict;
        this.vv.district.$model= res.data.district;
        this.vv.province.$model= res.data.province;
        this.vv.postCode.$model= res.data.postCode;
        this.vv.note.$model= res.data.note;

        this.address_form.key = res.data.key;
        this.address_form.default = res.data.default;
      });

    }
  },
  setup() {
    const router = useRouter();
    const genRanHex = (size: number) =>
      [...Array(size)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join("");
    const address_form = reactive({
      key: "",
      title: "",
      taxNo: "",
      tel: "",
      address: "",
      subDistrict: "",
      district: "",
      province: "",
      postCode: "",
      note: "",
      default: false,
    });

    const rules = {
      key: {},
      title: {},
      taxNo: {},
      tel: {},
      address: {},
      subDistrict: {},
      district: {},
      province: {},
      postCode: {},
      note: {},
      default: {},
    };

    const vv = useVuelidate(rules, {
      title: toRef(address_form, "title"),
      taxNo: toRef(address_form, "taxNo"),
      tel: toRef(address_form, "tel"),
      address: toRef(address_form, "address"),
      subDistrict: toRef(address_form, "subDistrict"),
      district: toRef(address_form, "district"),
      province: toRef(address_form, "province"),
      postCode: toRef(address_form, "postCode"),
      note: toRef(address_form, "note"),
    });

    const errorAlert = async (text:string) => {
      const alert = await alertController
        .create({
          cssClass: 'error-alert',
          header: 'เกิดข้อผิดพลาด',
          message: text,
          buttons: ['ตกลง'],
          mode: "ios"
        });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }

    const successToast = async () => {
      const toast = await toastController
        .create({
          icon: require("../assets/icon/checkmark-circle-outline.svg"),
          message: 'บันทึกข้อมูลสำเร็จ',
          duration: 1500,
          position: "top",
          mode: "ios"
        })
      return toast.present();
    }

    const onSave = async () => {
      if (vv.value.$invalid) {
        errorAlert('กรุณากรอกข้อมูลให้ครบถ้วน');
      } else {
        console.log(address_form)
        api.patch(`/address/${address_form.key}.json`, address_form).then(() => {
          successToast();
          router.back();
        });
      }
    }

    const onSubmit = async () => {
      vv.value.$touch();

      if (vv.value.$invalid) {
        errorAlert('กรุณากรอกข้อมูลให้ครบถ้วน');
      } else {
        let get =  await api.get("/address.json").then(res => res.data)
        if (get === null){
          address_form.default = true;
        }else{
          address_form.default = false;
        }
        address_form.key = genRanHex(8);
        api.put(`/address/${address_form.key}.json`, address_form).then(() => {
          successToast();
          router.back();
        }).catch(() => {
          errorAlert('ไม่สามารถบันทึกข้อมูลได้');
        });
      }
    };
    return {
      onSubmit,
      vv,
      router,
      onSave,
      address_form
    };
  },
});
</script>
<style>

</style>