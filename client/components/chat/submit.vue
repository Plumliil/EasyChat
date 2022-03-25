<template>
	<view :class="[{submit:true},{subTrans:isMore}]">
		<view class="main">
			<view class="voice">
				<image src="../../static/images/chat/voice.png" mode=""></image>
			</view>
			<view class="message">
				<textarea type="text" value="" v-model="msgCon" @input="subMsg"></textarea>
			</view>
			<view class="fn">
				<image @tap="emoApear" src="../../static/images/chat/emo.png" mode=""></image>
				<image @tap="more" src="../../static/images/chat/more.png" mode=""></image>
			</view>
		</view>
		<view class="other">
			<view class="emo">
				<view class="emoji" v-for="(line,i) in emojis">
					<view class="" v-for="(item,index) in line" @tap="selectEmo(item)">
						{{item}}
					</view>
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
			subMsg(e) {
				let pos = this.msgCon.indexOf('\n');
				let conRxg = /^\n+$/g;
				let flag = conRxg.test(this.msgCon);
				if (pos !== -1 && !flag && this.msgCon.length > 0) {
					this.$emit('subMsg', this.msgCon);
					setTimeout(() => {
						this.msgCon = '';
					}, 0)
				}
			},
			emoApear(e) {
				console.log(e);
				// this.msgCon=
			},
			selectEmo(emo) {
				console.log(emo);
				this.msgCon += emo;
			},
			more() {
				this.isMore = !this.isMore;
				this.$emit('hightChange', this.isMore)
			}
		}
	}
</script>

<style lang="scss">
	.submit {
		width: 100%;
		height: 240px;
		position: fixed;
		bottom: 0;
		left: 0;
		padding-top: 5px;
		transform: translateY(195px);
		transition: 1s;

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
			background-color: pink;

			.emo {
				width: 90%;
				height: 100%;
				overflow-y: scroll;
				margin: auto;

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
		}
	}

	.subTrans {
		transition: 1s;
		transform: translateY(0);
	}
</style>
