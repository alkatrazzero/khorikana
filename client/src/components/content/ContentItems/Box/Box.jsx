import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {Button, Card} from "antd";
import Meta from "antd/es/card/Meta";
import {removeFromBox} from "../../../../store/productsReduser";
import "./box.css"
import {ConfirmModalWindow} from "./confirmModalWindow";

const Box = (props) => {
  const productsToSell = useSelector(state => state.productsPage.productsToSell)
  const dispatch = useDispatch()
  return <div className={"contentWrapper"}>

    <div className={"boxContainer"}>
      <div className={'productsInBox_row'}>
        {productsToSell.length > 0 && productsToSell.map((p => <div className={"card_container"}><Card
            hoverable
            style={{width: 240}}
            // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title={p.name} description={p.price
            }/>
            <div> {p.aboutProduct}</div>
            <Button onClick={() => dispatch(removeFromBox(p))}>Удалить из корзины</Button>
          </Card></div>
        ))}
      </div>
      <div className={"submitButton_row"}>
        <ConfirmModalWindow/>
      </div>
    </div>


  </div>

}

export default Box;