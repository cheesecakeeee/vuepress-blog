<template>
  <div class="flex flex-col h-full">
    <Nav/>
    <Content class="flex-1 max-w-xl mx-auto leading-normal"/>
    <label class="text-grey-dark">{{formateDate($page.frontmatter.date)}}</label>
    <Footer class="pin-b"/>
  </div>
</template>

<script>
import moment from "moment"
import Nav from "@theme/components/Nav";
import Footer from "@theme/components/Footer";
export default {
  components: { Nav, Footer },
  name: "Layout",
  methods:{
    formateDate(date) {
      return moment(date).format("MMM Do YYYY")
    },
  }
};
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>