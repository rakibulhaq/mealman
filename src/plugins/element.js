import Vue from 'vue'
import { Button, Menu, MenuItem, Submenu, MenuItemGroup, Container, Header, Aside, Main, Col, Row } from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Col)
Vue.use(Row)
