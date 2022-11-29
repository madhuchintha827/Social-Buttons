const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`Button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <div className="social-button-container">
      <h1 className="heading">Social Buttons</h1>
      <div>
        <Button className="like-button" buttonText="like" />
        <Button className="comment-button" buttonText="Comment" />
        <Button className="share-button" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
