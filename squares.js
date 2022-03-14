#!/usr/bin/env node

<html>
	<canvas width="1200" height="1200"></canvas>
	<script>
		let canvas = document.querySelector('canvas')
		let c = canvas.getContext('2d')

		var width = 1200
		var xoff=0
		var yoff=0
		var height=1200

		c.fillStyle = "black"
		c.fillRect(xoff,yoff,width,height)
		function summer(by){
			var i = 1
			function incre(){
				i = i + 1
				return i + by
			}
			return incre
		}

		function gen(by){
			var i = 1
			function incre(){
				i = i + 1
				return i * by
			}
			return incre
		}

		var incrementor = gen(0.01159)
		var sumator = summer(0.00001)

		console.log(incrementor())
		console.log(incrementor())
		console.log(incrementor())
		console.log(incrementor())



		for (let i = 0; i < 1000; i++){
			c.beginPath()
			// c.strokeStyle = "red";
			c.strokeStyle = `rgb(
		 ${Math.floor(255 * Math.random())},
		 ${Math.floor(55 * Math.random())},
		 ${Math.floor(155 * Math.random())})`;
			c.rect(Math.random()*100,Math.random() * 100-(i*incrementor()),width,400-(i * incrementor()))
			c.stroke()
		}

		incrementor = gen(1.0005)

		for (let i = 0; i < 1000; i++){
			c.beginPath();
			c.strokeStyle = `rgb(
		 ${Math.floor(155 * Math.random())},
		 ${Math.floor(15 * Math.random())},
		 ${Math.floor(155 * Math.random())})`;
			// c.strokeStyle = `crimson`
			c.arc(300,100+i,100+incrementor(),0-1000*incrementor(),Math.PI*2);
			c.stroke()
		}
		var ctx = c

		// for (let i = 0; i < 600; i++) {
		// 	// c.lineWidth = incrementor()
		// 	for (let j = 0; j < 600; j++) {
		// 		ctx.strokeStyle = `rgb(
		// 		${Math.floor(255 - 42.5 * i)},
		// 		0,
		// 		${Math.floor(255 - 42.5 * j)})`;
		// 		ctx.beginPath();
		// 		ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10+i, i, Math.PI * 2, true);
		// 		ctx.stroke();
		// 	}
		// }


	</script>
</html>
for (let i = 0; i < 5; i++){

}
