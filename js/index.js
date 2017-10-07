var li_list=document.querySelectorAll(".product-list li");
var mask_top=document.getElementsByClassName("mask-top");
for(var i=0;i<li_list.length;i++){
	(function(k){
		li_list[i].addEventListener("click",function(){
			for(var j=0;j<li_list.length;j++){
				li_list[j].classList.remove("list-on");
				mask_top[j].style.display="none";
			}
			mask_top[k].style.display="block";
			li_list[k].classList.add("list-on");			
		})
	})(i)	
}
