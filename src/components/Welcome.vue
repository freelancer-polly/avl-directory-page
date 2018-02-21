<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter hes-text-center">
        <div class="white-box">
          <img :src="profileImage" class="main-image" />
          <h3 class="title is-5">Jan Van Erikson</h3>
          <div class="spacer"></div>
          <ul class="menu-list">
            <li v-for="menuItem in menuItems" :key="menuItem.text">
              <router-link to="/">{{ menuItem.text }}</router-link>
            </li>
          </ul>
          <div class="spacer"></div>
          <router-link to="/" class="button is-success is-outlined">manage my profile</router-link>
        </div>
      </div>
      <div class="column is-two-quarters">
        <div class="white-box">
          <div class="column has-text-left">
            <h2 class="title is-5">Explore your community</h2>
            <div class="field has-addons">
              <div class="control searchbox">
                <input class="input" type="text" placeholder="">
              </div>
              <div class="control searchBtn">
                <a class="button is-info search-button-green"><i class="fa fa-search"></i></a>
              </div>
            </div>
            <div class="spacer-1"></div>
            <p>Tags: <a class="button is-link is-small tag-item" v-for="skill in skills" :key="skill">{{ skill }}</a></p>
            <div class="spacer-2"></div>
            <div class="field switch">
              <input id="switchPeople" type="checkbox" name="switchPeople" class="switch is-rounded is-info" checked="checked">
              <label for="switchPeople">people</label>
            </div>
            <div class="field switch">
              <input id="switchCompanies" type="checkbox" name="switchCompanies" class="switch is-rounded is-info">
              <label for="switchCompanies">companies</label>
            </div>
          </div>
        </div>
        <div class="spacer-2"></div>
        <div class="columns" v-for="profileChunk in profiles" :key="profileChunk.name">
          <div class="column" v-for="profile in profileChunk" :key="profile.name">
            <div class="white-box">
                <div class="is-pulled-left">
                  <img :src="profile.profileImage" class="thumb-profile-pic" />
                </div>
                <div class="is-pulled-left has-text-left m-l-10">
                  <h4 class="title is-6 m-b-25">{{ profile.name }}</h4>
                  <p class="is-size-7">{{ profile.designation }} @ {{ profile.complany }}</p>
                  <ul class="is-size-7 profile-skills">
                    <li v-for="profile in profile.skills" :key="profile">
                      <a href="#">#{{ profile }}</a>
                    </li>
                  </ul>
                </div>
                <div class="is-clearfix"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div class="white-box">
          <h2 class="title is-5">Your recent activity</h2>
          <div class="perf-count">{{ interactions }}</div>
          <p class="desc">interactions</p>
          <div class="spacer-2"></div>
          <div class="perf-count">{{ endorsments }}</div>
          <p>endorsments</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Welcome',
  data () {
    return {
      profileImage: './static/profile-pic.jpg',
      skills: ["UI Designer", "Website Designer", "Adobe Illustrator"],
      interactions: 15,
      endorsments: 23,
      menuItems: [
        { text: 'Home', link: '/' },
        { text: 'Members', link: '/' },
        { text: 'Group', link: '/' },
        { text: 'Events', link: '/' },
        { text: 'Q&A', link: '/' },
        { text: 'Rooms', link: '/' },
        { text: 'My Workspace', link: '/' }
      ],
      profiles: _.chunk([
        { name: 'John Doe', profileImage: './static/profile-pic.jpg', designation: 'Founder', complany: "Virgin Group", skills: ["Sass", "Scale Ups", "AI"]},
        { name: 'Jane Doe', profileImage: './static/profile-pic.jpg', designation: 'Founder', complany: "Virgin Group", skills: ["Sass", "Scale Ups", "AI"]},
        { name: 'Souv Ban', profileImage: './static/profile-pic.jpg', designation: 'Founder', complany: "Virgin Group", skills: ["Sass", "Scale Ups", "AI"]},
        { name: 'Poll Ban', profileImage: './static/profile-pic.jpg', designation: 'Founder', complany: "Virgin Group", skills: ["Sass", "Scale Ups", "AI"]},
        { name: 'Greg Mar', profileImage: './static/profile-pic.jpg', designation: 'Founder', complany: "Virgin Group", skills: ["Sass", "Scale Ups", "AI"]},
        { name: 'Rima Dey', profileImage: './static/profile-pic.jpg', designation: 'Founder', complany: "Virgin Group", skills: ["Sass", "Scale Ups", "AI"]},
        { name: 'Desh Cha', profileImage: './static/profile-pic.jpg', designation: 'Founder', complany: "Virgin Group", skills: ["Sass", "Scale Ups", "AI", "Python", "HTML"]},
        { name: 'Hrit Ros', profileImage: './static/profile-pic.jpg', designation: 'Founder', complany: "Virgin Group", skills: ["Sass", "Scale Ups", "AI"]}
      ], 2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
ul.menu-list li {
  display: block;
}
.spacer {
  height: 3rem;
}
.spacer-2 {
  height: 2rem;
}
.spacer-1 {
  height: 1rem;
}
.white-box {
  background: #fff;
  padding: 1rem;
}
.main-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.thumb-profile-pic {
  width: 75px;
  height: 75px;
  border-radius: 50%;
}
.perf-count {
  background: #5180f1;
  border: 5px solid #d4e6f3;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  line-height: 40px;
  color: #fff;
  margin: 0 auto;
}
.field.switch {
  display: inline-block
}
.tag-item {
  margin-right: 5px;
}
.tag-item:last-child {
  margin-right: 0;
}
.m-b-25 {
  margin-bottom: 0.25rem
}
ul.profile-skills {
  width: 150px;
}
ul.profile-skills li {
  margin: 0 6px;
}
.searchbox {
  width:88%;
}
.searchBtn {
  margin-left:10px;  
}
.searchBtn .is-info {
  background-color:#45f442!important;
}
.search-button-green {
  width: 100px;
}
.menu-list {
  text-align : center;
}
.white-box {
  text-align : center;
}
.desc{
  text-align : center;
}
.m-l-10 {
  margin-left: 10px;
}
.fa, .far, .fas {
  font-family: Font Awesome\ 5 Free;
  display: inline-block
}
</style>
