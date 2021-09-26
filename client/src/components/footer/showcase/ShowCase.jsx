import React from "react"
import {Button,Image} from "antd";

import {useDispatch, useSelector} from "react-redux";
import {addProductToSell} from "../../../store/productsReduser";
import {Card} from 'antd';
import "./ShowCaseStyle.css"
const {Meta} = Card;

const Showcase = (props) => {
  const products = useSelector(state => state.productsPage.products)
  const dispatch = useDispatch()


  return <div >
    <div className={"containerFooter"}>
      <div className={"products_row"}>
        {products.length > 0 && products.map((p => <div className={"productCard_container"}> <Card width={400} className={"product_card"}
                                                              hoverable
                                                              style={{width: 240}}
              cover={<Image  alt="" src={"../../../"+ p.product.photo.file.response.url} />}
          >
            <Meta title={p.product.name} description={p.product.price
            }/>
            <div> {p.product.aboutProduct}</div>
            <Button onClick={() => (dispatch(addProductToSell(p.product)))}>Добавить в корзину</Button>
          </Card></div>
        ))}
      </div>
    </div>





  </div>

}

export default Showcase;