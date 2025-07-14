
const Information = ({name , image , price }) => {
  return (
    <div className="w-[95%] m-auto flex  flex-col items-center mt-2">
       <div className="shadow-2xl w-[90%] p-[1rem] rounded-3xl bg-slate-50 border-2 border-slate-200 flex flex-col items-center justify-center my-2 lg:w-[100%]">
         <img className="w-[300px] object-cover active:scale-105  hover:scale-105 transition-all" 
         src={image} alt="logo" />
         <h1 className="mt-2 text-sky-600 text-[1.5rem] font-bold">{name}</h1>
         <div className="w-full h-[8px] rounded-4xl bg-slate-50 border-2 border-slate-200  my-2"></div>
         <h4 className="mt-4 text-[1.3rem] px-[40px] py-[8px] rounded-4xl shadow-2xl border-2 border-slate-200 active:scale-90 transition-all cursor-pointer">{price}$</h4>
       </div>
    </div>
  )
}

export default Information