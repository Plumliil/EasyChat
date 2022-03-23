<template>
	<!-- <view class="member"> -->
	<view class="member-list">
		<view class="member" v-for="(item,index) in data" :key="index">
			<view class="photo_tip" @click="toDetail(item)">
				<image :src="item.imgUrl" mode=""></image>
				<view :class="[{tip:tip}]">
					<slot name="tip" :item="item"></slot>
				</view>
			</view>
			<view class="info" @click="toChat(item)">
				<slot name="content">
					<text class="title" v-html="item.name"></text>
					<text class="message" v-html="item[msgCon]"></text>
				</slot>
			</view>
			<view class="right">
				<slot name="right" :item="item">
					<text class="time">{{item.time}}</text>
				</slot>
			</view>
		</view>
	</view>
	<!-- </view> -->
</template>

<script>
	export default {
		props: {
			data: {
				type: Array,
				required: true
			},
			tip:{
				type:Boolean,
				default:false
			},
			msgCon:{
				type:String,
				default:'email'
			}
		},
		data() {
			return {

			}
		},
		onLoad() {
			console.log(data);
		},
		methods:{
			toDetail(item){
				console.log(item);
				uni.navigateTo({
					url:`../../pages/user/detail?id=${item.id}`,
				})
			},
			toChat(){
				console.log('chat');
			}
		}
	}
</script>

<style lang="scss">
	.member-list {
		width: 95%;

		.member {
			height: 50px;
			width: 100%;
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

				image {
					width: 48px;
					height: 48px;
					border-radius: 10px;
				}
			}

			.info {
				flex: 2;
				display: flex;
				flex-direction: column;
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

			.right {
				height: 100%;
				width: 140px;
				line-height: 50px;
				flex: 1;
				display: flex;
				align-items: center;
				flex-direction: row-reverse;

				.time {
					font-size: 12px;
					color: rgba(39, 40, 50, 0.40);
				}

			}

			// .sendBtn {
			// 	width: 80px;
			// 	height: 30px;
			// 	text-align: center;
			// 	line-height: 30px;
			// 	border-radius: 12px;
			// 	color: #000000;
			// 	background-color: #FFE431;
			// }

		}
	}



	// .notice-left {

	// 	image {
	// 		width: 45px;
	// 		height: 45px;
	// 		border-radius: 10px;
	// 	}
	// }

	// .notice-con {
	// 	width: 60%;
	// 	height: 25px;
	// 	display: flex;
	// 	flex-direction: column;
	// 	justify-content: center;
	// 	line-height: 25px;
	// 	font-weight: 400;

	// 	image {
	// 		width: 45px;
	// 		height: 45px;
	// 		border-radius: 10px;
	// 	}

	// 	.name {
	// 		font-size: 18px;
	// 	}

	// 	.email {
	// 		font-size: 12px;
	// 	}
	// }

	// .sendBtn {
	// 	width: 70px;
	// 	height: 30px;
	// 	text-align: center;
	// 	line-height: 30px;
	// 	border-radius: 12px;
	// 	color: #000000;
	// 	background-color: #FFE431;
	// }

	// }
</style>
