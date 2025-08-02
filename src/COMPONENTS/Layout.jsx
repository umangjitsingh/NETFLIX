 import React, {useEffect, useState} from 'react'
import {Outlet, useNavigate} from "react-router-dom";
import Footer from "./Footer.jsx";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../UTILS/firebase.js"
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../REDUX-STORE-SLICE/userSlice.js";


function Layout() {
const dispatch=useDispatch();
const navigate=useNavigate();
	const [checkingAuth, setCheckingAuth] = useState(true);

	useEffect(() => {
		const unsubscribe=onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(addUser({ uid, email, displayName, photoURL }));
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
			setCheckingAuth(false);
		});

		return ()=> unsubscribe();
	}, [dispatch, navigate]);

	if (checkingAuth) return <p>Checking credentials...</p>;
	return (<div >
			<Outlet/>
			<Footer/>
		</div>

	)
}

export default Layout
