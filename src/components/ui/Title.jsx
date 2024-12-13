const Title = ({ hierachy, children, center }) => {
  return (
    hierachy === "h1" ? 
      <h1 className={`uppercase text-small lg:text-6xl font-anton mb-4 lg:mb-12 ${center ? "text-center" : ""}`}>{children}</h1> :
    hierachy === "h2" ? 
      <h2 className={`uppercase text-small lg:text-6xl font-anton mb-4 lg:mb-12 ${center ? "text-center" : ""}`}>{children}</h2> :
      <h3 className={`uppercase text-small lg:text-6xl font-anton mb-4 lg:mb-12 ${center ? "text-center" : ""}`}>{children}</h3>
  );
}

export default Title;
