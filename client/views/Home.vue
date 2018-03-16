<template>
  <div class="page">
  	<div class="clearfix">
  	<div class="col xs-col-8">
  		<div class="xs-px4 xs-pt4">
		  	<h1 class="title-primary">Ryan Lang &</h1>
		  	<h1 class="title-primary">Erica Lopez</h1>
		  	<h2 class="xs-mt1">June 30th, 2017 / San Francisco, California</h2>
		  </div>
	  </div>
  </div>
  	<counter></counter>
  </div>
</template>

<script>
import Counter from 'components/Counter'

export default {
  components: {
    Counter
  }
}
</script>

<style lang="scss">
.title-primary{
	font-family:"Playfair Display SC";
	font-size:3rem;
	text-transform:uppercase;
}
</style>