<template>
  <figure :style="figureStyle">
  </figure>
</template>

<script>

const pic = require('../thumbsup.jpg');

export default {

    data() {

        return {
            width: 150,
            height: 100,
            left: 10,
            top: Math.floor(Math.random() * 70) + 15,
            vector: ((Math.random() * .1) + .05) * (Math.random()>.5 ? 1:-1),
            timer: false,
        }
    },

    methods: {
        move() {
            this.left += this.vector

            if (this.vector > 0 && this.left > 100) {
                this.left = -10
                this.top = Math.floor(Math.random() * 70) + 15
            }
            if (this.vector < 0 && this.left < -10) {
                this.left = 100
                this.top = Math.floor(Math.random() * 70) + 15
            }
        }
    },

    computed: {
        figureStyle() {
            return {
                width: `${this.width}px`,
                height: `${this.height}px`,
                left: `${this.left}%`,
                top: `${this.top}%`,
                backgroundImage: `url(${pic})`,
            }
        }
    },

    mounted() {
        this.timer = setInterval(this.move, 10)
    },

    beforeUnmount() {
        clearInterval(this.timer)
    }
}
</script>

<style lang="scss" scoped>

@import "../../../src/modules/_material.scss";
@import "../../../src/modules/_layout.scss";
    figure {
        position: absolute;
        padding: 1rem;
        box-sizing: border-box;
        border: 10px ridge #bc6421;
        border-style: ridge;
        box-shadow: $drop-shadow2;
        background-color: white;
        box-sizing: border-box;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        
        margin: 0;
    }

</style>