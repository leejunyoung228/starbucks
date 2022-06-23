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
      <div>
        <dl>
          <dt>
              <a>콜드 브루 커피</a>
              <img className="sumIcon" src="./images/logo_decaf.png" />
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
