import React from "react"
import img from "../../../../assets/img/1.jpeg"
import "./MainNavStyle.css"
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";


const MainNav = (props) => {
  return <div className={"headerWrapper"}>

    <div className={"content"}>
      <div className={"container"}>

        <div className={"container_img"}>
          <img style={{width: 650, height: 380}} src={img} alt=""/>


        </div>
        <div className={"aboutTitle"}>
          O себе
          <div>
            В прошлом году мне потребовался писатель: спокойный и с пониманием бизнеса. Я написал в блоге вакансию, в
            качестве тестового задания попросил рассказать о себе. Вакансию перепечатал популярный сайт о работе, и ее
            увидел «широкий круг читателей», а я получил сто откликов.

            Когда я отфильтровал сумасшедших, оставшиеся кандидаты разделились на три категории: биографы, формалисты и
            творческие.

            Биографы: «Я родился в 1988 году в Майкопе, республике Адыгея. Закончил школу такую-то с отличием. В
            таком-то
            году поступил в Кубанский государственный университет на такой-то факультет. Увлекаюсь фехтованием и
            верховой
            ездой, слушаю Бетховена и гангстерский рэп, любимые писатели — Достоевский и Мураками».
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
}
export default MainNav;