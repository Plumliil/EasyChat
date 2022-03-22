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
				<view class="friend-list" v-for="friend in friends">
					<view class="photo_tip">
						<image :src="friend.imgUrl" mode="" class="photo"></image>
						<text class="tip">{{friend.tip}}</text>
					</view>
					<view class="content">
						<text class="name">{{friend.name}}</text>
						<text class="message">{{friend.message}}</text>
					</view>
					<text class="time">{{friend.time}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js';
	import changeTime from '../../commons/js/utils/time.js';
	import topBar from '../../components/bar/top-bar.vue';

	export default {
		components: {
			topBar
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
			toSearch(){
				uni.navigateTo({
					url:'../search/search'
				})
			},
			getFriends: function() {
				this.friends = datas.friends();
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
			margin-top: 40px;
			// overflow: scroll;

			.friend-list {
				width: 95%;
				margin-bottom: 16px;
				display: flex;
				justify-content: center;
				align-items: center;

				&:active {
					background-color: $uni-bg-color-grey;
				}

				.photo_tip {
					position: relative;
					width: 48px;
					height: 48px;
					background: #FFE431;
					border-radius: 12px;

					image {
						width: 48px;
						height: 48px;
						background: #FFE431;
						border-radius: 12px;
					}

					.tip {
						position: absolute;
						left: 34px;
						top: -3px;
						width: 18px;
						height: 18px;
						background: #FF5D5B;
						border-radius: 50%;
						line-height: 18px;
						text-align: center;
						color: white;
						font-size: 10px;
					}
				}

				.content {
					flex: 1;
					text-indent: 20px;

					.name {
						width: 70px;
						height: 25px;
						font-family: PingFangSC-Regular;
						font-size: 18px;
						color: #272832;
						letter-spacing: -0.62px;
						font-weight: 400;
					}

					.message {
						width: 200px;
						height: 20px;
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: rgba(39, 40, 50, 0.60);
						letter-spacing: -0.48px;
						font-weight: 400;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}

				.time {
					text-align: right;
					width: 46px;
					height: 17px;
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: rgba(39, 40, 50, 0.40);
					letter-spacing: -0.41px;
					font-weight: 400;
				}
			}
		}
	}
</style>
