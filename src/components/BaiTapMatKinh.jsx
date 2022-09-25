import React, { Component } from 'react'
import Data from "./dataGlasses.json";
import Style from "./style.module.css";

export default class BaiTapMatKinh extends Component {

    state = {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
    }
    changeGlasses = (_id, _price, _name, _url, _desc) => {
        this.setState({
            id: _id,
            price: _price,
            name: _name,
            url: _url,
            desc: _desc
        })
    }
    renderHTML = () => {
        return Data.map((item, index) => {
            return <div key={index} className="col-3 p-2">
                <img onClick={() => {
                    this.changeGlasses(item.id, item.price, item.name, item.url, item.desc)
                }} src={item.url} className='img-fluid border  border-dark' style={{ cursor: 'pointer' }} />
            </div>
        })
    }
    render() {
        return (
            <div className='pb-5' style={{ backgroundImage: `url("./glassesImage/background.jpg")`, backgroundSize: "cover", backgroundPosition: "center", height: '100%' }}>
                <div className='container'>
                    <div className='text-center'>
                        <div className={Style.info}>
                            <div className={Style.info__model}>
                                <img src="./glassesImage/model.jpg" />
                            </div>
                            <div className={Style.info__glasses}>
                                <img src={this.state.url} />
                            </div>
                            <div className={Style.info__desc}>
                                <h4>{this.state.name}</h4>
                                <p>{this.state.desc}</p>
                            </div>
                        </div>

                    </div>
                    <div className='row bg-white p-5 mt-5'>
                        {this.renderHTML()}
                    </div>
                </div>
            </div>  
        )
    }
}
