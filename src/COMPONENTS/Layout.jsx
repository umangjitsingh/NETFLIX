import React, {useEffect} from 'react'
import {Outlet, useNavigate} from "react-router-dom";
import Footer from "./Footer.jsx";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../UTILS/firebase.js"
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../REDUX-STORE-SLICE/userSlice.js";


function Layout() {
const dispatch=useDispatch();
const navigate=useNavigate();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
			const{uid,email,displayName,photoURL}=user;
			dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
			navigate("/browse")
			} else {
				dispatch(removeUser());
				navigate("/")
			}
		});
	}, [dispatch]);
	return (<div >
			<Outlet/>
			<Footer/>
		</div>

	)
}

export default Layout
