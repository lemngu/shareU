import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.css';
import styled from "styled-components";

import Header from './component/ui/Header'
import Profile from './component/ui/Profile';
import SideBtnList from './component/list/SideBtnList';

import MainPage from '../src/component/page/MainPage';
import PostViewPage from '../src/component/page/PostViewPage'
import PostWritePage from '../src/component/page/PostWritePage';




const HomeTitle = styled.p`
    font-size: 30px;
    margin: 50px 0 10px 20px;
    color: #004A8F;
`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header></Header>
    <div id='backLayer'>
      <Profile></Profile>
      <div id='container'>
        <HomeTitle>mg님의 미니홈피</HomeTitle>
        <div id='page'>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route index element={<MainPage/>} />
              <Route path="write" element={<PostWritePage/>} />
              <Route path="post/:id" element={<PostViewPage/>} />
            </Routes>
            <SideBtnList />
          </BrowserRouter>
        </div>
      </div>
    </div>
  </div>
);