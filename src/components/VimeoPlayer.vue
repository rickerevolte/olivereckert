<template>
	<vimeo-player 
	id="playContainer" 
	ref="player" 
	:video-id="videoID"  
	@ready="onReady" 
	@play="play()" 
	@pause="pause()"
	/>
</template>
<script>
export default {
    props: ['videoID'],
    data() {
		return {
			options: {
				muted: true,
                autoplay: false,
			},
			playerReady: true
		}
	},
    methods: {
		onReady() {
            console.log("ready")
			this.playerReady = true
		},
		play () {
			console.log("Component VimeoPlayer: play");
			this.$refs.player.play();

		},
		pause () {
			console.log("Component VimeoPlayer: pause");
			this.$refs.player.pause()
		},
		stop () {
			this.$refs.player.stop()
		}
	},
	
}
</script>