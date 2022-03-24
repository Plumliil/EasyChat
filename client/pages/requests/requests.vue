<template>
	<view class="request">
		<top-bar class="topBar">
			<template #left>
				<!-- <view></view> -->
				<image class="back" src="../../static/images/commons/toLeft.png" mode="" @click="back"></image>
			</template>
			<template #center>
				<view class="tit">好友请求</view>
			</template>
		</top-bar>

		<view class="main">
			<view class="request">
				<image src="../../static/images/index/p2.jpeg" mode=""></image>
				<view class="btns">
					<button class="reject" type="default">拒绝</button>
					<button class="agree" type="default">接受</button>
				</view>
				<view class="info">
					<text>namename</text>
					<text>2022-2-22</text>
				</view>
				<view class="msg">
					<text>该邮箱还未注册，输入密码成为新账号该邮箱还未注册，输入密码成为新账号该邮箱还未注册，输入密码成为新账号该邮箱还未注册，输入密码成为新账号</text>
				</view>
			</view>
			<view class="request">
				<image src="../../static/images/index/p2.jpeg" mode=""></image>
				<view class="btns">
					<button class="reject" type="default">拒绝</button>
					<button class="agree" type="default">接受</button>
				</view>
				<view class="info">
					<text>namename</text>
					<text>2022-2-22</text>
				</view>
				<view class="msg">
					<text>该邮箱还未注册，输入密码成为新账号该邮箱还未注册，输入密码成为新账号该邮箱还未注册，输入密码成为新账号该邮箱还未注册，输入密码成为新账号</text>
				</view>
			</view>
			<view class="request">
				<image src="../../static/images/index/p2.jpeg" mode=""></image>
				<view class="btns">
					<button class="reject" type="default">拒绝</button>
					<button class="agree" type="default">接受</button>
				</view>
				<view class="info">
					<text>namename</text>
					<text>2022-2-22</text>
				</view>
				<view class="msg">
					<text>该邮箱还未注册，输入密码成为新账号该邮箱还未注册，输入密码成为新账号该邮箱还未注册，输入密码成为新账号该邮箱还未注册，输入密码成为新账号</text>
				</view>
			</view>
			<view class="request">
				<image src="../../static/images/index/p2.jpeg" mode=""></image>
				<view class="btns">
					<button class="reject" type="default">拒绝</button>
					<button class="agree" type="default">接受</button>
				</view>
				<view class="info">
					<text>namename</text>
					<text>2022-2-22</text>
				</view>
				<view class="msg">
					<text>该邮箱还未注册，输入密码成为新账号该邮箱还未注册，输入密码成为新账号该邮箱还未注册，输入密码成为新账号该邮箱还未注册，输入密码成为新账号</text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import topBar from '../../components/bar/top-bar.vue';
	export default {
		components: {
			topBar
		},
		data() {
			return {

			};
		},
		methods: {
			back() {
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	.request {
		display: flex;
		flex-direction: column;
		align-items: center;

		.topBar {
			position: relative;

			.back {
				width: 16px;
				height: 16px;
				margin-top: 7px;
				margin-left: 20px;
			}

			.tit {
				position: absolute;
				left: 40%;
				top: 40px;
				font-size: 20x;

				text {
					color: #272832;
					letter-spacing: -0.69px;
					font-weight: 700;
				}
			}
		}

		.main {
			margin-top: 60px;
			width: 90%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.request {
				width: 98%;
				height: 170px;
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-radius: 20px;
				margin-bottom: 80px;
				box-shadow: 0px 10px 10px 0px rgba(128, 128, 128, 0.3);

				image {
					position: absolute;
					top: -40px;
					width: 80px;
					height: 80px;
					border-radius: 50%;
				}

				.btns {
					margin: auto;
					position: absolute;
					top: 1px;
					width: 120%;
					text-align: center;

					button {
						display: inline-block;
						flex: 1;
						width: 65px;
						height: 35px;
						margin: 0 70px;
						font-size: 16px;
						line-height: 35px;
						border: none;
						background: none;
						border-radius: 15px;
					}

					.agree {
						color: black;
						background-color: #ffe02d;
					}

					.reject {
						color: #ed9799;
						background-color: #ffecec;
					}
				}

				.info {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin-top: 40px;
				}

				.msg {
					width: 90%;
					height: 60px;
					margin: auto;
					text-indent: 10px;
					padding: 0 5px;
					border-radius: 10px;
					background-color: #f0f2f4;
					line-height: 1.8;
					overflow: hidden;
				}
			}
		}
	}
</style>
