export const isAuthenticated = () => {
    if(typeof window == 'undefined'){
        return false
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false
    }
}


export const signOut = (next) => {
    if(typeof window != 'undefined'){
        localStorage.removeItem('jwt',JSON.stringify())
        // next()
        
    }
}

export const authenticate = (data, next)=>{
    if(typeof window != 'undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        next()
    }
}