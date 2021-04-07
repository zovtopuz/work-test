<template>
    <h1>Hello {{ name }}</h1>
</template>

<script>
import Login from '/Users/zovtopuz/Documents/vue/vue-test/test-work/src/components/Login.vue'

export default {
	data() {
    return {
			name:''
    };
	},
	methods: {
		storegName: function () {
			this.name = localStorage.getItem('name')
		}
	},
	 created: function () {
    this.storegName();
  },
}
</script>
