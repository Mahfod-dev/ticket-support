const Button = ({type,text}) => {
  return (
		<button className='btn btn-block' type={type}>
      {text}
		</button>
  );
}
export default Button