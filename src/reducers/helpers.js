export function logIn(user) {
    if(user.name==='user'&&user.pass==='user'){
        localStorage.setItem('isAuth',JSON.stringify(true));
    }  
}

export function logOut(user) {
    localStorage.setItem('isAuth',JSON.stringify(false));
}

export default {logIn,logOut }