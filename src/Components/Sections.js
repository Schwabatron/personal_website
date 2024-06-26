function Section(props) {
  return (
    <div>
      <header className="custom-header">{props.name}</header>
      <p>{props.content}</p>
    </div>
  );
}

export default Section;
