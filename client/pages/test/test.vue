<template>
	<view>
		<!-- <input type="text" value="" v-model="name" />
		<input type="text" value="" v-model="email" />
		<input type="text" value="" v-model="pwd" /> -->
		<button type="default" @tap="clickMe">CLICK ME</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: 'zs',
				email: '12345@tt.com',
				pwd: '12345'
			}
		},
		methods: {
			clickMe() {
				uni.request({
					url: 'http://localhost:3000/api/user/signup/add',
					data: {
						name: 'zs',
						email: '12345@tt.com',
						password: '12345'
					},
					method:'POST',
					success(data){
						console.log(data);
					}
				})
				console.log('signup');
			}
		}
	}
</script>

<style>
	button{
		margin-top: 300px;
	}
</style>
