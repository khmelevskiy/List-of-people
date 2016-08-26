'use strict';

let KEY = "people";
let DATALS = [
  {
    name: "John Adams",
    rate: 102,
    ideas: 0,
    following: 50,
    followers: 0,
    checkFollow: false,
    image: "image/John_Adams.png"
  },
  {
    name: "Kevin Malcolm",
    rate: 1472,
    ideas: 20,
    following: 19,
    followers: 0,
    checkFollow: false,
    image: "image/Kevin_Malcolm.png"
  },
  {
    name: "James Madison",
    rate: 32,
    ideas: 0,
    following: 2,
    followers: 0,
    checkFollow: false,
    image: "image/James_Madison.png"
  },
  {
    name: "James Monroe",
    rate: 3086,
    ideas: 53,
    following: 1059,
    followers: 45,
    checkFollow: true,
    image: "image/James_Monroe.png"
  },
  {
    name: "Andrew Jackson",
    rate: 102,
    ideas: 0,
    following: 50,
    followers: 0,
    checkFollow: false,
    image: "image/Andrew_Jackson.png"
  }];
localStorage[KEY] = JSON.stringify(DATALS);
const data = JSON.parse(localStorage[KEY]);
const div = document.getElementById("items");
const button = document.getElementById("list");

data.forEach(function (item, i) {
  console.log(i + ": " + item.name);
  let newitem = `<td class="span6"><img align="left" class="pic" src=${item.image}><div class="name">${item.name} 
<div style="float:left"></div><a class=${checkFollowClass(item)} >&nbsp&nbsp&nbsp&nbsp&nbsp</a></div>

<img align="left" class="picRate" src="image/rate.png"><div class="rate">${item.rate}</div></td>
            <td>${item.ideas}</td>
            <td>${item.following}</td>
            <td>${item.followers}</td>`;
  let newnode = document.createElement("tr");
  newnode.innerHTML = newitem;
  div.insertBefore(newnode, button);
});

function checkFollow(item) {
  if (item.checkFollow) {
    return "&#10003"
  }
  else {
    return "&nbsp&nbsp&nbsp&nbsp&nbsp"
  }
}

function checkFollowClass(item) {
  if (item.checkFollow) {
    return "follow"
  }
  else {
    return "unfollow"
  }
}
$( document ).ready(function() {
  $(".unfollow").hover(
    function () {
      $(this).css({'background': '#a4c574',
      'color': 'white',
      'border-radius': '30px',
      'padding': '3px'});
      $(this).text("Follow");
    },
    function () {
      $(this).text("&nbsp&nbsp&nbsp&nbsp&nbsp");
      $(this).removeAttr('style');
      $(this).css({'background': 'url(image/plus.png) no-repeat center center'});

    }
  );

/*  $('.follow').hover(
    function(){
      $('.follow').css('background-color','red');
    })*/
});
