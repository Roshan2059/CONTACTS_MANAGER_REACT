const Contact = (props) => {
  return (
    <div className="each">
      Name : {props.data.name}
      <br />
      Contact : {props.data.contact}
      <br />
      Address : {props.data.add}
      <hr />
    </div>
  );
};

export default Contact;
