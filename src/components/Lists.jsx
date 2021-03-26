function Lists({ arr }) {
  return (
    <ul>
      {arr.map((type, index) => (
        <li key={index}> {type} </li>
      ))}
    </ul>
  );
}

export default Lists;
