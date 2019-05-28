//   顶部导航栏模板
Vue.component('vue-nav',{
    props:['todo'],
    template:'\
    <nav class="navbar navbar-expand-lg navbar-light bg-light">\
        <button class="navbar-toggler" type="button"\
         data-toggle="collapse" data-target="#navbarTogglerDemo03"\
          aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">\
        <span class="navbar-toggler-icon"></span>\
        </button>\
        <a class="navbar-brand" href="#">\
            <img :src="todo.web_img" width="30" height="30"\
             class="d-inline-block align-top" alt="img">{{ todo.web_name }}\
        </a>\
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">\
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">\
                <li class="nav-item active">\
                    <a class="nav-link" :href="todo.web_link[0].herf">{{ todo.web_link[0].text }} <span class="sr-only">(current)</span></a>\
                </li>\
                <li class="nav-item">\
                 <a class="nav-link" :href="todo.web_link[1].herf">{{ todo.web_link[1].text }}</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link disabled" :href="todo.web_link[2].herf">{{ todo.web_link[2].herf }}</a>\
                </li>\
            </ul>\
        <form class="form-inline my-2 my-lg-0">\
            <input class="form-control mr-sm-2" type="search" placeholder="Search" :aria-label="todo.search.aria_lable">\
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">{{ todo.search.value}}</button>\
        </form>\
  </div>\
</nav>\
    '
})
//   页脚模板
Vue.component('vue-footer',{
    props:['todo'],
    template:'\
    <div class="jumbotron jumbotron-fluid">\
        <div class="container">\
            <h1 class="display-4">{{todo.whoami}}</h1>\
            <p class="lead">{{todo.detail}}</p>\
        </div>\
    </div>\
    '
})