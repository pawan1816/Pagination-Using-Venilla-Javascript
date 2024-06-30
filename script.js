var images=[
    {
        src:"/img1.jpeg",
        desc:"laptop"
    },
    {
        src:"/img2.jpeg",
        desc:"Tablet"
    },
    {
        src:"/img3.jpeg",
        desc:"Bike"
    },
    {
        src:"/img4.jpeg",
        desc:"Car"
    },
    {
        src:"/img5.jpeg",
        desc:"Truck"
    },
    {
        src:"/img6.jpeg",
        desc:"Bus"
    },{
        src:"/img7.jpeg",
        desc:"Train"
    },{
        src:"/img8.jpeg",
        desc:"Airplain"
    },{
        src:"/img9.jpeg",
        desc:"TV"
    },{
        src:"/img10.jpeg",
        desc:"Jet"
    },{
        src:"/img11.jpg",
        desc:"Phone"
    }
];
const nav=document.getElementById("nav");
const content=document.getElementById("content");

let pageIndex=0;
let itemsPerPage=3;


loadItems();

function loadItems(){
    content.innerHTML="";
    for(let i=pageIndex*itemsPerPage;i<(pageIndex*itemsPerPage)+itemsPerPage;i++){
        if(!images[i]){break;}
        const item=document.createElement('div');
        item.innerHTML=`
        <div>
            <img src="${images[i].src}"/>
        </div>
        <div>
            <span>${images[i].desc}</span>
        </div>
        `;
        content.append(item);
    }
    loadPageNav();
}

function loadPageNav(){
    nav.innerHTML="";
    var leftarrow=document.createElement('div');
    leftarrow.innerHTML=`<i class="fa-solid fa-left-long"></i>`;
    leftarrow.addEventListener('click',(e)=>{
         if(pageIndex-1>=0){
            pageIndex-=1;
            loadItems();
         }
    })
    nav.append(leftarrow);
    for(let i=0;i<images.length/itemsPerPage;i++){
        const span=document.createElement('span');
        span.innerHTML=i+1;
        span.addEventListener('click',(e)=>{
            pageIndex=e.target.innerHTML-1;
            loadItems();
        });
        if(i===pageIndex){
            span.style.fontSize="2rem";
        }
        nav.append(span);
    }
    rightarrow=document.createElement('div');
    rightarrow.innerHTML=`<i class="fa-solid fa-right-long"></i>`;
    var size=(images.length)/itemsPerPage;
    rightarrow.addEventListener('click',(e)=>{
        if(pageIndex+1<(images.length)/itemsPerPage){
            pageIndex=pageIndex+1;
            loadItems();
            console.log(pageIndex);
        }
    });
    nav.append(rightarrow);
}