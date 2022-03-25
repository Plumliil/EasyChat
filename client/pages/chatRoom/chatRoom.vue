<template>
	<view class="chatRoom">
		<view class="bgc">

		</view>
		<top-bar class="topBar">
			<template #left>
				<view class="back" @click="back">
					<image src="../../static/images/commons/toLeft.png" mode=""></image>
				</view>
			</template>
			<template #center>
				<view class="tit">
					<text>小明明小明</text>
				</view>
			</template>
			<template #right>
				<view class="groups">
					<image src="../../static/images/index/p1.jpeg" mode=""></image>
				</view>
			</template>
		</top-bar>
		<view class="chat">
			<view class="chat-con" :class="[{chatScl:isMore}]">
				<view class="chat-ls" v-for="(item,index) in msgArr" :key="index" :id="item.tip">
					<view class="chat-time" v-if="item.time!==''">{{item.time}}</view>
					<view class="msg-m msg-left" v-if="item.id!=='b'">
						<image class="profileP" :src="item.imgUrl" mode=""></image>
						<view class="msg-con" :class="[{msg_con_img:item.types!==0}]">
							<view class="msg_txt" v-if="item.types===0">{{item.message}}</view>
							<image v-else-if="item.types===1" :src="item.message" mode="widthFix"
								@tap="previewImg(item.message)"></image>
							<audio v-else :src="item.message"></audio>
						</view>
					</view>
					<view class="msg-m msg-right" v-else>
						<image class="profileP" :src="item.imgUrl" mode=""></image>
						<view class="msg-con">
							<view v-if="item.types===0">{{item.message}}</view>
							<image v-else-if="item.types===1" :src="item.message" mode="widthFix"
								@tap="previewImg(item.message)"></image>
							<audio v-else :src="item.message"></audio>
						</view>
					</view>
				</view>
			</view>
		</view>

		<submit @subMsg="subMsg" @hightChange="hightChange"></submit>
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js';
	import changeTime from '../../commons/js/utils/time.js';
	import topBar from '../../components/bar/top-bar.vue';
	import submit from '../../components/chat/submit.vue';
	export default {
		components: {
			topBar,
			submit,
		},
		data() {
			return {
				msgArr: [],
				imgMsg: [],
				oldTime: new Date(),
				// pdInput:10
				isMore:false,
				contentHeight: 0
			}
		},
		onLoad() {
			this.getChatDate();
			this.toBottom();
		},
		onPageScroll(){
			this.contentHeight = uni.getSystemInfoSync().windowHeight;
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 获取聊天数据
			getChatDate() {
				this.msgArr = datas.chatMsg();
				this.msgArr.forEach(item => {
					// 时间转换
					let t = changeTime.spaceTime(this.oldTime, item.time);
					this.oldTime = t === '' ? this.oldTime : t;
					item.time = t === '' ? t : changeTime.dateTime(t);
					item.imgUrl = '../../static/images/index/' + item.imgUrl;
					// 类型显示
					if (item.types === 1) {
						item.message = '../../static/' + item.message;
						this.imgMsg.push(item.message);
					}
				})
				this.msgArr = this.msgArr.reverse();
				this.imgMsg = this.imgMsg.reverse();
			},
			// 预览图片
			previewImg(url) {
				let curIndex = 0;
				this.imgMsg.forEach((item, index) => {
					if (item == url) {
						curIndex = index
					}
					console.log(item);
				})
				uni.previewImage({
					current: curIndex,
					urls: this.imgMsg,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				})
			},
			// 文字
			subMsg(data) {
				console.log(data);
				let msg = {
					id: 'b',
					imgUrl: '../../static/images/index/p1.jpeg',
					message: data,
					types: 0,
					time: new Date(),
					tip: 8
				}
				this.msgArr.push(msg);
				console.log(this.msgArr);
				this.toBottom()
			},
			// 返回底部
			toBottom() {
				this.contentHeight = uni.getSystemInfoSync().windowHeight;
				this.$nextTick(function() {
					uni.pageScrollTo({
						scrollTop: this.contentHeight,
						duration: 300
					})
				})
			},
			
			hightChange(data) {
				this.isMore = data;
				this.toBottom()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chatRoom {
		width: 100%;
		height: 100%;
		background-color: rgba(128, 128, 128, .1);

		.topBar {
			display: flex;
			justify-content: space-between;

			.back {
				width: 30%;
				line-height: 44px;

				image {
					width: 16px;
					height: 16px;
					text-align: center;
					margin-left: 20px;
				}
			}

			.tit {
				width: 100%;
				height: 44px;
				text-align: center;
				line-height: 44px;
			}

			.groups {
				width: 30%;
				line-height: 40px;
				text-align: center;

				image {
					width: 40px;
					height: 40px;
					border-radius: 20px;
				}
			}
		}

		.chat {
			width: 100%;
			height: 100%;
			margin-top: 100px;
			padding-bottom: 70px;

			.chat-con {
				width: 95%;
				margin: auto;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				transition: 1s;

				.chat-ls {
					width: 100%;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					justify-content: center;

					.chat-time {
						width: 75px;
						height: 17px;
						font-family: PingFangSC-Regular;
						font-size: 12px;
						color: rgba(39, 40, 50, 0.30);
						letter-spacing: -0.41px;
						font-weight: 400;
						padding: 20px 0;
						margin: auto;
						text-align: center;
					}

					.msg-m {
						display: flex;

						.profileP {
							width: 40px;
							height: 40px;
							border-radius: 10px;
						}

						.msg-con {
							max-width: 240px;
							min-height: 20px;
							height: auto;
							background: #FFFFFF;
							border-radius: 0px 10px 10px 10px;
							margin: 0px 15px;
							padding: 10px;

							text {
								font-size: 20px;
								line-height: 20px;
								letter-spacing: -0.55px;
								margin: 3px 5px;
							}

							image {
								max-width: 240px;
							}
						}

						.msg_con_img {
							background: none;
						}

					}

					.msg-right {
						flex-direction: row-reverse;

						.msg-con {
							background: #fff054;
							border-radius: 10px 0px 10px 10px;
						}

					}
				}
			}

			.chatScl {
				// padding-bottom: ;
				transform: translateY(-200px);
			}
		}
	}
</style>
