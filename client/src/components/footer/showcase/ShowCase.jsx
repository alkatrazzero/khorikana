import React, {useEffect, useState} from "react"
import {Button, Image} from "antd";

import {useDispatch, useSelector} from "react-redux";
import {addProductToSell, getAllProducts} from "../../../store/productsReduser";
import {Card} from 'antd';
import "./ShowCaseStyle.css"
import Search from "antd/es/input/Search";
import {productAPI} from "../../../api/api";

const {Meta} = Card;

const Showcase = () => {
  const editProductsStatus = useSelector(state => state.productsPage.editProductsStatus)
  const products = useSelector(state => state.productsPage.products)
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);

  const submit = (price, id) => {
    productAPI.updateProduct(price, id)
  }

  useEffect(() => {
    dispatch(getAllProducts())
  }, [editProductsStatus])


  return <div>
    <div className={"containerFooter"}>
      <div className={"products_row"}>
        {products.length > 0 && products.map((p => <div className={"productCard_container"}><Card width={400}
                                                                                                  className={"product_card"}
                                                                                                  hoverable
                                                                                                  style={{width: 240}}
                                                                                                  cover={<Image
                                                                                                    preview={{visible: false}}
                                                                                                    onClick={() => setVisible(true)}
                                                                                                    alt=""
                                                                                                    src={"../../../" + p.product.photo.file.response.url}/>}
          >
            <div style={{display: 'none'}}>
              <Image.PreviewGroup preview={{visible, onVisibleChange: vis => setVisible(vis)}}>
                {p.product.photo.fileList.map((r) => <Image src={"../../../" + r.response.url}/>)}
              </Image.PreviewGroup>
            </div>

            <Meta title={p.product.name} description={editProductsStatus ? <Search
              placeholder="????????"
              allowClear
              enterButton="ok"
              size="large"
              onSearch={(price) => submit(price, p._id)}
            /> : p.product.price}/>
            <div> {p.product.aboutProduct}</div>
            <Button onClick={() => (dispatch(addProductToSell(p.product)))}>???????????????? ?? ??????????????</Button>

          </Card></div>
        ))}
      </div>
    </div>


  </div>

}

export default Showcase;