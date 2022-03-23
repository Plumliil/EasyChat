<template>
	<view class="detail">
		<top-bar class="topBar">
			<template #left>
				<image class="back" src="../../static/images/commons/toLeft.png" mode="" @click="back"></image>
			</template>
			<template #right>
				<image class="more" src="../../static/images/commons/more.png" mode=""></image>
			</template>
		</top-bar>
		<view class="main">
			<view class="img">
				<image :class="[{imgTsf:!isAddFriend}]" src="../../static/images/index/p3.jpeg" mode="">
					<text :class="[{tip:true},{tipTsf:!isAddFriend}]">♀</text>
				</image>
			</view>
			<text class="name">左左左表妹</text>
			<text class="uname">昵称:左左</text>
			<text class="info">
				夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。
			</text>
		</view>
		<view class="bg">
			<view class="bg-bai"></view>
			<image class="bg-img" src="../../static/images/index/p3.jpeg" mode="aspectFill"></image>
		</view>

		<view :class="[{add:!isAddFriend},{disAppear:isAddFriend}]">
			<!-- v-show="!isAddFriend" -->
			<view class="name">
				{{user.name}}
			</view>
			<textarea :value="myName+'请求加为好友'" placeholder="说点什么吧..." maxlength="20" />
		</view>

		<bottom-bar class="bottomBar">
			<template #left>
				<button class="cancel" v-if="!isAddFriend" type="default" @click="cancel">取消</button>
			</template>
			<template #center>
				<button class="addFriend" v-if="isAddFriend" type="default" @click="addFriend">添加好友</button>
				<button class="confirm" v-if="!isAddFriend" type="default" @click="confirm">发送</button>
			</template>
		</bottom-bar>
	</view>
</template>

<script>
	import topBar from '../../components/bar/top-bar.vue';
	import bottomBar from '../../components/bar/bottom-bar.vue';
	export default {
		components: {
			topBar,
			bottomBar
		},
		data() {
			return {
				myName: '右右',
				user: {
					name: '左左左表妹',
					uname: '左左',
					intr: '夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。'
				},
				isAddFriend: true,

			};
		},
		onLoad(options) {
			console.log(options);
			console.log('detial 页面');
		},
		methods: {
			// 返回上一页
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			addFriend() {
				this.isAddFriend = false;
				console.log(11);
			},
			cancel() {
				this.isAddFriend = true;
			},
			confirm() {}
		}
	}
</script>

<style lang="scss">
	.bg {
		z-index: -2;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		.bg-bai {
			width: 100%;
			height: 100%;
			background-color: rgba(255, 255, 255, 0.4);
		}

		.bg-img {
			z-index: -1;
			opacity: 1;
			position: absolute;
			left: -10px;
			top: -10px;
			width: 110%;
			height: 110%;
			filter: blur(20px);
		}
	}

	.detail {
		.topBar {
			background: none;
			border: none;

			.back {
				width: 20px;
				height: 20px;
				line-height: 50px;
				margin-left: 20px;
			}

			.more {
				width: 26px;
				height: 26px;
				margin-right: 30px;
			}
		}

		.main {
			z-index: 2;
			flex: 1;
			margin-top: 100px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.img {
				position: relative;
				width: 100%;
				display: flex;
				justify-content: center;
				z-index: 10;

				image {
					transition: 1s;
					width: 200px;
					height: 200px;
					border: 3px solid rgba(255, 255, 255, .4);
					border-radius: 24px;
					z-index: 10;
				}

				.imgTsf {
					transition: 1s;
					width: 200px;
					height: 200px;
					border: 3px solid rgba(255, 255, 255, .4);
					transform: translateX(-60px);
					border-radius: 50%;
					z-index: 10;
				}

				.tip {
					transition: 1s;
					position: absolute;
					width: 32px;
					height: 32px;
					background: #FF5D5B;
					border-radius: 18px;
					color: white;
					bottom: 5px;
					right: 24%;
					line-height: 32px;
					text-align: center;
					z-index: 11;
				}

				.tipTsf {
					transform: translateX(-80px);
					transition: 1s;
				}
			}

			.name {
				width: 126px;
				height: 37px;
				font-family: PingFangSC-Regular;
				font-size: 26px;
				color: #272832;
				letter-spacing: -0.89px;
				font-weight: 400;
				padding: 20px 10px 0 0;
			}

			.uname {
				width: 95px;
				height: 20px;
				font-family: PingFangSC-Regular;
				font-size: 18px;
				color: #272832;
				letter-spacing: -0.48px;
				font-weight: 400;
				text-align: center;
				padding: 10px 0;
			}

			.info {
				width: 276px;
				height: 85px;
				font-family: PingFangSC-Light;
				font-size: 16px;
				color: #272832;
				letter-spacing: -0.48px;
				line-height: 24px;
				font-weight: 200;
				padding: 10px 0;
			}

			.addBtn {
				position: absolute;
				bottom: 50px;
				width: 342px;
				height: 40px;
				background: #FFE431;
				border-radius: 5px;
				line-height: 40px;
			}
		}

		.add {
			opacity: 1;
			position: fixed;
			bottom: 0;
			height: 626px;
			width: 100%;
			background-color: white;
			background: #FFFFFF;
			border-radius: 20px 20px 0px 0px;
			transition: all 1s;

			.name {
				opacity: 1;
				transition: all 1s;
				width: 126px;
				height: 10px;
				font-family: PingFangSC-Regular;
				font-size: 26px;
				color: #272832;
				letter-spacing: -0.89px;
				font-weight: 400;
				padding: 100px 0px 40px 40px;
			}

			textarea {
				opacity: 1;
				transition: all 1s;
				width: 319px;
				height: 360px;
				background: #F3F4F6;
				border-radius: 10px;
				text-indent: 10px;
				line-height: 2;
				margin: auto;
			}
		}

		.disAppear {
			opacity: 0;
			transition: all 1s;
			position: fixed;
			bottom: 0;
			height: 626px;
			width: 100%;

			.name {
				opacity: 0;
				transition: all 1s;
			}

			textarea {
				opacity: 0;
				transition: all .8s;
				width: 319px;
				height: 360px;
				margin: auto;
			}
		}

		.bottomBar {
			text-align: center;

			.cancel {
				width: 86px;
				height: 40px;
				background: rgba(39, 40, 50, 0.10);
				border-radius: 5px;
				line-height: 40px;
			}

			.addFriend {
				width: 342px;
				height: 40px;
				background: #FFE431;
				border-radius: 5px;
				line-height: 40px;
			}

			.confirm {
				width: 240px;
				height: 40px;
				background: #FFE431;
				border-radius: 5px;
				line-height: 40px;
			}
		}
	}
</style>
