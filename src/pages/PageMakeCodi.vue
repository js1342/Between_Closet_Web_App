<template>
  <div class="q-pa-xs" style="margin: 0; padding: 0">
    <!-- <div>완성된 코디</div> -->
    <q-field rounded filled style="margin: 5% 3% 0 3%">
      <div
        class="self-center full-width no-outline"
        tabindex="0"
        style="color: black; text-align: center"
      >
        완성된 코디
      </div>
    </q-field>
    <div class="row q-col" style="margin: 0 3% 3% 3%; padding: 0">
      <div
        class="col-6"
        v-for="item in outfit"
        :key="`none-${item}`"
        style="margin:0, padding: 0;"
      >
        <q-card style="border-radius: 0; box-shadow: 0; margin: 0; padding: 0">
          <q-img :src="item.croppedw" style="float: left" />
        </q-card>
      </div>
    </div>
    <q-btn
      color="grey"
      icon-right="send"
      label="친구에게 보내기"
      style="width: 94%; margin: 0 3% 0 3%"
      @click="sendOutfit"
    />
  </div>
</template>

<script>
import PageOutfitSelect from "./PageOutfitSelect";
import Axios from "axios";
export default {
  mounted() {
    this.friend_id = this.outfit[0];
    this.real_outfit = this.outfit.slice(1, this.outfit.length);
    console.log(">>>friend_id>>>", this.real_outfit);
  },
  data() {
    return {
      friend_id: null,
      outfit: null,
      real_outfit: null,
    };
  },
  created() {
    this.outfit = this.$route.params.outfit;
  },
  methods: {
    sendOutfit() {
      let params = {};
      this.real_outfit.forEach((element) => {
        console.log(">", element);
        let category;
        if (element.category_large == "상의") {
          console.log("dd");
          category = "top";
        } else if (element.category_large == "하의") {
          console.log("ele", element);
          category = "bottom";
        } else if (element.category_large == "아우터") {
          category = "outer";
        } else if (element.category_large == "한벌옷") {
          category = "one_piece";
        }
        params[JSON.stringify(category)] = element.clothes_id;
      });
      console.log("p", params);
      Axios.post(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/outfit",
        params
      ).then((res) => {
        console.log("success");
      });
    },
  },
};
</script>
<style scoped>
.top {
  width: 50%;
  margin-top: 15%;
  margin-left: 15%;

  border-radius: 4px;
}
</style>