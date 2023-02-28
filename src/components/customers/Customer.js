export const Customer = ({customerObj}) => {
    
    return <>
    <div className="customer" id={`customer--${customerObj.id}`}>
            <div className="customer__name">
              Name: { customerObj.name }
            </div>
          </div>
    </>
}