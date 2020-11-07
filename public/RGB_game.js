var colors;
var picked;
var numSqr;

	var squ=document.querySelectorAll(".square");
	var messageDisplay=document.getElementById("message");
	var one=document.getElementById("one");
	var reset=document.querySelector("#reset");
	var stripe=document.getElementById("stripe");
	var colorDisplay=document.getElementById("colorDisplay");
	var easybtn=document.querySelector("#easybtn");
	var hardbtn=document.querySelector("#hardbtn");

	easybtn.addEventListener("click",function(){
		easybtn.classList.add("selected");
		hardbtn.classList.remove("selected");
		numSqr=3;

		colors = generaterandomcolor(numSqr);
		picked=colors[randomcolor()];
		// console.log(picked);
		colorDisplay.textContent=picked;
		for(var i=0;i<squ.length;i++){
			if(colors[i]){
				loop();
			}
			else{
				document.querySelectorAll(".square")[i].style.display="none";
			}
		}
	});

	hardbtn.addEventListener("click",function(){
		hardbtn.classList.add("selected");
		easybtn.classList.remove("selected");
		numSqr=6;
		colors = generaterandomcolor(numSqr);
		picked=colors[randomcolor()];
		colorDisplay.textContent=picked;
		for (var i = 0; i < squ.length; i++) {
			document.querySelectorAll(".square")[i].style.display="block";
		}
		loop();
	});

	
	reset.addEventListener("click",function(){
		colors=generaterandomcolor(numSqr);
		picked=colors[randomcolor()];
		reset.textContent="New colors";
		colorDisplay.textContent=picked;
		one.style.backgroundColor="#213e4a";
		stripe.style.backgroundColor="steelblue";
		loop();
	});
// **************************************************************************************************************************************************
	function changecolor(color){
		for (var i = 0; i < squ.length; i++) {
		 		squ[i].style.backgroundColor=color;
		}
	}

	function randomcolor(){
		var random=Math.floor(Math.random() * numSqr);
		// console.log(random);
		return random;
	}

	function generaterandomcolor(num){
		var arr=new Array;
		for (var i = 0; i<num; i++) {
			arr.push(randomrgb());
		}
		// console.log(arr);
		return arr;
	}

	function randomrgb(){
		var r =Math.floor(Math.random() * 256);
		var g =Math.floor(Math.random() * 256);
		var b =Math.floor(Math.random() * 256);
		// console.log("rgb("+r+","+" "+g+","+" "+b+")");
		return "rgb("+r+","+" "+g+","+" "+b+")";
	}

	function loop(){
		for(var i=0;i<squ.length;i++){
		squ[i].style.backgroundColor=colors[i];

		squ[i].addEventListener("click",function(){
			var clickcolor= this.style.backgroundColor;

			if(clickcolor===picked){
				messageDisplay.textContent="Correct";
				changecolor(clickcolor);
				one.style.backgroundColor=clickcolor;
				stripe.style.backgroundColor=clickcolor;
				reset.textContent="Try Again?";
			}

			else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again";

			}

		});
	}
	}