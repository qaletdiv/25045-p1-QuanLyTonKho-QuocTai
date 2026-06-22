const dataUser = [{ user: 'admin', password: '123456' },{ user: 'member1', password: '123456' }];
const localStorageUser = localStorage.getItem("user");
if(!localStorageUser){
    localStorage.setItem("user", JSON.stringify(dataUser));
}