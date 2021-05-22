<template>
  <figure :style="figureStyle"></figure>
</template>

<script>
const pics = [
  {
    url: require("../thumbsup.jpg"),
    width: 150,
    height: 100,
  },
  {
    url: require("../snake.jpg"),
    width: 200,
    height: 141,
  },
  {
    url: require("../floor.jpg"),
    width: 200,
    height: 139,
  },
  {
    url: require("../window.jpg"),
    width: 150,
    height: 140,
  },
  {
    url: require("../hands.jpg"),
    width: 100,
    height: 140,
  },
];

export default {

    props: ["picIndex"],

  data() {
    return {
      pic: pics[this.picIndex],
      xPos: 10,
      yPos: this.getRandomYPos(),
      speed: (Math.random() * 0.2 + 0.05),
      goingLeft: Math.random() > 0.5,
      upHigh: Math.random() > 0.5,
      timer: false,
    };
  },

  methods: {
    move() {
      this.xPos += this.speed;

      if ( this.xPos > 120) {
        this.xPos = -20;
        this.upHigh= Math.random() > 0.5;
        this.yPos = this.getRandomYPos();
        this.speed = Math.random() * 0.2 + 0.05;
      }

    },
    getRandomYPos() {
        return Math.floor(Math.random() * 40) + 5
    }
  },

  computed: {

    figureStyle() {
      return {
        width: `${this.pic.width}px`,
        height: `${this.pic.height}px`,
        left:   this.goingLeft ? `${this.xPos}%` : 'unset',
        right: !this.goingLeft ? `${this.xPos}%` : 'unset',
        top:    this.upHigh ? `${this.yPos}px` : 'unset',
        bottom:!this.upHigh ? `${this.yPos}px` : 'unset',

        backgroundImage: `url(${this.pic.url})`,
      }

    },
  },

  mounted() {
    this.timer = setInterval(this.move, 10);
  },

  beforeUnmount() {
    clearInterval(this.timer);
  },
};
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