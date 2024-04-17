import logo from "../images/logo.png"

const Footer = () => {
  return (
    <>
      <div className="flex flex-col bg-[#FFBC3B] px-20 py-3 gap-5 text-[#03383F] max-[768px]:px-6">
        <div className="logo cursor-pointer">
          <img src={logo} alt="" className="h-16" />
        </div>
        <div className="flex justify-between max-[500px]:flex-col max-[500px]:gap-10">
          <div className="flex gap-x-24 max-[768px]:gap-x-10 max-[500px]:flex-row max-[500px]:gap-x-7">
            <div>
              <h1 className="text-xl my-2 font-medium">Menu</h1>
              <h4 className="text-xs">Home</h4>
              <h4 className="text-xs">Recipe</h4>
              <h4 className="text-xs">Community</h4>
              <h4 className="text-xs">About Us</h4>
            </div>
            <div>
              <h1 className="text-xl my-2 font-medium">Categories</h1>
              <h4 className="text-xs">Breakfast</h4>
              <h4 className="text-xs">Lunch</h4>
              <h4 className="text-xs">Dinner</h4>
              <h4 className="text-xs">Dessert</h4>
              <h4 className="text-xs">Drink</h4>
            </div>
            <div>
              <h1 className="text-xl my-2 font-medium">Social</h1>
              <h4 className="text-xs">Instagram</h4>
              <h4 className="text-xs">Twitter</h4>
              <h4 className="text-xs">Youtube</h4>
              <h4 className="text-xs">Facebook</h4>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="font-medium text-xl">Sign up for our newsletter</div>
            <div className="flex gap-3">
              <input type="text" className="h-8 outline-0 bg-inherit text-[#FEF8E6] placeholder:text-[#03383F] border-b-2 border-[#03383F]" placeholder="Your Email Address" />
              <button className="cursor-pointer bg-[#03383F] h-8 w-32 rounded text-[#CDD7D9]">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
