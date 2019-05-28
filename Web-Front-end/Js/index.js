// card template 卡片模板
Vue.component('vue-card', {
    // todo-item 组件现在接受一个
    // "prop"，类似于一个自定义特性。
    // 这个 prop 名为 todo。
    props: ['todo'],
    template: '  \
    <figure class="card m-2" style="width:18rem"> \
        <img class="card-img-top" :src="todo.card_src" alt="Card image" >\
        <figcaption class="card-body">\
            <h4 class="card-title">{{todo.card_title}}</h4>\
            <p class="card-text">{{todo.card_summary}}</p>\
            <a :href="todo.card_herf" class="btn btn-primary">See Profile</a>\
        </figcaption>\
  </figure>'
})

//   实例化导航栏
var nav = new Vue({
    el: '#my-nav',
    data: {
        nav_massage: {
            id: 0,
            web_img: 'https://static.runoob.com/images/mix/bird.jpg',
            web_name: 'Bootstrap',
            web_link: [
                {
                    herf: '#',
                    text: 'Home'
                },
                {
                    herf: '#',
                    text: 'Link'
                },
                {
                    herf: '#',
                    text: 'Disabled'
                }
            ],
            search: {
                aria_lable: 'Search',
                value: 'Search'
            }

        }
    }
})
//   new card 实例化卡片
var cards = new Vue({
    el: '#my-cards',
    data: {
        card_massage: [
            {
                id: 0,
                is_use: true,
                card_src: 'https://static.runoob.com/images/mix/img_avatar.png',
                card_title: 'dan jia 01',
                card_summary: 'this is the frist card, here are some example test dan is elder brother',
                card_herf: 'https://google.com/ncr'
            },
            {
                id: 1,
                is_use: true,
                card_src: 'https://static.runoob.com/images/mix/img_avatar.png',
                card_title: 'dan jia 02',
                card_summary: 'this is the second card, here are some example test dan is elder brotherthis is the second card, here are some example test dan is elder brotherthis is the second card, here are some example test dan is elder brother',
                card_herf: 'https://google.com/ncr'
            },
            {
                id: 2,
                is_use: true,
                card_src: 'https://static.runoob.com/images/mix/img_avatar.png',
                card_title: 'dan jia 03',
                card_summary: 'this is the third card, here are some example test dan is elder brother',
                card_herf: 'https://google.com/ncr'
            },
            {
                id: 3,
                is_use: false,
                card_src: 'https://static.runoob.com/images/mix/img_avatar.png',
                card_title: 'dan jia 04',
                card_summary: 'this is the fouth card, here are some example test dan is elder brother',
                card_herf: 'https://google.com/ncr'
            },
            {
                id: 4,
                is_use: false,
                card_src: 'https://static.runoob.com/images/mix/img_avatar.png',
                card_title: 'dan jia 05',
                card_summary: 'this is the five card, here are some example test dan is elder brother',
                card_herf: 'https://google.com/ncr'
            },
            {
                id: 5,
                is_use: false,
                card_src: 'https://static.runoob.com/images/mix/img_avatar.png',
                card_title: 'dan jia 06',
                card_summary: 'this is the six card, here are some example test dan is elder brother',
                card_herf: 'https://google.com/ncr'
            },
            {
                id: 6,
                is_use: true,
                card_src: 'https://static.runoob.com/images/mix/img_avatar.png',
                card_title: 'dan jia 07',
                card_summary: 'this is the seventh card, here are some example test dan is elder brother',
                card_herf: 'https://google.com/ncr'
            },
            {
                id: 7,
                is_use: true,
                card_src: 'https://static.runoob.com/images/mix/img_avatar.png',
                card_title: 'dan jia 08',
                card_summary: 'this is the eighth card, here are some example test dan is elder brother',
                card_herf: 'https://google.com/ncr'
            }
        ]
    }
})
//   实例化footer
var footer = new Vue({
    el: '#my-foot',
    data: {
        foot_massage: {
            whoami: 'demo',
            detail: 'this is the detail massage'
        }
    }
})