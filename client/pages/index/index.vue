<template>
	<view class="content">
		<top-bar class="topBar">
			<template #left>
				<view class="barLeft">
					<image src="../../static/images/index/p4.jpeg" mode=""></image>
				</view>
			</template>
			<template #center>
				<view class="barCenter">
					<image src="../../static/images/index/logo.png" mode="" class="logo"></image>
				</view>
			</template>
			<template #right>
				<view class="barRight">
					<image src="../../static/images/index/add.png" mode=""></image>
					<image src="../../static/images/index/search.png" mode="" @tap="toSearch"></image>
				</view>
			</template>
		</top-bar>
		<view class="main">
			<!-- <view class="apply">
				申请申请申请申请申请申请申请申请申请申请申请申请申请申请申请申请
			</view> -->
			<view class="friends">
				<member :data="friends" tip msgCon="message">
					<template #tip="{item}">
						<text>{{item.tip}}</text>
					</template>
				</member>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js';
	import changeTime from '../../commons/js/utils/time.js';
	import topBar from '../../components/bar/top-bar.vue';
	import member from '../../components/user/member.vue';

	export default {
		components: {
			topBar,
			member
		},
		data() {
			return {
				friends: []
			}
		},
		onLoad() {
			this.getFriends();
		},
		methods: {
			toSearch() {
				uni.navigateTo({
					url: '../search/search'
				})
			},
			getFriends: function() {
				this.friends = datas.searchData();
				this.friends.forEach(item => {
					console.log(item.imgUrl);
					item.imgUrl = '../../static/images/index/' + item.imgUrl;
					item.time = changeTime.dateTime(item.time)
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
	}

	.topBar {
		.barLeft {
			flex: 1;

			image {
				margin-top: 5px;
				width: 40px;
				height: 40px;
				border-radius: 8px;
			}
		}

		.barCenter {
			flex: 2;
			text-align: center;

			.logo {
				margin-top: 10.5px;
				width: 44px;
				height: 21px;
			}
		}

		.barRight {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;

			image {
				width: 30px;
				height: 30px;
			}
		}
	}

	.main {
		margin-top: 50px;
		height: 100%;
		overflow: scroll;

		.apply {
			width: 100%;
			height: 48px;
			word-wrap: inherit;
		}

		.friends {
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 50px;
		}
	}
</style>
