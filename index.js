let users =[
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"},
]
let select=document.getElementsByTagName("select")[0];
// console.log(select);

function filter(profession){
        if(profession===""){
            return users;
        }
        let userlist=users.filter((user)=>{
            return user.profession===profession;
        })
        return userlist;
}
// console.log(filter("admin"));

function addNewUser(){
    let name=document.getElementById("name").value.trim();
    let profession=document.getElementById("profession").value.trim();
    let age=document.getElementById("age").value.trim();
    // console.log(name);
    // alert(`name: ${name}`)
    if(name!="" && age!="" && profession!=""){
        users.push({
            id:users[users.length-1].id+1,
            name:name,
            age:age,
            profession:profession,

        })
    }else{
        alert("All field are required");
    }
    appedUser(users);
}

function filteruser(){
    let selectedValue=select.value;
    // alert(`${selectedValue}`);
    // alert(selectedValue);
    let filteredUser=filter(selectedValue);
    // console.log(filteredUser);
    appedUser(filteredUser);

}

function appedUser(users){
    let container=document.getElementById("list");
    // console.log(container);
    container.innerHTML=""
    for(let i=0;i<users.length;i++){
        let usercard=document.createElement("div");
        usercard.className="user";

        let id=document.createElement("div");
        id.innerText=users[i].id;
        let name=document.createElement("div");
        name.innerText=`Name :${users[i].name}`;
        let age=document.createElement("div");
        age.innerText=`Age :${users[i].age}`;
        let profession=document.createElement("div");
        profession.innerText=`Profession :${users[i].profession}`;

        usercard.append(id);
        usercard.append(name);
        usercard.append(age);
        usercard.append(profession);

        container.append(usercard);
    }
   

}
appedUser(users);


{/* <div class="user-list" id="list">
<div class="user">
    <div>1</div>
    <div>Name :salik</div>
    <div>age: 22</div>
    <div>profession: admin</div>
</div>

</div> */}