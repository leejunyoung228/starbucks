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
      <dl>

      </dl>
      <div className="card-list">
        <section className="cards-list">{cards}</section>
      </div>
    </div>
  );
}
