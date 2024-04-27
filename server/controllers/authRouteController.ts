require("../db/conn");

export const logout = async (req:any, res:any) => {
  try {
    await res.clearCookie("jwtToken", { path: "/" });
    res.status(200).send("Logout Successfully");
  } catch (error) {
    console.log(error);
  }
};

export const admin = async (req:any, res:any) => {
  try {
    
    await res.send(req.rootUser);    
  } catch (error) {
    console.log(error);
  }
};


