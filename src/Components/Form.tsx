import { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
const Form = () => {
    interface DynamicComponent {
        id: number;
        name: string;
    }

    const [dynamicComponents, setDynamicComponents] = useState<DynamicComponent[]>([{ id: 0, name: 'Component 1' }]);

    const handleAddComponent = () => {
        setDynamicComponents([...dynamicComponents, { id: dynamicComponents.length, name: `Component ${dynamicComponents.length + 1}` }]);
    };

    const handleRemoveComponent = (id: number) => {
        const updatedComponents = dynamicComponents.filter(component => component.id !== id);
        setDynamicComponents(updatedComponents);
    };


    const [inputs, setInputs] = useState<{ [key: string]: string }>({})

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <>
            <div className="flex flex-col w-full items-center px-20 py-10 tracking-wider bg-[#fbfaf4] text-[#03383F] pt-32">
                <div className="w-2/4 bg-[#FFF] flex items-center justify-center flex-col gap-2 py-5">
                    <h1 className="font-bold text-2xl text-[#03383F] ">Add a New Recipe</h1>
                    <div className="h-1 w-20 bg-[rgb(3,56,63)] flex"></div>
                </div>
                <form className="flex w-2/4 flex-col bg-[#FFF] gap-5 items-center justify-center">
                    <div className="flex items-end justify-center flex-col w-full gap-5">
                        <div className="flex flex-col gap-5 w-10/12">
                            <div className="h-px w-10/12 bg-[#03383F] flex my-5 "></div>
                            <input type="text" className="h-12 w-10/12 bg-[#f6f6f6] outline-none p-5 text-[#03383F] text-sm placeholder:text-xs" required placeholder="Recipe Title *"
                                name="recipetitle"
                                value={inputs.recipetitle || ''}
                                onChange={handleChange}
                            />
                            <textarea className="h-24 w-10/12 bg-[#f6f6f6] resize-none outline-none px-5 py-2 text-sm placeholder:text-xs" placeholder="Recipe Description"
                                name="Recipedescription"
                                value={inputs.Recipedescription || ''}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="w-10/12 flex gap-y-3 flex-col">
                            <div className="flex justify-start items-center gap-10">
                                <span className="text-xs w-32">This recipe: <span>serves</span></span>
                                <input type="text" className="h-8 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs" placeholder="Size *"
                                    name="servesize"
                                    value={inputs.servesize}
                                    onChange={handleChange || ''}
                                />
                            </div>
                            <div className="flex justify-start items-center gap-10">
                                <span className="text-xs w-32">Prepration time:</span>
                                <input type="text" className="h-8 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs" placeholder="Hrs *"
                                    name="preprationtimeHRS"
                                    value={inputs.preprationtimeHRS}
                                    onChange={handleChange || ''}
                                />
                                <input type="text" className="h-8 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs" placeholder="Mins *"
                                    name="preprationtimeMINS"
                                    value={inputs.preprationtimeMINS}
                                    onChange={handleChange || ''}
                                />
                            </div>
                            <div className="flex justify-start items-center gap-10">
                                <span className="text-xs w-32">Cook time:</span>
                                <input type="text" className="h-8 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs" placeholder="Hrs *"
                                    name="cooktimeHRS"
                                    value={inputs.cooktimeHRS}
                                    onChange={handleChange || ''}
                                />
                                <input type="text" className="h-8 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs" placeholder="Mins *"
                                    name="cooktimeMINS"
                                    value={inputs.cooktimeMINS}
                                    onChange={handleChange || ''}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end justify-center flex-col w-full gap-5 pb-5">
                        <div className="flex flex-col gap-5 w-10/12">
                            <div className="h-px w-10/12 bg-[#03383F] flex mt-5"></div>
                            <p className="text-xs">Choose a format that best fits your recipe</p>
                            <div className=" flex flex-row gap-10">
                                <span className="h-6 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-xs font-bold flex items-center justify-center">Simple</span>
                                <span className="h-6 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-xs font-bold flex items-center justify-center">Medium</span>
                                <span className="h-6 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-xs font-bold flex items-center justify-center">Hard</span>
                            </div>
                            <p className="text-xs">List your ingredients one at a time*</p>
                            {dynamicComponents.map(component => (

                                <div className=" flex flex-row gap-5 items-center">
                                    <input type="text" className="h-8 w-16 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" placeholder="Qty"
                                        name={`ingredientsQTY${component.id}`}
                                        value={inputs.ingredientsQTY}
                                        onChange={handleChange || ''}

                                    />


                                    {/* <input type="text" className="h-8 w-24 bg-[#f6f6f6] outline-none p-5 text-[#03383F] text-sm placeholder:text-xs" placeholder="Hrs *" /> */}
                                    <div className="relative">
                                        <label htmlFor="measurement" className="text-[#03383F] text-[8px] block absolute left-1 -top-1.5">Measurements</label>
                                        <select name={"measurement" + component.id} id="measurement" className="h-8 w-24 bg-[#f6f6f6] outline-none text-[#03383F] text-xs rounded"
                                            value={inputs.measurement}
                                            onChange={handleChange || ''}
                                        >
                                            <option value=""></option>
                                            <option value="Cup">Cup</option>
                                            <option value="Spoon">Spoon</option>
                                        </select>
                                    </div>
                                    <input type="text" className="h-8 w-30 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs" placeholder="Item"
                                        name={"ingredientsItem" + component.id}
                                        value={inputs.ingredientsItem}
                                        onChange={handleChange || ''}
                                    />
                                    <IoMdCloseCircle className="text-[#CDD7D9]" onClick={() => handleRemoveComponent(component.id)} />
                                </div>

                            ))}





                            <button className="text-[10px] flex justify-start" onClick={handleAddComponent}>+ Add another ingredients</button>
                            <div className="flex gap-1 flex-col">
                                <div className=" flex flex-col gap-3">
                                    <p className="text-xs">Add your instruction at a time*</p>
                                    {dynamicComponents.map(component => (
                                        <div className='flex items-center justify-start gap-2'>
                                            <textarea className="w-10/12 h-20 bg-[#f6f6f6] resize-none outline-none px-4 py-2 text-sm placeholder:text-xs" placeholder="Step 1"

                                                name={`instructionSTEP${component.id}`}
                                                value={inputs.instructionSTEP1}
                                                onChange={handleChange || ''}
                                            ></textarea>
                                            <IoMdCloseCircle className="text-[#CDD7D9]" onClick={() => handleRemoveComponent(component.id)} />
                                        </div>
                                    ))}

                                </div>
                                <button className="text-[10px] flex justify-start" onClick={handleAddComponent}>+ Add another ingredients</button>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-xs">Tag Your Recipe as*</p>
                                <div className="h-10 w-10/12 pr-2 bg-[#f6f6f6] flex flex-row items-center justify-between">
                                    <input type="text" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" required placeholder="Meal Type*"
                                        name="recipetag"
                                        value={inputs.recipetag}
                                        onChange={handleChange || ''}
                                    />
                                    <IoMdAdd />
                                </div>
                                <div className="h-10 w-10/12 pr-2 bg-[#f6f6f6] flex flex-row items-center justify-between">
                                    <input type="text" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" placeholder="Dish Type" />
                                    <IoMdAdd />
                                </div>
                            </div>
                            <div className="flex gap-2 text-[9px] cursor-pointer">
                                <input type="checkbox" name="agree" id="agree" />
                                <label htmlFor="agree" className="cursor-pointer">I have read and agree to the <span className="font-bold">Term & Condition</span> of reciperave.</label>
                            </div>

                            <div className="flex gap-2">
                                <button className="cursor-pointer bg-[#FFBC3B] h-8 w-28 rounded text-[#03383F]" type="submit">Publish!</button>
                                <button className="cursor-pointer h-8 w-28 rounded text-[#03383F] border border-[#03383F]" type="reset">Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form