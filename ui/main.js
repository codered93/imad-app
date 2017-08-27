/*console.log('Loaded!');

//Change the text of the main Div
var element=document.getElementById('main-text');
element.innerHTML='New Value';

//Move the image

var img=document.getElementById('madi');

var marginLeft=0;
function moveRight(){
	marginLeft=marginLeft+5;
	img.style.marginLeft=marginLeft+'px';
}

img.onclick=function(){
	var interval=setInterval(moveRight,50);
};*/

var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
	//Create a request to the counter endpoint
	var request=new XMLHttpRequest();

	//Capture the response and store it in a variable

	request.onreadystatechange=function(){
		if(request.readyState === XMLHttpRequest.DONE){
			//Take some action
			if(request.status === 200){
				var counter=request.responseText;
				var span=document.getElementById('count');
				span.innerHTML=counter.toString();
			}
		}
	};

	//Make the request
	request.open('GET','http://localhost:8090/counter',true)
	request.send(null);


	//Render the variable in correct span
	/*counter=counter+1;
	var span=document.getElementById('count');
	span.innerHTML=counter.toString();*/
};

//Submit name

var submit=document.getElementById('submit-btn');
submit.onclick=function(){
	//create a request object
	var request=new XMLHttpRequest();

	//Capture the response and store it in a variable

	request.onreadystatechange=function(){
		if(request.readyState === XMLHttpRequest.DONE){
			//Take some action
			if(request.status === 200){
				//Capture the list of names and render as a list
					var names=request.responseText;
					names=JSON.parse(names);
					var list='';
					for(var i=0;i<names.length;i++)
					{
						list+='<li>'+names[i]+'</li>';
					}
					var ul=document.getElementById('namelist');
					ul.innerHTML=list;
			}
		}
	};

	//Make the request
	var nameInput=document.getElementById('name');
	var name=nameInput.value;
	request.open('GET','http://localhost:8090/submit-name?name='+name,true) //Here the name is coming from input box at the top
	request.send(null);
	
};