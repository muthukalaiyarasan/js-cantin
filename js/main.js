// var kalai=document.getElementById("kalai-12");



// var create=document.createElement("img");
// create.setAttribute("src" ,"img-7.webp");
// kalai.append(create);

// var head=document.createElement("h1");
// head.innerHTML=("orange");
// kalai.appendChild(head);

// var create=document.createElement("img");
// create.setAttribute("src" ,"img-2.webp");
// kalai.appendChild(create);

// var head=document.createElement("h1");
// head.innerHTML=("banana");
// kalai.appendChild(head);


// var row=document.querySelector("#row")
// row.setAttribute("class","row")


let canteen=[
            {
	          img:"img-1.jpg",
			  name:"walter white",
			  work:"master chif"
			  
             },
			 
			 {
	          img:"img-3.jpg",
			  name:"Sarah Jhonson",
			  work:"Patissier"
             },
			 
			 {
	          img:"img-5.jpg",
			  name:"William Anderson",
			  work:"Cook"
             }
			 ]
			 
			 


canteen.map((e)=>{

var row=document.querySelector("#row")
row.setAttribute("class","row")


var col=document.createElement("div")
col.setAttribute("class","col-lg-4 col-12 col-sm-6")



	 
var imgItem=document.createElement("div")
    imgItem.setAttribute("class","imgItem")
	
	
var image=document.createElement("img")
   image.setAttribute("src",e.img)
   
   
   
   var title=document.createElement("div")
    title.setAttribute("class","title text-center border")
	
 var title1=document.createElement("h3")
    title1.innerHTML=e.name

   var title2=document.createElement("h4")
     title2.innerHTML=e.work
	 
	 var iconlogo=document.createElement("div")
    iconlogo.setAttribute("class","iconlogo")
	
	 var icon=document.createElement("i")
     icon.setAttribute("class","fa fa-facebook-official")
	 
	 var icon1=document.createElement("i")
     icon1.setAttribute("class","fa fa-instagram")
	 
	 var icon2=document.createElement("i")
     icon2.setAttribute("class","fa fa-linkedin")
	

row.append(col)

col.appendChild(imgItem)

imgItem.append(image,title)

title.append(title1,title2,icon,icon1,icon2)
	 

})