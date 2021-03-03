<template>
  <div class="hello">
    <b-card
      border-variant="dark"
      align="center"
      style="max-width: 540px;height: 300px;"
      
    >
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="img"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="nameProduct">
            <b-card-text> ราคา : {{ price }} ฿ </b-card-text>
            <label for="demo-sb">{{ textp }}</label>
             <b-form-spinbutton
        id="demo-sb"
        v-model="nump"
        min="1"
        max="100"
      ></b-form-spinbutton>
      <div>
        <b-button class="mt-3" @click="addToCart" variant="outline-dark">{{
          textbutton
        }}</b-button>
        </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    price: Number,
    nameProduct: String
  },
  data() {
    return {
      modalShow: false,
      nump: 1,
      textbutton: "Add to Cart",
      textp: "จำนวน"
    };
  },
  methods: {
    addToCart() {
      this.$emit("update-cart", {
        nameProduct: this.nameProduct,
        price: this.price,
        num: this.nump,
        Sum: this.price * this.nump
      });
      this.$bvModal.show("bv-modal-example");
    }
  }
};
</script>