<template>
 <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry>
        <template v-slot:title>
          2020년 12월 20일
        </template>
        <template v-slot:subtitle>
          December 10, 2020
        </template>
        <div>
          <q-card style="border-radius: 0; box-shadow: 0; margin: 0; padding: 0;">
              <q-img
                src="https://i0.codibook.net/files/thumb/big/1975072941997/1bbfba10c854/1809426185.jpg"
              />
            </q-card>
        </div>
      </q-timeline-entry>

      <q-timeline-entry icon="delete">
        <template v-slot:title>
          2020년 12월 15일
        </template>
        <template v-slot:subtitle>
          December 15, 2020
        </template>

        <q-card style="border-radius: 0; box-shadow: 0; margin: 0; padding: 0;">
          <outfit-images />
        </q-card>
      </q-timeline-entry>
    </q-timeline>
 </div>
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";
import OutfitImages from './OutfitImages.vue';

export default {
  components: { OutfitImages },
  name: "OutfitHistory",
  data() {
    return {
      tab: "top",
      clothes: null,
      clothesList: { type: Array, default: () => [] },
    };
  },
  computed: {
    ...mapGetters({
      idToken: "account/idToken",
    }),
  },
  mounted() {
    this.clothesClicked();
  },
  methods: {
    async clothesClicked() {
      let reqHeader = {
        headers: {
          "Content-Type": "application/json",
          Authorization: await this.idToken,
        },
      };
      this.clothes = await Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes",
        reqHeader
      );
      console.log(this.clothes.data);
    },
    topClicked() {},
    bottomClicked() {},
    outerClicked() {},
    dressClicked() {
      console.log("ee");
    },
  },
};
</script>
<style scoped>
.q-gutter-y-md,
.q-gutter-md {
  margin-top: 0;
}
</style>