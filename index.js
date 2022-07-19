const input = document.querySelector("#input");
const avatar = document.querySelector("#avatar");

function Avatar(){
    const url = `https://avatars.dicebear.com/api/avataaars/${input.value}.svg`;
    avatar.src = url;
}
input.addEventListener("keyup", Avatar)




