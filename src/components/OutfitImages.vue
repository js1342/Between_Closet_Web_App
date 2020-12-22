<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry v-for="item in outfit_res.data" :key="`none-${item}`">
        <template v-slot:title> 2020년 12월 20일 </template>
        <template v-slot:subtitle> December 10, 2020 </template>
        <img
          style="
            max-width: 50%;
            min-width: 50%;
            margin-top: 10%;
            margin-left: 5%;
            float: left;
            border: 1px;
          "
          :src="item.top"
        />

        <img style="max-width: 30%; margin-top: 20%" :src="item.outer" />
        <img style="max-height: 200px; margin-left: 30%" :src="item.bottom" />
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "OutfitImages",
  data() {
    return {
      outfit_res: { type: Array, default: () => [] },
      user_id: null,
    };
  },
  props: {
    friendUserId: null,
  },
  mounted() {
    if (this.friendUserId == null) {
      this.user_id = 2; // ★★★★★★★★★ 본인 아이디
    } else {
      this.user_id = this.friendUserId;
    }
    this.getOutfits();
  },
  created() {
    this.user_id = this.$route.params.user_id;
  },
  methods: {
    getOutfits() {
      console.log("in getOutfits");
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/outfit-clothes/" +
          this.user_id
      ).then((res) => {
        console.log(">>>>", res);
        this.outfit_res = res;
      });
      console.log("finished ->", this.outfit_res);
    },
  },
};
</script>