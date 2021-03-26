function MyComponent({ title }) {
  return <Title title={title} />;
}

function Title({ title }) {
  return <h1>{title}</h1>;
}

export default MyComponent;
