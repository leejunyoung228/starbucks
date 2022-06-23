import data from "../data"
import Card from "./Card"

export default function Menu() {
  const cards = data.map((item) => {
    return (
      <Card
        name={item.name}
        url={item.url}
      />
    );
  });
  return (
    <div>
      <div className="select_wrap">
        <p>
          <input className="bu" type="button"/>
          <span className="in_span">상세분류</span>
        </p>
      </div>
      <div className="butt">
        <dt class="dtp">
          <a role="button" className="a1 selected">
            {" "}
            <img src="./images/icon_pic_on.png" /> 사진으로 보기
          </a>
        </dt>
        <dt class="dtp2">
          <a role="button" className="a2">
            {" "}
            <img src="./images/icon_ante.png" /> 영양정보로 보기
          </a>
        </dt>
      </div>
      <div>
        <dl>
          <dt>
              <a>콜드 브루 커피</a>
              <img className="sumIcon" src="./images/logo_decaf.png" />
              <br/>
              <p className="summary">
                디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
              </p>
            </dt>
        </dl>
      </div>
      <div className="card-list">
        {cards}
      </div>
    </div>
  );
}
