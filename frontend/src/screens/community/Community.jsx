import React from 'react'
import WeeklySpecial from '../../components/weekly-special/WeeklySpecial'
import MiscRecipes from '../../components/misc-recipes/MiscRecipes'
import { NewsEvents } from '../../components/news-events/NewsEvents'
import { NavigationBar } from '../../shared/NavigationBar'
import Footer from '../../components/footer/Footer'
import Address from '../../components/address/Address'
import MyPostWidget from '../../widgets/MyPostWidget'
import PostsWidget from '../../widgets/PostsWidget'

export const Community = () => {
  return (
    <div>
      <NavigationBar />
      <div class="main-wrap">
        <div id="container">

        <MyPostWidget/>
          <div id="content" class="clearfix ">
            <div id="left-area" class="clearfix">
              post here
              <PostsWidget />
            </div>

            <div id="sidebar">
              <Address />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
