import React, { useContext } from 'react';
import {Routes, Route} from "react-router-dom";
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import {publicRoutes, privateRoutes} from '../router/index';
import Login from '../pages/Login';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth 
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route element={<route.element/>}
                        path={route.path} 
                        exact={route.exact} 
                        key = {route.path}/>
                )}
                <Route path='*' element={<Posts />}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route element={<route.element/>}
                        path={route.path} 
                        exact={route.exact} 
                        key = {route.path}/>
                )}
                <Route path='*' element={<Login />}/>
        </Routes>
    );
};

export default AppRouter;

//  <Route exact path="/posts/:id" element={<PostIdPage />} />
// <Route exact path="/posts" element={<Posts />} />
// <Route path="/about" element={<About />} /> 