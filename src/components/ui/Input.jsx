
const Input = ({label, type, id, icon, value, onChange}) => {
  return (
    <div className="relative w-full">
        <label htmlFor={id} className="sr-only">{label}</label>
        <input
        required
        type={type} 
        id={id} 
        value={value}
        placeholder={label} 
        onChange={onChange}
        className="w-full placeholder:text-dark bg-light px-6 py-4 rounded-md" />
        {icon && (
            <img src={icon} alt="" className="absolute right-6 top-1/2 -translate-y-1/2" />
        )}
    </div>
  )
}

export default Input