function Greeting({name, children}) {
return (
<div className="Greeting">
<h2>Hello {name},</h2>
{children}
</div>
)
}
export default Greeting;