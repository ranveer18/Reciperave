import { useState, useEffect } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const EditRecipe: React.FC = () => {

    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;
    const id = useParams();
    const [loading, setloading] = useState(true)
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        serve: '',
        preprationtimeHRS: '',
        preprationtimeMINS: '',
        cooktimeMINS: '',
        cooktimeHRS: '',
        recipetag: '',
        ingredients: [{ qty: '', measurement: '', ingredientsItem: '' }],
        instructions: [{ step: '' }],
    });
    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
        }));

    }, []);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const ress = await fetch(`${apiUrl}/admin`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include',

                });
                const data = await ress.json();


                if (ress.status === 401 || !data) {
                    const error = new Error();
                    console.log(error);
                }
            } catch (error) {
                navigate("/Reciperave");
                console.log(error);
            }
        };
        verifyUser();
    }, [navigate])

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`${apiUrl}/recipe/${id.id}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch recipe');
                }
                const data = await response.json();
                setFormData({
                    title: data.title,
                    desc: data.desc,
                    serve: data.serve,
                    preprationtimeHRS: data.preprationtimeHRS,
                    preprationtimeMINS: data.preprationtimeMINS,
                    cooktimeHRS: data.cooktimeHRS,
                    cooktimeMINS: data.cooktimeMINS,
                    recipetag: data.recipetag,
                    ingredients: data.ingredients,
                    instructions: data.instructions,
                });

                setloading(false);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };
        fetchRecipe();
    }, [id]);

    const updateUser = async (e: any) => {
        e.preventDefault();
        try {
            await axios.put(`${apiUrl}/updaterecipes/${id.id} `, formData);

            alert(`Updated details`);
            navigate(-1);
        } catch (error) {
            console.log(error);
        }
    };


    const handleChange = (
        index: number,
        field: keyof typeof formData['ingredients'][0] | keyof typeof formData['instructions'][0] | keyof typeof formData,
        value: string
    ) => {
        setFormData((prevState: any) => {
            const newState = { ...prevState };

            if (field === 'qty' || field === 'measurement' || field === 'ingredientsItem') {
                newState.ingredients[index][field] = value;
            } else if (field === 'step') {
                newState.instructions[index][field] = value;
            } else {
                newState[field] = value;
            }

            return newState;
        });
    };

    const handleAddIngredient = () => {
        setFormData((prevState: any) => ({
            ...prevState,
            ingredients: [...prevState.ingredients, { qty: '', measurement: '', ingredientsItem: '' }],
        }));
    };

    const handleAddInstruction = () => {
        setFormData((prevState: any) => ({
            ...prevState,
            instructions: [...prevState.instructions, { step: '' }],
        }));
    };

    const handleRemoveIngredient = (indexToRemove: number) => {
        setFormData(prevState => {
            const updatedIngredients = prevState.ingredients.filter((_, index) => index !== indexToRemove);
            return { ...prevState, ingredients: updatedIngredients };
        });
    };


    const handleRemoveInstruction = (indexToRemove: number) => {
        setFormData(prevState => {
            const updatedInstructions = prevState.instructions.filter((_, index) => index !== indexToRemove);
            return { ...prevState, instructions: updatedInstructions };
        });
    };

    const goBack = () => {
        navigate(-1);
    };


    return (
        <>{
            loading ? <h1> Loading ....</h1> :
                <div className="flex flex-col w-full items-center px-20 py-10 tracking-wider bg-[#fbfaf4] text-[#03383F] pt-32 max-[500px]:px-0">
                    <div className="w-3/4 bg-[#FFF] flex items-center justify-center flex-col gap-2 py-5 max-[500px]:w-11/12 max-[786px]:w-11/12">
                        <h1 className="font-bold text-2xl text-[#03383F] ">Add a New Recipe</h1>
                        <div className="h-1 w-20 bg-[rgb(3,56,63)] flex"></div>
                    </div>
                    <form onSubmit={updateUser} className="flex w-3/4 flex-col bg-[#FFF] gap-5 items-center justify-center max-[500px]:w-11/12 max-[500px]:p-2 max-[786px]:w-11/12">
                        <div className="flex items-end justify-center flex-col w-full gap-5">
                            <div className="flex flex-col gap-5 w-10/12 max-[500px]:w-full">
                                <div className="h-px w-10/12 bg-[#03383F] flex my-5 max-[500px]:w-11/12"></div>
                                <input type="text" className="h-12 w-10/12 bg-[#f6f6f6] outline-none p-5 text-[#03383F] text-sm placeholder:text-xs max-[500px]:w-full" required placeholder="Recipe Title *"
                                    name="title"
                                    value={formData.title}
                                    onChange={e => handleChange(0, 'title', e.target.value)}
                                />
                                <textarea className="h-24 w-10/12 bg-[#f6f6f6] resize-none outline-none px-5 py-2 text-sm placeholder:text-xs max-[500px]:w-full" placeholder="Recipe Description"
                                    name="Recipedescription"
                                    value={formData.desc} onChange={e => handleChange(0, 'desc', e.target.value)}
                                ></textarea>
                            </div>
                            <div className="w-10/12 flex gap-y-3 flex-col max-[500px]:w-full">
                                <div className="flex justify-start items-center gap-10 max-[500px]:gap-2">
                                    <span className="text-xs w-32">This recipe: <span>serves</span></span>
                                    <input type="text" className="h-8 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs" placeholder="Size *"
                                        name="servesize"
                                        value={formData.serve} onChange={e => handleChange(0, 'serve', e.target.value)}
                                    />
                                </div>
                                <div className="flex justify-start items-center gap-10 max-[500px]:w-full max-[500px]:gap-4">
                                    <span className="text-xs w-32">Prepration time:</span>
                                    <input type="text" className="h-8 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs" placeholder="Hrs *"
                                        name="preprationtimeHRS"
                                        value={formData.preprationtimeHRS} onChange={e => handleChange(0, 'preprationtimeHRS', e.target.value)}
                                    />
                                    <input type="text" className="h-8 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs" placeholder="Mins *"
                                        name="preprationtimeMINS"
                                        value={formData.preprationtimeMINS} onChange={e => handleChange(0, 'preprationtimeMINS', e.target.value)}
                                    />
                                </div>
                                <div className="flex justify-start items-center gap-10 max-[500px]:gap-4">
                                    <span className="text-xs w-32">Cook time:</span>
                                    <input type="text" className="h-8 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs" placeholder="Hrs *"
                                        name="cooktimeHRS"
                                        value={formData.cooktimeHRS} onChange={e => handleChange(0, 'cooktimeHRS', e.target.value)}

                                    />
                                    <input type="text" className="h-8 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs" placeholder="Mins *"
                                        name="cooktimeMINS"
                                        value={formData.cooktimeMINS} onChange={e => handleChange(0, 'cooktimeMINS', e.target.value)}

                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end justify-center flex-col w-full gap-5 pb-5 ">
                            <div className="flex flex-col gap-5 w-10/12 max-[500px]:w-full">
                                <div className="h-px w-10/12 bg-[#03383F] flex mt-5 max-[500px]:w-full"></div>
                                <p className="text-xs">Choose a format that best fits your recipe</p>
                                <div className=" flex flex-row gap-10 max-[500px]:gap-5">
                                    <span className="h-6 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-xs font-bold flex items-center justify-center">Simple</span>
                                    <span className="h-6 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-xs font-bold flex items-center justify-center">Medium</span>
                                    <span className="h-6 w-24 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-xs font-bold flex items-center justify-center">Hard</span>
                                </div>
                                <p className="text-xs">List your ingredients one at a time*</p>
                                {formData.ingredients.map((ingredient: any, index: any) => (

                                    <div className=" flex flex-row gap-5 items-center max-[500px]:gap-3" key={index}>
                                        <input type="text" className="h-8 w-16 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded " placeholder="Qty"
                                            name={`ingredientsQTY`}
                                            value={ingredient.qty} onChange={(e) => handleChange(index, 'qty', e.target.value)}
                                        />
                                        <div className="relative">
                                            <label htmlFor="measurement" className="text-[#03383F] text-[8px] block absolute left-1 -top-1.5">Measurements</label>
                                            <select name="measurement" id="measurement" className="h-8 w-24 bg-[#f6f6f6] outline-none text-[#03383F] text-xs rounded max-[500px]:w-20"
                                                value={ingredient.measurement} onChange={(e) => handleChange(index, 'measurement', e.target.value)}                                            >
                                                <option value="">Select...</option>
                                                <option value="ml">ml</option>
                                                <option value="l">l</option>
                                                <option value="Teaspoons(tsp)">Teaspoons (tsp)</option>
                                                <option value="Tablespoons(tbsp)">Tablespoons (tbsp)</option>
                                                <option value="cup">Cups</option>
                                                <option value="mg">mg</option>
                                                <option value="g">g</option>
                                                <option value="kg">kg</option>
                                                <option value="pcs">Pieces(pcs)</option>
                                                <option value="slices">Slices</option>
                                                <option value="cloves">Cloves</option>
                                                <option value="bunches">Bunches</option>
                                                <option value="packages">Packages</option>
                                                <option value="packets">Packets</option>
                                            </select>
                                        </div>
                                        <input type="text" className="h-8 w-30 bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs max-[500px]:w-36" placeholder="Item"
                                            name="ingredientsItem"
                                            value={ingredient.ingredientsItem} onChange={(e) => handleChange(index, 'ingredientsItem', e.target.value)} />
                                        <IoMdCloseCircle className="text-[#CDD7D9]" onClick={() => handleRemoveIngredient(index)} />
                                    </div>

                                ))}

                                <div className="text-[10px] flex justify-start" onClick={handleAddIngredient}>+ Add another ingredients</div>
                                <div className="flex gap-1 flex-col">
                                    <div className=" flex flex-col gap-3">
                                        <p className="text-xs">Add your instruction at a time*</p>
                                        {formData.instructions.map((instruction: any, index: any) => (
                                            <div className='flex items-center justify-start gap-2' key={index}  >
                                                <textarea className="w-10/12 h-20 bg-[#f6f6f6] resize-none outline-none px-4 py-2 text-sm placeholder:text-xs max-[500px]:w-full" placeholder="Step 1"
                                                    value={instruction.step} onChange={(e) => handleChange(index, 'step', e.target.value)}
                                                ></textarea>
                                                <IoMdCloseCircle className="text-[#CDD7D9]" onClick={() => handleRemoveInstruction(index)} />
                                            </div>
                                        ))}

                                    </div>
                                    <div className="text-[10px] flex justify-start" onClick={handleAddInstruction}>+ Add another instructions   </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-xs">Tag Your Recipe as*</p>
                                    <div className="h-10 w-10/12 pr-2 bg-[#f6f6f6] flex flex-row items-center justify-between max-[500px]:w-11/12">
                                        <input type="text" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded " placeholder="Meal Type*"
                                            name="recipetag"
                                            value={formData.recipetag}
                                            onChange={e => handleChange(0, 'recipetag', e.target.value)}

                                        />
                                        <IoMdAdd />
                                    </div>
                                    <div className="h-10 w-10/12 pr-2 bg-[#f6f6f6] flex flex-row items-center justify-between max-[500px]:w-11/12">
                                        <input type="text" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded " placeholder="Dish Type" />
                                        <IoMdAdd />
                                    </div>
                                </div>
                                <div className="flex gap-2 text-[9px] cursor-pointer items-center">
                                    <input type="checkbox" name="agree" id="agree" />
                                    <label htmlFor="agree" className="cursor-pointer">I have read and agree to the <span className="font-bold">Term & Condition</span> of reciperave.</label>
                                </div>

                                <div className="flex gap-2">
                                    <button className="cursor-pointer bg-[#FFBC3B] h-8 w-28 rounded text-[#03383F]" type="submit">Update</button>
                                    <button onClick={goBack} className="cursor-pointer h-8 w-28 rounded text-[#03383F] border border-[#03383F]" type="reset">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
        }
        </>

    )
}

export default EditRecipe;
