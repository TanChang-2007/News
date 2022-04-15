import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Home() {
  return (
    <body className='w-full h-screen flex-1'>
      <div className='justify-between flex-row flex border-b-2'>
        <Link to='/'>
          <div className=' text-5xl left-0 m-1 gap-3'>Top<span className=' text-red-600'>News</span></div>
        </Link>
        <button className='m-2'>
          <Icon icon="iconoir:profile-circled" width="50" height="50" />
        </button>
      </div>
      <div>
        <button className='flex flex-row justify-around border-b-2 p-2 w-full'>
          <Icon icon="fontisto:world-o" width="30" height="30" />
          <Icon icon="ic:baseline-sports-esports" width="30" height="30" />
          <Icon icon="fa6-solid:person-running" width="30" height="30" />
          <Icon icon="twemoji:flag-malaysia" width="30" height="30" />
          <Icon icon="map:art-gallery" width="30" height="30" />
          <Icon icon="fluent:food-24-filled" width="30" height="30" />
          <div className=' border flex flex-row items-center gap-20 rounded-lg text-gray-500'>Search
            <Icon className=' p-1 border-l-2 text-black' icon="bi:search" width="25" height="30" /></div>

        </button>
      </div>
    </body>
  )
}

function WorldNews() {
  return (
    <body>

    </body>
  )
}

function ESports() {
  return (
    <body>

    </body>
  )
}

function Sports() {
  return (
    <body>

    </body>
  )
}

function MalaysiaNews() {
  return (
    <body>

    </body>
  )
}

function Art() {
  return (
    <body>

    </body>
  )
}

function Food() {
  return (
    <body>

    </body>
  )
}

function Profile() {
  return (
    <body>

    </body>
  )
}

function Subcribtion() {
  return (
    <body>

    </body>
  )
}

function App() {

  return (
    <div className="flex w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="worldnews" element={<WorldNews />} />
          <Route path="esports" element={<ESports />} />
          <Route path="sports" element={<Sports />} />
          <Route path="malaysia" element={<MalaysiaNews />} />
          <Route path="art" element={<Art />} />
          <Route path="food" element={<Food />} />
          <Route path="profile" element={<Profile />} />
          <Route path="subcribe" element={<Subcribtion />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
