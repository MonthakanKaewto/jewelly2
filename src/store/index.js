import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cardList: [{
                price: 25000,
                nameProduct: "แหวน",
                img: "https://s3.amazonaws.com/barkevs-cdn/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/9/7930lp_front.jpg"
            },
            {
                price: 16800,
                nameProduct: "แหวน",
                img: "https://s3.amazonaws.com/barkevs-cdn/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/9/7908l_front_1.jpg"
            },
            {
                price: 25900,
                nameProduct: "แหวน",
                img: "https://i.pinimg.com/originals/61/a4/a9/61a4a9fac74a605dd95c9efddd10c6ad.jpg"
            },
            {
                price: 95000,
                nameProduct: "แหวน",
                img: "https://globalringsjewelry.r.worldssl.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/7661lpw_front.jpg"
            },
            {
                price: 29999,
                nameProduct: "แหวน",
                img: "https://www.anglodiamond.com/media/catalog/product/7/9/7979lpw_front_2.jpg"
            },
            {
                price: 54999,
                nameProduct: "แหนว",
                img: "https://th.bing.com/th/id/R771590e77f38f522627254dd941391cf?rik=mXF0CwzI%2f7h3nw&riu=http%3a%2f%2fmedia.xogrp.com%2fimages%2f0bfff833-1595-49db-9256-e444bdf69b52&ehk=B%2b9gSd%2fkzphOHJzb89tBTwh8CIEoXUC%2b7XyA2SDy%2bIg%3d&risl=&pid=ImgRaw"
            },
            {
                price: 200000,
                nameProduct: "สร้อยคอ",
                img: "https://i.pinimg.com/736x/8a/7a/98/8a7a98d8924b8bf1d7663d19ef549a17.jpg"
            },
            {
                price: 24888,
                nameProduct: "สร้อยคอ",
                img: "https://i.pinimg.com/originals/36/93/50/3693507c856d3de8b858f8b44e97b5b2.jpg"
            },
            {
                price: 27999,
                nameProduct: "สร้อยคอ",
                img: "https://cdn.shopify.com/s/files/1/0957/8702/products/product-image-247672440.jpg?v=1495733877"
            },
            {
                price: 20000,
                nameProduct: "สร้อยคอ",
                img: "https://cdn.shopify.com/s/files/1/0057/6657/8279/products/9M60001_1200x1200.jpg?v=1599796281"
            },
            {
                price: 29999,
                nameProduct: "สร้อยคอ",
                img: "https://qvc.scene7.com/is/image/QVC/j/71/j477571.001"
            },
            {
                price: 25999,
                nameProduct: "สร้อยคอ",
                img: "https://charmdiamondcentres.com/sites/default/files/styles/product_image_slide/public/sync/1165839_Main.jpg?itok=nyGY_VPK"
            },
            {
                price: 39999,
                nameProduct: "สร้อยข้อมือ",
                img: "https://www.reeds.com/pub/media/catalog/product/cache/da673f1f7e23bfe8cd458e058a12a1d9/e/f/effy_pave_ros_eacute_rose_gold_diamond_bangle_1_2ctw-1-19708130_1.jpg"
            },
            {
                price: 49999,
                nameProduct: "สร้อยข้อมือ",
                img: "https://i.pinimg.com/originals/c6/9a/44/c69a44f1194e476b73d6da188deb5077.jpg"
            },
            {
                price: 59999,
                nameProduct: "สร้อยข้อมือ",
                img: "https://th.bing.com/th/id/Red36e64290b75a96c5fd186c85320ae1?rik=uYP9YXfUjEHm3A&riu=http%3a%2f%2fsc02.alicdn.com%2fkf%2fHa7525f0a95e14487880f8f4d715a4d043%2fKailefu-Jewellery-Factory-Wholesale-Silver-925-Bracelet.jpg&ehk=pi77ThBndoHXNCyNhky7%2bAfcrbJJ0%2bgUDiKdlWWcggM%3d&risl=&pid=ImgRaw"
            },
            {
                price: 69999,
                nameProduct: "สร้อยข้อมือ",
                img: "https://sc01.alicdn.com/kf/Hdf974c9405ad409e9560f145433e50e9E.jpg"
            },
            {
                price: 79999,
                nameProduct: "สร้อยข้อมือ",
                img: "https://th.bing.com/th/id/R6f2876a6fe7a63f4311fbe5fa1d55100?rik=OGx%2ba0Wt25Rk2w&riu=http%3a%2f%2fgoldfactory2016.cafe24.com%2fweb%2fproduct%2fmedium%2f20200628%2fa3b6b9e0fef569d88d8979f63e21a6db.jpg&ehk=SK1vDUcnacC4w8GtGSXvomE%2bNmrcKItQtV9xB%2bkicl4%3d&risl=&pid=ImgRaw"
            },
            {
                price: 89999,
                nameProduct: "สร้อยข้อมือ",
                img: "https://cdn10.bigcommerce.com/s-7plbcvh/products/2015/images/7470/14k-Rose-Gold-Diamonds-Mesh-Flower-Bangle-Bracelet-0.25-Carat-Handmade-Pave-Set-Two-Tone-Gold__32708.1417159673.1280.1280.jpg?c=2"
            }
        ],
        product: [],
        tprice: 0
    },
    getters: {
        cList: state => {
            return state.cardList;
        },
        UpProduct: state => value => {
            state.product.push(value);
        },
        proPush: state => {
            return state.product;
        },
        cSum: state => {
            return state.tprice;
        },
    },
    mutations: {
        sum(state) {
            state.tprice = 0;
            for (let i = 0; i < state.product.length; i++) {
                state.tprice = state.tprice + state.product[i].Sum;
            }
        },
        deletez(state) {
            state.tprice = 0;
            state.product = []
        },
    },
    actions: {},
    modules: {}
})