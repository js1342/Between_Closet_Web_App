<template>
  <q-page>
    <div
      class="row q-col-gutter-x-xs q-col-gutter-y-lg"
      style="margin: 0; padding: 0"
    >
      <div class="col-4" v-for="item in top.data" :key="item.clothes_id">
        <div class="my-content">
          <q-card style="border-radius: 0; box-shadow: 0">
            <q-img :src="item.url" />
            <q-checkbox
              size="sm"
              v-model="selected"
              :val="item"
              :outfit="selected"
              @input="checkOutfit()"
            />
          </q-card>
        </div>
      </div>
    </div>
    <q-separator />

    <div
      class="row q-col-gutter-x-xs q-col-gutter-y-lg"
      style="margin: 0; padding: 0"
    >
      <div class="col-4" v-for="item in outer.data" :key="item.clothes_id">
        <div class="my-content">
          <q-card style="border-radius: 0; box-shadow: 0">
            <q-img :src="item.url" />
            <q-checkbox
              size="sm"
              v-model="selected"
              :val="item"
              :outfit="selected"
              @input="checkOutfit()"
            />
          </q-card>
        </div>
      </div>
    </div>
    <div
      class="row q-col-gutter-x-xs q-col-gutter-y-lg"
      style="margin: 0; padding: 0"
    >
      <div class="col-4" v-for="item in bottom.data" :key="item.clothes_id">
        <div class="my-content">
          <q-card style="border-radius: 0; box-shadow: 0">
            <q-img :src="item.url" />
            <q-checkbox
              size="sm"
              v-model="selected"
              :val="item"
              :outfit="selected"
              @input="checkOutfit()"
            />
          </q-card>
        </div>
      </div>
    </div>
    <div
      class="row q-col-gutter-x-xs q-col-gutter-y-lg"
      style="margin: 0; padding: 0"
    >
      <div class="col-4" v-for="item in onepiece.data" :key="item.clothes_id">
        <div class="my-content">
          <q-card style="border-radius: 0; box-shadow: 0">
            <q-img :src="item.url" />
            <q-checkbox
              size="sm"
              v-model="selected"
              :val="item"
              :outfit="selected"
              @input="checkOutfit()"
            />
          </q-card>
        </div>
      </div>
    </div>
    <div>
      <router-link :to="{ name: 'PageMakeCodi', params: { outfit: selected } }">
        <q-btn label="Submit" type="submit" :outfit="selected" color="pink-4"
      /></router-link>
    </div>
  </q-page>
</template>
<script>
import Axios from "axios";
import { mapGetters } from "vuex";
import routes from "src/router";
export default {
  data() {
    return {
      tempVal: [false, false, false],
      top: null,
      bottom: null,
      outer: null,
      onepiece: null,
      selected: [],

      friend_user_id: null,
      my_user_id: 6, // ★★★★★ 본인 아이디 넣기 ★★★★★
    };
  },
  created() {
    this.friend_user_id = this.$route.params.friend_id;
  },
  mounted() {
    this.getTop(), this.getBottom(), this.getOuter(), this.getOnePiece();
  },
  methods: {
    getTop() {
      if (this.friend_user_id == null) {
        this.user_id = this.my_user_id;
        console.log(">>>>>>>>>>>>>>>.도", this.user_id);
      } else {
        console.log("왜 여긴..");
        this.user_id = this.friend_user_id;
      }
      console.log("그래서,", this.user_id);
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/" +
          this.user_id +
          "/filter/top"
      ).then((res) => {
        console.log(res);
        this.top = res;
      });
      console.log("finished");
    },
    getBottom() {
      if (this.friend_user_id == null) {
        this.user_id = this.my_user_id;
      } else {
        this.user_id = this.friend_user_id;
      }
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/" +
          this.user_id +
          "/filter/bottom"
      ).then((res) => {
        console.log(res);
        this.bottom = res;
      });
      console.log("finished");
    },
    getOuter() {
      if (this.friend_user_id == null) {
        this.user_id = this.my_user_id;
      } else {
        this.user_id = this.friend_user_id;
      }
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/" +
          this.user_id +
          "/filter/outer"
      ).then((res) => {
        console.log(res);
        this.outer = res;
      });
      console.log("finished");
    },
    getOnePiece() {
      if (this.friend_user_id == null) {
        this.user_id = this.my_user_id;
      } else {
        this.user_id = this.friend_user_id;
      }
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/" +
          this.user_id +
          "/filter/one_piece"
      ).then((res) => {
        console.log(res);
        this.onepiece = res;
      });
      console.log("finished");
    },
    checkOutfit() {
      console.log(this.selected);
    },
  },
};
</script>