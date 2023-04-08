export const Input = ({name,type,placeholder,value,onChange}) => {
  return (
		<div className='form-group'>
			<label htmlFor={name}>{name}</label>
			<input
				type={type}
				className='form-control'
				name={name}
				id={name}
                value={value}
                onChange={onChange}
				placeholder={placeholder}
			/>
		</div>
  );
}