import Review from "./components/reviews";

function details(props) {
  console.log(props);
  return (
    <div>
      <h1>{props?.location?.data?.cuisine_type}</h1>
      <h2 className="operating_hours">Operating Hours</h2>
      {props?.location?.data?.operating_hours &&
        Object.keys(props?.location?.data?.operating_hours).map((key) => (
          <p>{key + ":-" + props.location?.data?.operating_hours[key]}</p>
        ))}
      <h1 className="reviews">Reviews</h1>
      {props?.location?.data?.reviews.map((element) => (
        <Review
          name={element.name}
          date={element.date}
          rating={element.rating}
          comments={element.comments}
        />
      ))}
    </div>
  );
}
export default details;
