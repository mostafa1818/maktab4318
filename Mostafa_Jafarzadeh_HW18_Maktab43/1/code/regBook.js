
$(document).ready(function(){
    $("submit").click(function(event){
        let firstname = event.target.firstName.value;
        let lastname = event.target.lastName.value;
        let age = event.target.age.value;
        let address = event.target.address.value;
        let nationalCode = event.target.nationalCode.value;
        let phone = event.target.phone.value;
     
        let image = event.target.image.value;
        a=$.post("https://5fe2159b7a94870017681fad.mockapi.io/example",{firstName:firstname, lastName:lastname,
                 age:age, address:address, nationalCode:nationalCode, phone:phone, image:image},function(data, status){
                    event.append(data);
                    console.log(data)
                    console.log(status)
        });
    })


    $("button").click(function(){
        a=$.get("https://5fe2159b7a94870017681fad.mockapi.io/example",function(data, status){
              data.forEach(element => {
                  let tr = document.createElement("tr");
                  let fn = document.createElement("td");
                  let ln = document.createElement("td");
                  let age = document.createElement("td");
                  let address = document.createElement("td");
                  let nationalCode = document.createElement("td");    
                  let phone = document.createElement("td");
                  let  avatar = document.createElement("td");
                  let  img = document.createElement("img");
                 
                  $("#table1").append(tr);
                  tr.append(fn);
                  tr.append(ln);
                  tr.append(age);
                  tr.append(address);
                  tr.append(nationalCode);
                  tr.append(phone);
                  tr.append(avatar);
                  avatar.append(img);

                  fn.innerHTML = element.firstName;
                  ln.innerHTML = element.lastName;
                  age.innerHTML = element.age;
                  address.innerHTML = element.address;
                  nationalCode.innerHTML = element.nationalCode;     
                  phone.innerHTML = element.phone;
                  img.src = element.avatar;

                  console.log(element.firstName)
                    });

            console.log(status)

        });

    })
    $("form").submit(function(event){
    event.preventDefault();
    console.log(event);
})
})

function print(data){
    var div = document.createElement("div");
    div.innerHTML = data ;
    div.style.backgroundColor = getRandomColor();
    document.body.appendChild(div);
    
}
