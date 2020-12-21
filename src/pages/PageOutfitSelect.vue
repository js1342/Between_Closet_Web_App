<template>
  <div class="q-pa-md" style="max-width: 450px">
    <q-list bordered>
      <q-expansion-item
        group="somegroup"
        icon="fas fa-tshirt"
        label="TOP"
        default-opened
        header-class="text-primary"
      >
        <div
          class="row q-col-gutter-x-xs q-col-gutter-y-lg"
          style="margin: 0; padding: 0"
        >
          <div class="col-4" v-for="item in top.data" :key="item.clothes_id">
            <div class="my-content">
              <q-card style="border-radius: 0; box-shadow: 0">
                <q-img :src="item.url" style="max-height:100px" />
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
      </q-expansion-item>

      <q-separator />

      <q-expansion-item group="somegroup" icon="perm_identity" label="BOTTOM" header-class="text-teal">
        <div
          class="row q-col-gutter-x-xs q-col-gutter-y-lg"
          style="margin: 0; padding: 0"
        >
          <div class="col-4" v-for="item in bottom.data" :key="item.clothes_id">
            <div class="my-content">
              <q-card style="border-radius: 0; box-shadow: 0">
                <q-img :src="item.url" style="max-height:100px" />
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
      </q-expansion-item>

      <q-separator />

      <q-expansion-item group="somegroup" icon="shopping_cart" label="OUTER" header-class="text-purple">
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
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        group="somegroup"
        icon="shopping_cart"
        label="ONE PIECE"
        header-class="text-purple"
      >
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
      </q-expansion-item>
    </q-list>
    <router-link :to="{ name: 'PageMakeCodi', params: { outfit: selected } }">
        <q-btn label="코디 전송하기" type="submit" :outfit="selected" color="pink-4" class="submitbtn"
      /></router-link>
  </div>
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
    };
  },
  mounted() {
    this.getTop(), this.getBottom(), this.getOuter(), this.getOnePiece();
  },
  methods: {
    getTop() {
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/6/filter/top"
      ).then((res) => {
        console.log(res);
        this.top = res;
      });
      console.log("finished");
    },
    getBottom() {
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/6/filter/bottom"
      ).then((res) => {
        console.log(res);
        this.bottom = res;
      });
      console.log("finished");
    },
    getOuter() {
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/6/filter/outer"
      ).then((res) => {
        console.log(res);
        this.outer = res;
      });
      console.log("finished");
    },
    getOnePiece() {
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/6/filter/one_piece"
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
}
</script>
<style scoped>
.submitbtn{
  margin-top: 20px;
  width: 150px;
}
</style>