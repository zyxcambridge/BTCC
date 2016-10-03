import React, { Component, PropTypes } from 'react';


export default class PageHeader extends Component {
  render() {
    const { store } = this.props;
    return (
          <section className="testzyx">
            <div id="headerbar">
              <h5>欢迎提交新功能12211</h5>
            </div>
            <div id="headerContent">
              <img src="http://img3.imgtn.bdimg.com/it/u=415649817,3173582892&fm=21&gp=0.jpg"
              alt="上海鲜花港 - 郁金香" />
              <p>我们非常重视你提交的每一项功能建议，让我们一起把网站建设得更好！</p>
            </div>
          </section>

    )
  }
}
