const Textarea = ({ placeholder, id, value, onChange}) => {
  return (
    <textarea 
    placeholder={placeholder} 
    id={id} 
    value={value}
    onChange={onChange}
    className="resize-none w-full h-[320px] min-h-[320px] placeholder:text-dark bg-light px-6 py-4 rounded-md"></textarea>
  )
}

export default Textarea