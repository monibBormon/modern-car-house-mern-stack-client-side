import { useEffect, useState } from "react";
import firebaseInit from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'


// initialize firebase app
firebaseInit()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    //get auth
    const auth = getAuth()

    // register user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name, 'POST')
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // login user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // save user
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://salty-beyond-08378.herokuapp.com/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
    }

    // state changed
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unSubscribe;
    }, [auth])

    useEffect(() => {
        fetch(`https://salty-beyond-08378.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // log out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        isLoading,
        admin,
        loginUser,
        registerUser,
        logOut
    }

}

export default useFirebase;