const datas=[
    {
        id: "001",
        name: "Phanit",
        image: "image/photo_2022-12-30_16-42-19.jpg",
        sex: "M",
        position: "Developer"
    },
    {
        id: "002",
        name: "Pheak",
        image: "image/photo_2023-05-18_21-37-35.jpg",
        sex: "M",
        position: "Network"
    },
    {
        id: "003",
        name: "Nha",
        image: "image/photo_2023-05-18_22-48-01.jpg",
        sex: "F",
        position: "Singer"
    },
    {
        id: "004",
        name: "Liko",
        image: "image/photo_2023-05-18_21-37-29.jpg",
        sex: "M",
        position: "Engineering"
    },
];
const containers=document.querySelector(".containers");
let card= "";
datas.map(function(data){
    return card+= `
    <div class="container">
    <div class="image">
        <img src=${data.image} alt="">
    </div>
    <div class="content">
        <h3>ID   : ${data.id}</h3>
        <h3>Name : ${data.name} </h3>
        <h3>Sex  : ${data.sex}</h3>
        <h3>Position : ${data.position}</h3>
    </div>
</div>
    `;
});
containers.innerHTML=card;