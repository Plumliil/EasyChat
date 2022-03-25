<template>
	<view :class="[{submit:true},{subTrans:isMore}]">
		<view class="main">
			<view class="voice">
				<image src="../../static/images/chat/audio.png" mode=""></image>
			</view>
			<view class="message">
				<textarea v-model="msgCon" @input="subMsg"></textarea>
			</view>
			<view class="fn">
				<image @tap="emoApear" src="../../static/images/chat/emo.png" mode=""></image>
				<image @tap="more" src="../../static/images/chat/more.png" mode=""></image>
			</view>
		</view>
		<view class="other">
			<view class="emo" v-if="isMore&&isEmo">
				<view class="emoji" v-for="(line,i) in emojis">
					<view class="" v-for="(item,index) in line" @tap="selectEmo(item)">
						{{item}}
					</view>
				</view>
			</view>
			<view class="more" v-if="isMore">
				<view class="imgs" @tap="subImg">
					<image src="../../static/images/chat/imgs.png" mode=""></image>
					<text>照片</text>
				</view>
				<view class="photo" @tap="subPto">
					<image src="../../static/images/chat/photo.png" mode=""></image>
					<text>拍摄</text>
				</view>
				<view class="adress" @tap="subAds">
					<image src="../../static/images/chat/address.png" mode=""></image>
					<text>位置</text>
				</view>
				<view class="video" @tap="subVid">
					<image src="../../static/images/chat/video.png" mode=""></image>
					<text>视频</text>
				</view>
				<view class="files" @tap="subFile">
					<image src="../../static/images/chat/file.png" mode=""></image>
					<text>文件</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEmo: false,
				isMore: false,
				msgCon: '',
				emojis: [
					['😀', '😁', '😂', '🤣', '😃'],
					['😄', '😅', '😆', '😉', '😊'],
					['😋', '😎', '😍', '😘', '😗'],
					['😙', '😚', '😛', '🙂', '🤗'],
					['🤔', '😐', '😑', '😶', '🙄'],
					['😏', '😣', '😥', '😮', '🤐'],
					['😯', '😪', '😫', '😴', '😌']
				]
			};
		},
		onLoad() {

		},
		methods: {
			// 发送文字
			subMsg(e) {
				let chatm = e.detail.value;
				let pos = chatm.indexOf('\n');
				let conRxg = /^\n+$/g;
				let flag = conRxg.test(chatm);
				// 解决多次回车不发送
				if (flag) {
					console.log('flag:', true);
					this.$nextTick(function() {
						this.msgCon = '';
					})
				}
				if (pos !== -1 && chatm.length > 1 && !flag) {
					this.$emit('subMsg', this.msgCon);
					setTimeout(() => {
						this.msgCon = '';
					}, 1)
					this.msgCon = '';
				}
				this.$nex
			},
			emoApear(e) {
				if (this.isMore && !this.isEmo) {
					this.isEmo = !this.isEmo;
				} else if (this.isMore && this.isEmo) {
					this.isMore = false;
					this.isEmo = false;
				} else {
					this.isMore = !this.isMore;
					this.isEmo = !this.isEmo;
				}
				this.$emit('showMore', this.isMore);
			},
			selectEmo(emo) {
				this.msgCon += emo;
			},
			// 其他
			more() {
				if (this.isEmo) {
					this.isEmo = !this.isEmo;
				} else {
					this.isMore = !this.isMore;
				}

				this.$emit('showMore', this.isMore);
			},
			// 功能
			subImg() {},
			subPto() {},
			subAds() {},
			subVid() {},
			subFile() {}
		}
	}
</script>

<style lang="scss">
	.submit {
		width: 100%;
		height: 270px;
		position: fixed;
		bottom: 0;
		left: 0;
		padding-top: 5px;
		transform: translateY(225px);
		background-color: #e8eaec;
		transition: .3s;
		z-index: 999;

		.main {
			display: flex;
			width: 100%;
			height: 40px;
			background-color: white;
			text-align: center;
			line-height: 40px;
			padding: 3px 0;

			image {
				width: 30px;
				height: 30px;
				padding: 3px 3px;
				margin: 0 3px;
			}

			.voice {
				flex: .5;
				padding: 0 3px;
			}

			.message {
				flex: 4;
				text-align: left;
				font-size: 30px;

				textarea {
					width: 100%;
					height: 38px;
					border: 1px solid gray;
					line-height: 2.5;
				}
			}

			.fn {
				flex: 1.5;

			}
		}

		.other {
			width: 100%;
			height: 200px;

			.emo {
				width: 90%;
				height: 100%;
				overflow-y: scroll;
				margin: auto;
				padding-top: 10px;

				.emoji {
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					text-align: center;
					justify-content: space-around;
					align-items: center;

					view {
						width: 50px;
						height: 50px;
						font-size: 25px;
						line-height: 50px;
					}
				}
			}

			.more {
				width: 90%;
				height: 100%;
				padding-top: 10px;
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				background-color: #e8eaec;
				margin: auto;
				transition: 1s;
				// justify-content: center;


				view {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 80px;
					height: 80px;
					margin-top: 3px;

					text {
						font-size: 14px;
						padding-top: 3px;
						color: gray;

					}

					image {
						width: 40px;
						height: 40px;
						padding: 10px;
						border-radius: 10px;
						background-color: white;
					}
				}

			}
		}
	}

	.subTrans {
		transition: .5s;
		transform: translateY(0);
	}
</style>
