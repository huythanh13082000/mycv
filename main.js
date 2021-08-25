document.addEventListener("DOMContentLoaded",function(){
        var header=document.getElementsByClassName('header');
        var sp=document.getElementsByClassName('sp');
        var img = document.getElementsByClassName('img1');
        var skill= document.getElementsByClassName('skill');
        var f_btn=document.getElementsByClassName('f_btn');

        window.addEventListener('scroll',function(){
            if(this.pageYOffset>0){
                header[0].classList.add('hd_add');
                sp[0].classList.add('sp_add');
            }
            else{
                header[0].classList.remove('hd_add');
                sp[0].classList.remove('sp_add');
            }
            if(this.pageYOffset> (img[0].offsetTop-200)){
                img[0].classList.add('img_move');
            }
            if(this.pageYOffset<=(img[0].offsetTop-200)){
                img[0].classList.remove('img_move');
            }
            if(this.pageYOffset<=(skill[0].offsetTop)){
                skill[0].classList.add('img_move');
            }
        })
       
            window.addEventListener('scroll',function(){
                f_btn[0].onclick = function(){
                    // console.log('hihi');
                    // window.pageYOffset='0';
            }
            })

        
},false)